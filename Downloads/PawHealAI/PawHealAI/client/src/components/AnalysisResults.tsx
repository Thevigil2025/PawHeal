import { AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AnalysisResultsProps {
  imageUrl: string;
  analysis: {
    injuries: Array<{
      type: string;
      severity: 'low' | 'medium' | 'high' | 'critical';
      location: string;
      description: string;
    }>;
    overallAssessment: string;
    urgencyLevel: 'low' | 'medium' | 'high' | 'critical';
  };
}

export default function AnalysisResults({ imageUrl, analysis }: AnalysisResultsProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-destructive text-destructive-foreground';
      case 'high': return 'bg-destructive/80 text-destructive-foreground';
      case 'medium': return 'bg-yellow-500 text-white';
      case 'low': return 'bg-green-500 text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical':
      case 'high': return <AlertTriangle className="w-4 h-4" />;
      case 'medium': return <Clock className="w-4 h-4" />;
      case 'low': return <CheckCircle className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6" data-testid="analysis-results">
      {/* Photo with overlay markers */}
      <Card className="p-4">
        <div className="relative">
          <img 
            src={imageUrl} 
            alt="Analyzed animal photo" 
            className="w-full max-h-64 object-cover rounded-md"
            data-testid="analyzed-photo"
          />
          <div className="absolute top-3 right-3">
            <Badge className={getSeverityColor(analysis.urgencyLevel)}>
              {getSeverityIcon(analysis.urgencyLevel)}
              <span className="ml-1 capitalize">{analysis.urgencyLevel} Priority</span>
            </Badge>
          </div>
        </div>
      </Card>

      {/* Overall Assessment */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-3">
          AI Analysis Summary
        </h3>
        <p className="text-muted-foreground leading-relaxed" data-testid="text-overall-assessment">
          {analysis.overallAssessment}
        </p>
      </Card>

      {/* Detected Injuries */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Detected Injuries
        </h3>
        <div className="space-y-4">
          {analysis.injuries.map((injury, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-4 bg-card-foreground/5 rounded-lg"
              data-testid={`injury-item-${index}`}
            >
              <div className="flex-shrink-0">
                <Badge className={getSeverityColor(injury.severity)}>
                  {getSeverityIcon(injury.severity)}
                  <span className="ml-1 capitalize">{injury.severity}</span>
                </Badge>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-foreground">{injury.type}</h4>
                  <span className="text-sm text-muted-foreground">• {injury.location}</span>
                </div>
                <p className="text-sm text-muted-foreground">{injury.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}