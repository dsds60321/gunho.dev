'use client';

import HeaderDropDown from '@/app/components/header-dropdown';
import { useState } from 'react';
import ServiceModal from '@/app/components/service-modal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <div className="flex items-center">
        <a href="/" className="cursor-pointer">
          <img
            src="/images/home.png"
            alt="Logo"
            className="h-10 mr-4"
            width="50"
            height="10"
          />
        </a>
        <form className="flex">
          <input
            type="text"
            placeholder="검색..."
            className="p-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring focus:ring-purple-500"
          />
          <button className="bg-ghBlue text-white p-2 rounded-r-lg hover:bg-ghBlueHover">
            검색
          </button>
        </form>
      </div>

      <nav className="hidden md:flex items-center space-x-4">
        <button onClick={toggleModal} className="hover:underline">
          서비스
        </button>
        <button className="bg-ghBlue text-white px-4 py-2 rounded-lg hover:bg-ghBlueHover">
          로그인
        </button>
        <button className="bg-ghBlue text-white px-4 py-2 rounded-lg hover:bg-ghBlueHover">
          회원가입
        </button>
      </nav>
      <HeaderDropDown />

      <ServiceModal isOpen={isModalOpen} toggleModal={toggleModal} />
    </header>
  );
};

export default Header;
