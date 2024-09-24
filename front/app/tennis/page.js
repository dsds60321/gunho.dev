'use client';

import TennisCard from '@/app/components/tennis/card';
import { getTennis } from '@/app/actions/tennis';
import { Suspense, useEffect, useState } from 'react';
import Loading from '@/app/components/loading';
import { IoFilterOutline } from 'react-icons/io5';

export default function Tennis() {
  const [tennisDatas, setTennisDatas] = useState([]);
  const [filterDatas, setFilterDatas] = useState([]);

  useEffect(() => {
    const fetchTennisData = async () => {
      const { data } = await getTennis();
      setTennisDatas(data.result);
      setFilterDatas(data.result);
    };

    fetchTennisData();
  }, []);

  const setFilter = event => {
    const name = event.target.value.trim().toLowerCase();
    if (!name) {
      setFilterDatas(tennisDatas); // Reset to the full dataset
      return;
    }

    const filtered = tennisDatas.filter(data =>
      data.SVCNM.trim().toLowerCase().includes(name)
    );
    setFilterDatas(filtered);
  };

  const setOrder = ({ target }) => {
    const type = target.dataset.order;
    const click = target.dataset.click;

    // 클릭 상태 토글
    target.dataset.click = click === 'on' ? 'off' : 'on';

    // 정렬된 데이터를 저장할 새로운 배열 생성
    let sortedData = [...tennisDatas]; // 원본 배열을 복사

    if (type === 'payment') {
      sortedData.sort((a, b) => {
        if (click === 'on') {
          if (a.PAYATNM === '무료' && b.PAYATNM !== '무료') {
            return -1; // a가 먼저 오게
          }
          if (a.PAYATNM !== '무료' && b.PAYATNM === '무료') {
            return 1; // b가 먼저 오게
          }
        } else {
          if (a.PAYATNM !== '무료' && b.PAYATNM === '무료') {
            return -1; // b가 먼저 오게
          }
          if (a.PAYATNM === '무료' && b.PAYATNM !== '무료') {
            return 1; // a가 먼저 오게
          }
        }
        return 0; // 동일한 경우에는 순서 유지
      });
    }

    if (type === 'reservation') {
      sortedData.sort((a, b) => {
        if (click === 'on') {
          if (a.SVCSTATNM === '접수중' && b.SVCSTATNM !== '접수중') {
            return -1; // a가 먼저 오게
          }
          if (a.SVCSTATNM !== '접수중' && b.SVCSTATNM === '접수중') {
            return 1; // b가 먼저 오게
          }
        } else {
          if (a.SVCSTATNM !== '접수중' && b.SVCSTATNM === '접수중') {
            return -1; // b가 먼저 오게
          }
          if (a.SVCSTATNM === '접수중' && b.SVCSTATNM !== '접수중') {
            return 1; // a가 먼저 오게
          }
        }
        return 0; // 동일한 경우에는 순서 유지
      });
    }

    setFilterDatas(sortedData); // 상태 업데이트
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 mt-10 relative z-10">
        테니스 예약 현황
      </h1>

      <div className="relative flex w-full flex-col mb-4">
        <div className="relative flex w-full items-center justify-between rounded-lg border border-trueGray-200 border-opacity-80 p-1.5 sm:rounded-xl sm:p-1">
          <input
            onInput={setFilter}
            id="tennis"
            type="text"
            placeholder="이름으로 검색..."
            className="border rounded-lg p-2 flex-grow"
          />
          <span className="text-gray-200 m-2">|</span>
          <IoFilterOutline className="text-gray-400 font-bold mr-2" />
          <button
            className="m-0.5 rounded-md py-1 text-center text-xs font-medium leading-4 transition duration-300 ease-out text-brand-gray-500 bg-white drop-shadow cursor-pointer mr-2"
            aria-selected="false"
            data-order="payment"
            data-click="off"
            onClick={setOrder}
          >
            결제
          </button>
          <button
            className="m-0.5 rounded-md py-1 text-center text-xs font-medium leading-4 transition duration-300 ease-out text-brand-gray-500 bg-white drop-shadow cursor-pointer"
            aria-selected="false"
            data-order="reservation"
            data-click="off"
            onClick={setOrder}
          >
            예약
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <Suspense fallback={<Loading message={'loading'} />}>
          {filterDatas.length > 0 ? (
            filterDatas.map(tennis => (
              <TennisCard key={tennis.SVCID} tennis={tennis} />
            ))
          ) : (
            <Loading message={'로딩바 개선 요망'} />
          )}
        </Suspense>
      </div>
    </div>
  );
}
