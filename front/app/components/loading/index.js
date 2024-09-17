export default function Loading({ message }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="loader"></div>
        <p className="mt-4 text-lg text-gray-600">{message}</p>
      </div>
    </div>
  )
}
