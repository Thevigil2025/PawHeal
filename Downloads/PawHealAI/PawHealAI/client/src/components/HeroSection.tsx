import { Camera, Heart, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@assets/generated_images/Compassionate_stray_animal_care_7ce9dbdd.png";

interface HeroSectionProps {
  onStartAnalysis: () => void;
}

export default function HeroSection({ onStartAnalysis }: HeroSectionProps) {
  
  const features = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "AI Photo Analysis",
      description: "Upload photos of injured animals for instant AI-powered medical assessment"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "First Aid Guidance", 
      description: "Step-by-step emergency care instructions tailored to the specific injury"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Medicine Recommendations",
      description: "Safe dosage suggestions and treatment options based on animal size and type"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Emergency Contacts",
      description: "Quick access to nearby veterinarians and animal rescue organizations"
    }
  ];

  return (
    <div className="relative" data-testid="hero-section">
      {/* Hero Background */}
      <div className="relative min-h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-lg">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">PawCare AI</h1>
                <p className="text-primary-foreground/90">Emergency First Aid Assistant</p>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 leading-tight">
              AI-powered first aid for injured stray animals
            </h2>
            
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Upload photos of injured street dogs and cats to receive instant medical guidance, 
              treatment recommendations, and emergency veterinary contacts. Every second counts 
              in animal rescue.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="text-base px-8"
                onClick={onStartAnalysis}
                data-testid="button-start-analysis"
              >
                <Camera className="w-5 h-5 mr-2" />
                Start Photo Analysis
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="text-base px-8 bg-background/10 hover:bg-background/20 border-white/30 text-white"
                data-testid="button-emergency-contacts"
              >
                Emergency Contacts
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              How PawCare AI Helps Save Lives
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform provides immediate medical assistance for animal rescuers, 
              helping you make informed decisions when every minute matters.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover-elevate"
                data-testid={`feature-card-${index}`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">
                    {feature.icon}
                  </div>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="py-12 bg-primary/5 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-foreground mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Available Anytime</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground mb-1">&lt;30 sec</div>
              <div className="text-sm text-muted-foreground">Analysis Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground mb-1">Free</div>
              <div className="text-sm text-muted-foreground">Emergency Guidance</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}