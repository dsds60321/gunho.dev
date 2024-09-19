'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-500">An error occurred!</h1>
      <h2 className="mt-4 text-2xl font-semibold">
        페이지를 찾을 수 없습니다.
      </h2>
      <p className="mt-2 text-gray-600">
        요청하신 페이지가 존재하지 않거나, 삭제되었거나, 다른 주소로
        이동되었습니다.
      </p>
      <Link href="/" className="mt-4 text-blue-500 hover:underline">
        홈으로 돌아가기
      </Link>
    </div>
  );
}
