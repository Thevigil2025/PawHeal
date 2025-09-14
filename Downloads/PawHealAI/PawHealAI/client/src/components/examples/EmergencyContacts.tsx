import EmergencyContacts from '../EmergencyContacts'

export default function EmergencyContactsExample() {
  // Mock emergency contacts data
  const mockContacts = [
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
    },
    {
      id: "shelter-1",
      name: "City Animal Rescue Shelter", 
      type: 'animal-shelter' as const,
      phone: "+1 (555) 456-7890",
      address: "789 Rescue Road, City 12347",
      distance: "5.7 km", 
      rating: 4.4,
      isOpen: true,
      hours: {
        today: "Open until 6:00 PM",
        emergency: false
      },
      specialties: ["Rescue Operations", "Rehabilitation", "Adoption Services"]
    }
  ]

  return (
    <div className="p-6 max-w-2xl">
      <EmergencyContacts contacts={mockContacts} />
    </div>
  )
}