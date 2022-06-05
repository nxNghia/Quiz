import React from 'react';

const Modal = ({ result, isModalOpen, setIsModalOpen, setIsFirst }) => {
  return (
    <div
      className={`${
        isModalOpen ? 'modal-container isOpen' : 'modal-container'
      }`}
    >
      <div className='modal-content'>
        <h1 className='title'>Congrats!</h1>
        <h3 className='subtitle'>
          You answered {(result * 100).toFixed(0)}% of questions correctly
        </h3>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '2rem',
          }}
        >
          <button
            className='button is-info is-outlined'
            onClick={() => setIsFirst(true)}
          >
            Play again
          </button>
          <button
            className='button is-info'
            onClick={() => setIsModalOpen(false)}
          >
            Show result
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;