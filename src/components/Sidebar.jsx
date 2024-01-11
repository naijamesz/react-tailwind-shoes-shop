/* eslint-disable react/prop-types */
export default function Sidebar({ children, isOpen, onClickClose }) {
  return (
    <>
      <div
        className={`fixed right-0 top-0 z-50 h-full w-full transform overflow-auto bg-white p-5 shadow-lg transition duration-300 dark:bg-night dark:text-white md:w-[50%] lg:w-[35%]  ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <button
          onClick={onClickClose}
          className='absolute p-2 text-black rounded-full right-4 top-4 hover:text-gray-800 dark:text-white'>
          X
        </button>
        {children}
      </div>
      {/*Overlay*/}
      {isOpen && <div className='fixed top-0 left-0 z-20 w-full h-full bg-black opacity-50'></div>}
    </>
  );
}
