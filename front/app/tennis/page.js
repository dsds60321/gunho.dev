import TennisCard from '@/app/components/tennis/card';
import { getTennis } from '@/app/actions/tennis';
import { Suspense } from 'react';
import Loading from '@/app/components/loading';

async function fetchTennis() {
  const { data } = await getTennis();
  return data;
}

export default async function Tennis() {
  const data = await fetchTennis();

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 mt-10 relative z-10">
        테니스 예약 현황
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <Suspense fallback={<Loading message={'loading'} />}>
          {data.code === 200 &&
            data.result.map(tennis => (
              <TennisCard key={tennis.SVCID} tennis={tennis} />
            ))}
        </Suspense>
      </div>
    </div>
  );
}
