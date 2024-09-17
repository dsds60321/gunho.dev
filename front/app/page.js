import CardPage from '@/app/components/card/page'
import HomeCard from '@/app/components/card/homeCard'

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen p-4">
      <CardPage>
        <HomeCard
          title="테니스 예약 현황"
          gifUrl="/images/home/tennis.gif"
          description="서울시 공공 테니스 구장에 대한 예약현황을 보여줍니다."
        />
      </CardPage>
    </main>
  )
}
