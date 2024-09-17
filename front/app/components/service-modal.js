import { useMemo } from 'react'
import { pathConfig } from '@/gh.config'

export default function ServiceModal({ isOpen, toggleModal }) {
  if (!isOpen) return null

  const routes = useMemo(() => pathConfig, [])

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-70" // 배경을 전체 영역으로 확장
        onClick={toggleModal} // 모달 외부 클릭 시 닫기
      />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 z-50 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">서비스 선택</h2>
        <ul className="space-y-3">
          {routes.map(router => (
            <>
              <li>
                <a
                  className="block text-purple-500 hover:underline"
                  href={router.path}
                >
                  {router.text}
                </a>
              </li>
              {router.children && (
                <ul className="ml-4 mt-2 space-y-2">
                  <li>
                    <a
                      className="block text-purple-500 hover:underline"
                      href={router.children.path}
                    >
                      {router.children.text}
                    </a>
                  </li>
                </ul>
              )}
            </>
          ))}
        </ul>
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 w-full"
          onClick={toggleModal}
        >
          닫기
        </button>
      </div>
    </>
  )
}
