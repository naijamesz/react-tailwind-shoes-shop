/* eslint-disable react/prop-types */
export default function Sidebar({ children, isOpen, onClickClose }) {
  return (
    <div>
      <div
        className={`fixed right-0 top-0 z-50 h-screen w-full transform overflow-y-auto  bg-white p-5 shadow-lg transition duration-300 md:w-[50%] lg:w-[35%] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <button onClick={onClickClose} className='absolute p-2 font-bold text-black right-4 top-4'>
          X
        </button>
        {children}
      </div>
      {isOpen && <div className='fixed top-0 left-0 z-20 w-full h-full bg-black opacity-50' />}
    </div>
  );
}
