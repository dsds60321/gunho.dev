'use client';
import { useEffect, useState } from 'react';
import { getDetail } from '@/app/actions/tennis';
import Calendar from 'react-calendar';
import Loading from '@/app/components/loading';
import 'react-calendar/dist/Calendar.css';
import Link from 'next/link'; // 기본 스타일 불러오기

export default function Detail({ params }) {
  const [tennis, setTennis] = useState(null);
  const [date, setDate] = useState(new Date());

  const handleDateChange = newDate => {
    setDate(newDate);
  };

  useEffect(() => {
    const fetchDetailTennis = async () => {
      const { data } = await getDetail(params);
      setTennis(data.result[0]);
    };

    fetchDetailTennis();
  }, [params]);

  const tileContent = ({ date }) => {
    const dateString = date
      .toISOString()
      .slice(0, 10)
      .replace(/-/g, '')
      .slice(0, 8); // YYYYMMDD 형식으로 변환

    if (tennis) {
      return (
        <div className="flex justify-center items-center h-full">
          {tennis.bookingList[dateString] ? (
            <span className="text-green-600 font-semibold">예약 가능</span>
          ) : (
            <span className="text-red-600 font-semibold">예약 불가능</span>
          )}
        </div>
      );
    }
    return null; // 기본 내용
  };

  return (
    <>
      {tennis ? (
        <div className="flex flex-col md:flex-row p-8">
          <div className="md:w-full p-4">
            <h1 className="text-2xl font-bold mb-4">테니스 구장 조회</h1>
            <div className="flex mb-4">
              <img
                src={tennis.IMGURL}
                alt="Tennis Court"
                width={300}
                height={200}
                className="rounded shadow-lg"
              />
              <div className="ml-4 flex-grow">
                <h2 className="text-xl font-semibold">구장 정보</h2>
                <table className="min-w-full mt-2 border border-gray-300">
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>이름:</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {tennis.SVCNM}
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>홈페이지:</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <Link href={tennis.SVCURL}>{tennis.SVCURL}</Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>위치:</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {tennis.AREANM}, {tennis.PLACENM}
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>전화번호:</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {tennis.TELNO}
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        <strong>결제:</strong>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {tennis.PAYATNM}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="md:w-full p-4">
              <h2 className="text-xl font-semibold mb-4">예약 가능 날짜</h2>
              <Calendar
                onChange={handleDateChange}
                value={date}
                className="shadow-lg rounded"
                tileContent={tileContent} // 날짜에 콘텐츠 추가
                minDate={
                  new Date(new Date().getFullYear(), new Date().getMonth(), 1)
                } // 현재 월의 1일
                maxDate={
                  new Date(
                    new Date().getFullYear(),
                    new Date().getMonth() + 1,
                    0
                  )
                } // 현재 월의 마지막 날
                style={{
                  backgroundColor: '#f9fafb', // 밝은 배경색
                  borderRadius: '10px',
                  border: '1px solid #e5e7eb' // 연한 경계선
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <Loading message={'로딩중....'} />
      )}
    </>
  );
}
