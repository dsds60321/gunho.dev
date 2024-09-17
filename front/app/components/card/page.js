import HomeCard from '@/app/components/card/homeCard'

export default function CardPage({ children }) {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 mt-10 relative z-10">
        서비스 내역
      </h1>
      <div className="grid grid-cols-1 gap-6 w-3/4 h-full">{children}</div>
    </div>
  )
}
