import { useState } from "react";
import { CheckCircle, Circle, AlertTriangle, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface FirstAidStep {
  id: number;
  title: string;
  description: string;
  warning?: string;
  timeEstimate?: string;
  priority: 'immediate' | 'urgent' | 'important' | 'followup';
}

interface FirstAidInstructionsProps {
  steps: FirstAidStep[];
}

export default function FirstAidInstructions({ steps }: FirstAidInstructionsProps) {
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const toggleStepCompletion = (stepId: number) => {
    const newCompleted = new Set(completedSteps);
    if (newCompleted.has(stepId)) {
      newCompleted.delete(stepId);
    } else {
      newCompleted.add(stepId);
    }
    setCompletedSteps(newCompleted);
    console.log('Step toggled:', stepId, 'completed:', !completedSteps.has(stepId));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'immediate': return 'bg-destructive text-destructive-foreground';
      case 'urgent': return 'bg-yellow-500 text-white';
      case 'important': return 'bg-blue-500 text-white';
      case 'followup': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'immediate': return <AlertTriangle className="w-3 h-3" />;
      case 'urgent': return <Clock className="w-3 h-3" />;
      default: return null;
    }
  };

  return (
    <Card className="p-6" data-testid="first-aid-instructions">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            First Aid Instructions
          </h3>
          <p className="text-sm text-muted-foreground">
            Follow these steps carefully. Check off each step as you complete it.
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`relative p-4 border rounded-lg transition-all ${
                completedSteps.has(step.id) 
                  ? 'border-primary/30 bg-primary/5' 
                  : 'border-border bg-card-foreground/5'
              }`}
              data-testid={`instruction-step-${step.id}`}
            >
              <div className="flex items-start gap-4">
                {/* Step number and checkbox */}
                <div className="flex flex-col items-center gap-2">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full font-medium text-sm ${
                    completedSteps.has(step.id)
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {index + 1}
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-8 h-8 p-0"
                    onClick={() => toggleStepCompletion(step.id)}
                    data-testid={`button-toggle-step-${step.id}`}
                  >
                    {completedSteps.has(step.id) ? (
                      <CheckCircle className="w-5 h-5 text-primary" />
                    ) : (
                      <Circle className="w-5 h-5 text-muted-foreground" />
                    )}
                  </Button>
                </div>

                {/* Step content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className={`font-medium ${
                      completedSteps.has(step.id) 
                        ? 'text-muted-foreground line-through' 
                        : 'text-foreground'
                    }`}>
                      {step.title}
                    </h4>
                    
                    <Badge className={getPriorityColor(step.priority)}>
                      {getPriorityIcon(step.priority)}
                      <span className="ml-1 capitalize">{step.priority}</span>
                    </Badge>
                    
                    {step.timeEstimate && (
                      <Badge variant="outline">
                        <Clock className="w-3 h-3 mr-1" />
                        {step.timeEstimate}
                      </Badge>
                    )}
                  </div>
                  
                  <p className={`text-sm leading-relaxed ${
                    completedSteps.has(step.id) 
                      ? 'text-muted-foreground' 
                      : 'text-muted-foreground'
                  }`}>
                    {step.description}
                  </p>
                  
                  {step.warning && (
                    <div className="mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-md">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-yellow-800 dark:text-yellow-200">
                          <strong>Warning:</strong> {step.warning}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="pt-4 border-t">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              Progress: {completedSteps.size} of {steps.length} steps completed
            </span>
            <div className="w-24 bg-muted rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${(completedSteps.size / steps.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}