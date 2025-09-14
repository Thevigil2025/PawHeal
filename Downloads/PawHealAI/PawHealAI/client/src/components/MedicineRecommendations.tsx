import { Pill, AlertTriangle, Clock, Scale } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface MedicineRecommendation {
  name: string;
  purpose: string;
  dosage: {
    amount: string;
    frequency: string;
    duration: string;
    notes?: string;
  };
  warnings: string[];
  availability: 'over-the-counter' | 'prescription' | 'veterinary-only';
}

interface MedicineRecommendationsProps {
  recommendations: MedicineRecommendation[];
  animalSize: string;
  animalType: string;
}

export default function MedicineRecommendations({ 
  recommendations, 
  animalSize, 
  animalType 
}: MedicineRecommendationsProps) {
  
  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'over-the-counter': return 'bg-green-500 text-white';
      case 'prescription': return 'bg-yellow-500 text-white';
      case 'veterinary-only': return 'bg-blue-500 text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Card className="p-6" data-testid="medicine-recommendations">
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Pill className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">
              Medicine Recommendations
            </h3>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Scale className="w-4 h-4" />
            <span>For {animalSize} {animalType}</span>
          </div>
        </div>

        {/* Important disclaimer */}
        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200 mb-1">
                Important Medical Disclaimer
              </p>
              <p className="text-xs text-yellow-700 dark:text-yellow-300">
                These recommendations are for emergency first aid only. Always consult a veterinarian before administering any medication. Dosages are estimates and may vary.
              </p>
            </div>
          </div>
        </div>

        {/* Medicine list */}
        <div className="space-y-4">
          {recommendations.map((medicine, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg bg-card-foreground/5"
              data-testid={`medicine-item-${index}`}
            >
              <div className="space-y-4">
                {/* Medicine header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{medicine.name}</h4>
                    <p className="text-sm text-muted-foreground">{medicine.purpose}</p>
                  </div>
                  <Badge className={getAvailabilityColor(medicine.availability)}>
                    {medicine.availability.replace('-', ' ')}
                  </Badge>
                </div>

                {/* Dosage information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-3 bg-background/50 rounded-md">
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <Pill className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        Amount
                      </span>
                    </div>
                    <p className="text-sm font-medium text-foreground">{medicine.dosage.amount}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <Clock className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        Frequency
                      </span>
                    </div>
                    <p className="text-sm font-medium text-foreground">{medicine.dosage.frequency}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <Clock className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        Duration
                      </span>
                    </div>
                    <p className="text-sm font-medium text-foreground">{medicine.dosage.duration}</p>
                  </div>
                </div>

                {/* Dosage notes */}
                {medicine.dosage.notes && (
                  <div className="text-sm text-muted-foreground">
                    <strong>Notes:</strong> {medicine.dosage.notes}
                  </div>
                )}

                {/* Warnings */}
                {medicine.warnings.length > 0 && (
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium text-foreground">Warnings & Precautions:</h5>
                    <ul className="space-y-1">
                      {medicine.warnings.map((warning, warningIndex) => (
                        <li 
                          key={warningIndex}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <AlertTriangle className="w-3 h-3 text-yellow-500 flex-shrink-0 mt-0.5" />
                          <span>{warning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="pt-4 border-t">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Need to find these medications?
            </p>
            <Button variant="outline" size="sm" data-testid="button-find-pharmacy">
              Find Nearby Pharmacy
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}