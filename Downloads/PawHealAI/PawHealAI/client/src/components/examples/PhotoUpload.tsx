import PhotoUpload from '../PhotoUpload'

export default function PhotoUploadExample() {
  const handlePhotoSelect = (file: File) => {
    console.log('Photo selected in example:', file.name)
  }

  return (
    <div className="p-6">
      <PhotoUpload onPhotoSelect={handlePhotoSelect} />
    </div>
  )
}