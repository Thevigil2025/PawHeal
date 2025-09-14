import { useState, useRef } from "react";
import { Camera, Upload, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface PhotoUploadProps {
  onPhotoSelect: (file: File) => void;
}

export default function PhotoUpload({ onPhotoSelect }: PhotoUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type.startsWith('image/')) {
      onPhotoSelect(files[0]);
      console.log('Photo dropped:', files[0].name);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onPhotoSelect(files[0]);
      console.log('Photo selected:', files[0].name);
    }
  };

  const openFileDialog = () => fileInputRef.current?.click();
  const openCameraDialog = () => cameraInputRef.current?.click();

  return (
    <Card
      className={`p-8 text-center border-2 border-dashed transition-all duration-200 hover-elevate ${
        isDragging ? 'border-primary bg-primary/5' : 'border-muted'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      data-testid="photo-upload-area"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
          <ImageIcon className="w-12 h-12 text-primary" />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Upload Photo of Injured Animal
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md">
            Take a clear photo showing the injury. Our AI will analyze it and provide immediate first-aid guidance.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
          <Button 
            onClick={openCameraDialog}
            className="flex-1"
            data-testid="button-take-photo"
          >
            <Camera className="w-4 h-4 mr-2" />
            Take Photo
          </Button>
          
          <Button 
            variant="outline"
            onClick={openFileDialog}
            className="flex-1"
            data-testid="button-upload-photo"
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload Photo
          </Button>
        </div>
        
        <p className="text-xs text-muted-foreground">
          Accepted formats: JPG, PNG, WEBP (max 10MB)
        </p>
      </div>
      
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileSelect}
      />
      
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={handleFileSelect}
      />
    </Card>
  );
}