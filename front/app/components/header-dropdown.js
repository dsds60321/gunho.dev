'use client'
import { useState } from 'react'
import ServiceModal from '@/app/components/service-modal'

export default function HeaderDropDown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false) // 모달 상태 추가

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
    setIsDropdownOpen(false) // 드롭다운 닫기
  }

  return (
    <div className="md:hidden relative">
      <button
        onClick={toggleDropdown}
        className="focus:outline-none bg-ghBlue text-white px-4 py-2 rounded-lg hover:bg-ghBlueHover"
      >
        메뉴
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-50">
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">
            홈
          </a>
          <a
            href="#"
            onClick={toggleModal}
            className="block px-4 py-2 hover:bg-gray-200"
          >
            서비스
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">
            연락처
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">
            로그인
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-200">
            회원가입
          </a>
        </div>
      )}
      {/* 모달 추가 */}
      <ServiceModal isOpen={isModalOpen} toggleModal={toggleModal} />
    </div>
  )
}
