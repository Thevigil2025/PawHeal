import { useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Components
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PhotoUpload from "@/components/PhotoUpload";
import AnimalTypeSelector from "@/components/AnimalTypeSelector";
import LoadingAnalysis from "@/components/LoadingAnalysis";
import AnalysisResults from "@/components/AnalysisResults";
import FirstAidInstructions from "@/components/FirstAidInstructions";
import MedicineRecommendations from "@/components/MedicineRecommendations";
import EmergencyContacts from "@/components/EmergencyContacts";

// Types
type AppStep = 'hero' | 'upload' | 'animal-selection' | 'analyzing' | 'results';

interface AnalysisData {
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
  firstAidSteps: Array<{
    id: number;
    title: string;
    description: string;
    warning?: string;
    timeEstimate?: string;
    priority: 'immediate' | 'urgent' | 'important' | 'followup';
  }>;
  medicineRecommendations: Array<{
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
  }>;
  animalType: string;
  animalSize: string;
}

function App() {
  const [currentStep, setCurrentStep] = useState<AppStep>('hero');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [animalType, setAnimalType] = useState<string>('');
  const [animalSize, setAnimalSize] = useState<string>('');
  const [analysisData, setAnalysisData] = useState<AnalysisData | null>(null);

  // Mock emergency contacts for the prototype
  //todo: remove mock functionality - replace with real API integration
  const mockEmergencyContacts = [
    {
      id: "emergency-vet-1",
      name: "City Emergency Veterinary Clinic",
      type: 'emergency-vet' as const,
      phone: "+1 (555) 123-4567",
      address: "123 Emergency Lane, Downtown, City 12345",
      distance: "2.3 km",
      rating: 4.8,
      isOpen: true,
      hours: {
        today: "Open 24/7",
        emergency: true
      },
      specialties: ["Emergency Surgery", "Critical Care", "Trauma"]
    },
    {
      id: "vet-clinic-1", 
      name: "Happy Paws Veterinary Clinic",
      type: 'veterinary-clinic' as const,
      phone: "+1 (555) 987-6543",
      address: "456 Pet Street, Suburb, City 12346",
      distance: "4.1 km",
      rating: 4.6,
      isOpen: false,
      hours: {
        today: "Closed - Opens 8:00 AM",
        emergency: false
      },
      specialties: ["General Practice", "Vaccinations", "Dental Care"]
    }
  ];

  const handleStartAnalysis = () => {
    setCurrentStep('upload');
  };

  const handlePhotoSelect = (file: File) => {
    setSelectedFile(file);
    setCurrentStep('animal-selection');
    console.log('Photo selected:', file.name);
  };

  const handleAnimalSelect = (animal: string, size: string) => {
    setAnimalType(animal);
    setAnimalSize(size);
    setCurrentStep('analyzing');
    console.log('Animal selected:', { animal, size });
    
    // Simulate AI analysis delay
    setTimeout(() => {
      simulateAnalysis(animal, size);
    }, 3000);
  };

  const simulateAnalysis = (animal: string, size: string) => {
    //todo: remove mock functionality - replace with real OpenAI Vision API integration
    const mockAnalysisData: AnalysisData = {
      imageUrl: selectedFile ? URL.createObjectURL(selectedFile) : '',
      analysis: {
        injuries: [
          {
            type: "Laceration",
            severity: 'medium' as const,
            location: "Right front paw",
            description: "Shallow cut approximately 2cm long, appears to be healing but may need cleaning"
          },
          {
            type: "Skin Irritation", 
            severity: 'low' as const,
            location: "Behind left ear",
            description: "Mild redness and scratching marks, possibly from fleas or allergic reaction"
          }
        ],
        overallAssessment: `The ${animal} shows signs of minor to moderate injuries that can be treated with basic first aid. The laceration on the paw should be cleaned and monitored for infection. Overall condition appears stable but would benefit from veterinary care within 24-48 hours.`,
        urgencyLevel: 'medium' as const
      },
      firstAidSteps: [
        {
          id: 1,
          title: "Ensure Safety",
          description: `Approach the ${animal} slowly and calmly. Look for signs of aggression or fear. If the animal appears aggressive, maintain distance and call local animal control.`,
          warning: "Never attempt to help an aggressive or panicked animal without proper equipment",
          timeEstimate: "2-3 min",
          priority: 'immediate' as const
        },
        {
          id: 2,
          title: "Control Bleeding",
          description: "Apply gentle pressure to the wound using clean cloth or gauze. Do not remove any objects stuck in the wound. Elevate the injured area if possible.",
          timeEstimate: "5-10 min",
          priority: 'urgent' as const
        },
        {
          id: 3,
          title: "Clean the Wound", 
          description: "Once bleeding is controlled, gently clean around the wound with clean water or saline solution. Avoid getting soap directly in the wound.",
          timeEstimate: "5 min",
          priority: 'important' as const
        },
        {
          id: 4,
          title: "Monitor and Transport",
          description: `Keep the ${animal} calm and warm. Contact the nearest veterinary clinic and arrange immediate transport if the injury is severe.`,
          timeEstimate: "Ongoing",
          priority: 'followup' as const
        }
      ],
      medicineRecommendations: [
        {
          name: "Saline Solution (0.9% NaCl)",
          purpose: "Wound cleaning and irrigation",
          dosage: {
            amount: "As needed for cleaning",
            frequency: "Once or as needed",
            duration: "Single use",
            notes: "Use sterile saline if available, or clean water as alternative"
          },
          warnings: [
            "Do not use tap water for deep wounds",
            "Ensure solution is at room temperature"
          ],
          availability: 'over-the-counter' as const
        }
      ],
      animalType: animal,
      animalSize: size
    };

    setAnalysisData(mockAnalysisData);
    setCurrentStep('results');
  };

  const handleBackToStart = () => {
    setCurrentStep('hero');
    setSelectedFile(null);
    setAnimalType('');
    setAnimalSize('');
    setAnalysisData(null);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'hero':
        return <HeroSection onStartAnalysis={handleStartAnalysis} />;
        
      case 'upload':
        return (
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto">
              <PhotoUpload onPhotoSelect={handlePhotoSelect} />
            </div>
          </div>
        );
        
      case 'animal-selection':
        return (
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-md mx-auto">
              <AnimalTypeSelector onAnimalSelect={handleAnimalSelect} />
            </div>
          </div>
        );
        
      case 'analyzing':
        return (
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto">
              <LoadingAnalysis />
            </div>
          </div>
        );
        
      case 'results':
        return analysisData ? (
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto space-y-8">
              <AnalysisResults 
                imageUrl={analysisData.imageUrl}
                analysis={analysisData.analysis}
              />
              
              <FirstAidInstructions steps={analysisData.firstAidSteps} />
              
              <MedicineRecommendations 
                recommendations={analysisData.medicineRecommendations}
                animalSize={analysisData.animalSize}
                animalType={analysisData.animalType}
              />
              
              <EmergencyContacts contacts={mockEmergencyContacts} />
              
              <div className="text-center pt-8">
                <button
                  onClick={handleBackToStart}
                  className="text-primary hover:text-primary/80 underline"
                  data-testid="button-back-to-start"
                >
                  Analyze Another Animal
                </button>
              </div>
            </div>
          </div>
        ) : null;
        
      default:
        return <HeroSection onStartAnalysis={handleStartAnalysis} />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background">
          {currentStep !== 'hero' && <Header />}
          {renderCurrentStep()}
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
