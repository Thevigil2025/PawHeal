import { Card } from "@/components/ui/card";
import { Loader2, Heart } from "lucide-react";

export default function LoadingAnalysis() {
  return (
    <Card className="p-8 text-center" data-testid="loading-analysis">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
            <Heart className="w-10 h-10 text-primary" />
          </div>
          <Loader2 className="w-6 h-6 text-primary absolute -bottom-1 -right-1 animate-spin bg-background rounded-full p-1" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-foreground">
            Analyzing Photo...
          </h3>
          <p className="text-muted-foreground max-w-md">
            Our AI is carefully examining the image to identify injuries and provide the best first-aid recommendations.
          </p>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span>This usually takes 10-15 seconds</span>
        </div>
      </div>
    </Card>
  );
}