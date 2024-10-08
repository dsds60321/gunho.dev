'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function TennisCard({ tennis }) {
  const router = useRouter();

  function detailTennis() {
    localStorage.setItem('tennisData', JSON.stringify(tennis));
    router.push(`/tennis/${tennis.SVCID}`);
  }

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-md p-4 m-2 cursor-pointer"
        onClick={detailTennis}
      >
        <img
          src={tennis.IMGURL}
          alt={tennis.SVCNM}
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <div className="mt-4">
          <div className="mt-2">
            <p className="text-sm text-gray-600">
              <strong>이름:</strong> {tennis.SVCNM}
            </p>
            <div className="mt-4">
              <p>
                <span className="text-sm text-gray-600">결제 상태: </span>
                <span
                  className={`text-sm ${tennis.PAYATNM === '유료' ? 'text-red-600' : 'text-blue-500'}`}
                >
                  {tennis.PAYATNM}
                </span>
              </p>
              <p>
                <span className="text-sm text-gray-600">예약 상태: </span>
                <span
                  className={`text-sm ${tennis.SVCSTATNM === '접수중' ? 'text-blue-500' : 'text-red-600'}`}
                >
                  {tennis.SVCSTATNM}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
