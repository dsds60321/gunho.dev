'use client'

import Header from '@/app/components/header'

export default function ClientLayout({ children }) {
  return (
    <>
      <Header />
      <div className={`flex transition-all duration-300`}>
        <main className="flex-1 bg-gray-100 p-4">{children}</main>
      </div>
    </>
  )
}
