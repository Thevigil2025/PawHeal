import AnimalTypeSelector from '../AnimalTypeSelector'

export default function AnimalTypeSelectorExample() {
  const handleAnimalSelect = (animal: string, size: string) => {
    console.log('Animal selected in example:', { animal, size })
  }

  return (
    <div className="p-6 max-w-md">
      <AnimalTypeSelector onAnimalSelect={handleAnimalSelect} />
    </div>
  )
}