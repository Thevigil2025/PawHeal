import MedicineRecommendations from '../MedicineRecommendations'

export default function MedicineRecommendationsExample() {
  // Mock medicine recommendations data
  const mockRecommendations = [
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
    },
    {
      name: "Chlorhexidine Solution (2%)",
      purpose: "Antiseptic wound disinfection",
      dosage: {
        amount: "Dilute to 0.5% before use",
        frequency: "Apply once to wound area",
        duration: "Single application",
        notes: "Dilute with sterile water - 1 part chlorhexidine to 3 parts water"
      },
      warnings: [
        "Can be toxic if ingested in large quantities",
        "Avoid contact with eyes and mucous membranes",
        "Do not use on cats without veterinary guidance"
      ],
      availability: 'veterinary-only' as const
    }
  ]

  return (
    <div className="p-6 max-w-2xl">
      <MedicineRecommendations 
        recommendations={mockRecommendations}
        animalSize="medium"
        animalType="dog"
      />
    </div>
  )
}