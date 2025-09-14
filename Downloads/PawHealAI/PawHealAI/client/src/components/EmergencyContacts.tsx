import { Phone, MapPin, Clock, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface EmergencyContact {
  id: string;
  name: string;
  type: 'veterinary-clinic' | 'emergency-vet' | 'animal-shelter' | 'rescue-organization';
  phone: string;
  address: string;
  distance?: string;
  rating?: number;
  isOpen: boolean;
  hours: {
    today: string;
    emergency: boolean;
  };
  specialties?: string[];
}

interface EmergencyContactsProps {
  contacts: EmergencyContact[];
}

export default function EmergencyContacts({ contacts }: EmergencyContactsProps) {
  
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'emergency-vet': return 'bg-destructive text-destructive-foreground';
      case 'veterinary-clinic': return 'bg-primary text-primary-foreground';
      case 'animal-shelter': return 'bg-blue-500 text-white';
      case 'rescue-organization': return 'bg-green-500 text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'emergency-vet': return 'Emergency Vet';
      case 'veterinary-clinic': return 'Vet Clinic';
      case 'animal-shelter': return 'Animal Shelter';
      case 'rescue-organization': return 'Rescue Org';
      default: return type;
    }
  };

  const handleCallContact = (phone: string, name: string) => {
    console.log('Calling:', name, phone);
    // In a real app, this would initiate a phone call
    window.location.href = `tel:${phone}`;
  };

  const handleGetDirections = (address: string) => {
    console.log('Getting directions to:', address);
    // In a real app, this would open maps with directions
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://maps.google.com/maps?daddr=${encodedAddress}`, '_blank');
  };

  return (
    <Card className="p-6" data-testid="emergency-contacts">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Emergency Contacts
          </h3>
          <p className="text-sm text-muted-foreground">
            Nearby veterinary services and animal rescue organizations
          </p>
        </div>

        <div className="space-y-4">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="p-4 border rounded-lg bg-card-foreground/5 hover-elevate"
              data-testid={`contact-item-${contact.id}`}
            >
              <div className="space-y-4">
                {/* Header with name and type */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-medium text-foreground">{contact.name}</h4>
                      <Badge className={getTypeColor(contact.type)}>
                        {getTypeLabel(contact.type)}
                      </Badge>
                      {contact.hours.emergency && (
                        <Badge variant="outline" className="text-destructive border-destructive">
                          24/7 Emergency
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      {contact.rating && (
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{contact.rating}</span>
                        </div>
                      )}
                      {contact.distance && (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{contact.distance}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <div className={`w-2 h-2 rounded-full ${contact.isOpen ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span className="text-xs text-muted-foreground">
                      {contact.isOpen ? 'Open' : 'Closed'}
                    </span>
                  </div>
                </div>

                {/* Contact details */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground">{contact.phone}</span>
                  </div>
                  
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
                    <span className="text-muted-foreground">{contact.address}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{contact.hours.today}</span>
                  </div>
                </div>

                {/* Specialties */}
                {contact.specialties && contact.specialties.length > 0 && (
                  <div>
                    <h5 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                      Specialties
                    </h5>
                    <div className="flex flex-wrap gap-1">
                      {contact.specialties.map((specialty, index) => (
                        <Badge key={index} variant="secondary">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action buttons */}
                <div className="flex gap-2">
                  <Button 
                    onClick={() => handleCallContact(contact.phone, contact.name)}
                    className="flex-1"
                    data-testid={`button-call-${contact.id}`}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  
                  <Button 
                    variant="outline"
                    onClick={() => handleGetDirections(contact.address)}
                    className="flex-1"
                    data-testid={`button-directions-${contact.id}`}
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Directions
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Add contact or report missing */}
        <div className="pt-4 border-t">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Don't see your local clinic listed?
            </p>
            <Button variant="outline" size="sm" data-testid="button-add-contact">
              Add Contact
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}