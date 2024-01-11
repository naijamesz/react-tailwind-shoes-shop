/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { TbShoppingBag } from 'react-icons/tb';
import { BiMoon, BiSun } from 'react-icons/bi';
import NikeLogo from '../assets/nike-logo.svg?react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useEffect, useState } from 'react';

const ROUTES = ['Home', 'About', 'Services', 'Pricing', 'Contact'];
export default function Nav({ onClickShoppingBtn }) {
  const [theme, setTheme] = useState();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(function loadThemeMode() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.classList.add(savedTheme);
      setTheme(savedTheme);
    }
  }, []);

  const buttonBurger = (
    <button
      onClick={() => setShowMobileMenu(prev => !prev)}
      type='button'
      className='w-10 h-10 p-2 text-sm text-gray-500 rounded-lg anim-click hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden '>
      <RxHamburgerMenu size={'auto'} />
    </button>
  );

  const menuList = (
    // lg:pl-8 to counter the mr-8 on the shopping button
    <div className={`mb-4 w-full lg:mb-0 lg:block lg:w-auto lg:pl-8 ${!showMobileMenu && 'hidden'}`}>
      <ul className='flex flex-col p-4 text-lg border border-gray-100 rounded-lg bg-gray-50 dark:border-gray-700 dark:bg-gray-800 lg:flex-row lg:space-x-8 lg:border-0 lg:bg-transparent lg:p-0 lg:dark:bg-transparent '>
        {ROUTES.map((route, i) => (
          <li key={route} className=' py-1 [&:nth-child(1)]:text-red-400'>
            <a
              href='#'
              className={`${i == 0 && 'bg-blue-500 text-white lg:bg-transparent lg:text-black'}
              ${i > 2 && 'lg:text-white'} 
              ${i > 0 && 'hover:bg-gray-100 lg:hover:bg-transparent'}
              block rounded py-2 pl-3 pr-4 text-black   dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 
              lg:hover:text-blue-700 lg:dark:hover:bg-transparent lg:dark:hover:text-blue-500
`}>
              {route}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  const ping = (
    <div className='absolute -right-1 -top-1'>
      <span className='relative flex w-6 h-6'>
        <span className='absolute inline-flex w-full h-full rounded-full opacity-65 animate-ping bg-sky-400'></span>
        <span className='relative inline-flex w-6 h-6 text-white rounded-full flex-center bg-sky-500'>
          {cartItems.length}
        </span>
      </span>
    </div>
  );
  const buttonShopping = (
    <div onClick={onClickShoppingBtn} className='fixed w-12 h-12 mr-8 bottom-4 left-4 lg:static'>
      <div className='w-full h-full bg-white rounded-full shadow-sm cursor-pointer anim-click flex-center '>
        <TbShoppingBag size={15} />
        {cartItems.length > 0 && ping}
      </div>
    </div>
  );

  const logoLink = (
    <a href='#' className='flex items-center'>
      <NikeLogo className='w-20 h-20' fill={theme === 'dark' ? 'white' : 'black'} />
    </a>
  );

  const toggleThemeMode = () => {
    if (localStorage.getItem('theme') !== 'dark') {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }

    // Whenever the user explicitly chooses to respect the OS preference
  };
  return (
    <nav className='relative z-20 flex flex-wrap items-center justify-between'>
      {logoLink}
      {buttonBurger}
      {menuList}
      {buttonShopping}
      <div className='fixed bottom-4 right-4'>
        <button
          onClick={toggleThemeMode}
          className='px-4 py-2 font-semibold text-white rounded-full shadow-lg bg-night-50 dark:bg-white dark:text-night'>
          {!theme || theme === 'light' ? <BiMoon /> : <BiSun />}
        </button>
      </div>
    </nav>
  );
}
