import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface AnimalTypeSelectorProps {
  onAnimalSelect: (animal: string, size: string) => void;
}

export default function AnimalTypeSelector({ onAnimalSelect }: AnimalTypeSelectorProps) {
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const animals = [
    { id: "dog", label: "Dog", icon: "🐕" },
    { id: "cat", label: "Cat", icon: "🐈" },
    { id: "other", label: "Other", icon: "🐾" }
  ];

  const sizes = [
    { id: "small", label: "Small", description: "Under 10kg" },
    { id: "medium", label: "Medium", description: "10-25kg" },
    { id: "large", label: "Large", description: "Over 25kg" }
  ];

  const handleSelection = (animal: string, size: string) => {
    setSelectedAnimal(animal);
    setSelectedSize(size);
    onAnimalSelect(animal, size);
    console.log('Animal selected:', { animal, size });
  };

  return (
    <Card className="p-6" data-testid="animal-type-selector">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            What type of animal needs help?
          </h3>
          <p className="text-sm text-muted-foreground">
            This helps us provide more accurate treatment recommendations
          </p>
        </div>

        <div>
          <h4 className="text-sm font-medium text-foreground mb-3">Animal Type</h4>
          <div className="grid grid-cols-3 gap-3">
            {animals.map((animal) => (
              <Button
                key={animal.id}
                variant={selectedAnimal === animal.id ? "default" : "outline"}
                className="h-20 flex-col"
                onClick={() => {
                  setSelectedAnimal(animal.id);
                  if (selectedSize) handleSelection(animal.id, selectedSize);
                }}
                data-testid={`button-animal-${animal.id}`}
              >
                <span className="text-2xl mb-1">{animal.icon}</span>
                <span className="text-sm">{animal.label}</span>
              </Button>
            ))}
          </div>
        </div>

        {selectedAnimal && selectedAnimal !== "other" && (
          <div>
            <h4 className="text-sm font-medium text-foreground mb-3">Estimated Size</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {sizes.map((size) => (
                <Button
                  key={size.id}
                  variant={selectedSize === size.id ? "default" : "outline"}
                  className="h-16 flex-col"
                  onClick={() => {
                    setSelectedSize(size.id);
                    handleSelection(selectedAnimal, size.id);
                  }}
                  data-testid={`button-size-${size.id}`}
                >
                  <span className="font-medium">{size.label}</span>
                  <span className="text-xs text-muted-foreground">{size.description}</span>
                </Button>
              ))}
            </div>
          </div>
        )}

        {selectedAnimal === "other" && (
          <div className="text-center p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground">
              We'll provide general first-aid guidance applicable to most small animals
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}