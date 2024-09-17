import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleOverlayClick = e => {
    // 클릭한 곳이 모달 내부가 아닐 경우 모달을 닫는다.
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={handleOverlayClick} // 외부 클릭 이벤트 추가
    >
      <div className="bg-white rounded-lg p-6 w-11/12 md:w-2/3 shadow-lg">
        <button
          onClick={onClose}
          className="text-lg text-gray-600 hover:text-gray-800 float-end"
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
