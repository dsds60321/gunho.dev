'use client';

import ErrorHooks from '@/app/hooks/error-hooks';
import Link from 'next/link';

export default function Error() {
  return (
    <ErrorHooks title="서버 오류">
      <h2 className="mt-4 text-2xl font-semibold">
        페이지 로드시 오류가 발생했습니다.
      </h2>
      <p className="mt-2 text-gray-600">
        잠시 기다렸다가 다시 시도해주시기 바랍니다.
      </p>
      <Link href="/" className="mt-4 text-blue-500 hover:underline">
        홈으로 돌아가기
      </Link>
    </ErrorHooks>
  );
}
