/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useState } from 'react';
import { QTY, SIZES } from '../constant';
import Select from './Select';

export default function ShoeDetail({ shoe, onClickAdd }) {
  const [qty, setQty] = useState();
  const [size, setSize] = useState();
  const isBtnDisabled = !qty || !size;
  const shoeImage = (
    <div className='flex-center relative h-[100%] bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4CC4C6] to-90%'>
      <img className='animate-float' src={shoe.src} />
    </div>
  );

  const shoeDescription = (
    <div className='space-y-6 dark:text-white'>
      <div className='text-5xl font-black pulse md:text-9xl'>{shoe.title}</div>
      <div className='font-medium text-md md:text-xl '>{shoe.description}</div>
      <div className='flex items-center space-x-6'>
        <div className='text-3xl font-extrabold md:text-6xl'>{shoe.price} $</div>
        <Select onChange={setQty} options={QTY} title='QTY' />
        <Select onChange={setSize} title='SIZE' options={SIZES} />
      </div>
      <div className='flex items-center space-x-10'>
        <button
          disabled={isBtnDisabled}
          onClick={() => onClickAdd(shoe, qty, size)}
          className={`${
            !isBtnDisabled && 'anim-click'
          } flex-center h-14 w-44 bg-black text-white  hover:bg-gray-900 enabled:active:bg-gray-700 disabled:animate-none dark:bg-white dark:text-black dark:hover:bg-night-50  dark:hover:text-white`}>
          Add to bag
        </button>

        <a href='#' className='text-lg font-bold underline underline-offset-4'>
          View details
        </a>
      </div>
    </div>
  );

  return (
    <>
      <div className='flex-1 mt-10 space-y-8 lg:mt-0 '>{shoeDescription}</div>
      {/* ml-28 to make it align with the menu */}
      <div className='flex-1 lg:-mt-52 lg:ml-28'>{shoeImage}</div>
    </>
  );
}
