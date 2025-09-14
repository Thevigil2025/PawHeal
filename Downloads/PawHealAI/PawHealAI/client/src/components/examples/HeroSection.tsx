import HeroSection from '../HeroSection'

export default function HeroSectionExample() {
  const handleStartAnalysis = () => {
    console.log('Start analysis clicked in example')
  }

  return <HeroSection onStartAnalysis={handleStartAnalysis} />
}