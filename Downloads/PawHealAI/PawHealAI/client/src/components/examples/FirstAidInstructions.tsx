import FirstAidInstructions from '../FirstAidInstructions'

export default function FirstAidInstructionsExample() {
  // Mock first aid steps data
  const mockSteps = [
    {
      id: 1,
      title: "Ensure Safety",
      description: "Approach the animal slowly and calmly. Look for signs of aggression or fear. If the animal appears aggressive, maintain distance and call local animal control.",
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
      description: "Keep the animal calm and warm. Contact the nearest veterinary clinic and arrange immediate transport if the injury is severe.",
      timeEstimate: "Ongoing",
      priority: 'followup' as const
    }
  ]

  return (
    <div className="p-6 max-w-2xl">
      <FirstAidInstructions steps={mockSteps} />
    </div>
  )
}