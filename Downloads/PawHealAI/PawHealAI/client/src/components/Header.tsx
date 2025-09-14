import { Heart, Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="border-b bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-md">
              <Heart className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-foreground">PawCare AI</h1>
              <p className="text-sm text-muted-foreground">Emergency First Aid</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm" data-testid="button-emergency-contacts">
              <Phone className="w-4 h-4 mr-2" />
              Emergency Contacts
            </Button>
          </div>
          
          <Button variant="ghost" size="icon" className="md:hidden" data-testid="button-menu">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}