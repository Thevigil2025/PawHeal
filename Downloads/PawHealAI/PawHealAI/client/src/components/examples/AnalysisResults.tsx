import AnalysisResults from '../AnalysisResults'

export default function AnalysisResultsExample() {
  // Mock data for demonstration
  const mockAnalysis = {
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
    overallAssessment: "The animal shows signs of minor to moderate injuries that can be treated with basic first aid. The laceration on the paw should be cleaned and monitored for infection. Overall condition appears stable but would benefit from veterinary care within 24-48 hours.",
    urgencyLevel: 'medium' as const
  }

  // Create a mock image URL (this would normally be the uploaded image)
  const mockImageUrl = "data:image/svg+xml,%3Csvg width='300' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23e2e8f0'/%3E%3Ctext x='50%25' y='50%25' font-size='16' text-anchor='middle' dy='.3em' fill='%236b7280'%3EMock Animal Photo%3C/text%3E%3C/svg%3E"

  return (
    <div className="p-6 max-w-2xl">
      <AnalysisResults 
        imageUrl={mockImageUrl}
        analysis={mockAnalysis}
      />
    </div>
  )
}