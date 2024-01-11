import { TbShoppingBag } from 'react-icons/tb';
import NikeLogo from '../assets/nike-logo.svg?react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';

const ROUTES = ['Home', 'About', 'Services', 'Pricing', 'Contact'];
export function Nav() {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  return (
    <nav className='flex flex-wrap items-center justify-between'>
      {/* Logo */}
      <a href='#'>
        <NikeLogo className='w-20 h-20' />
      </a>

      {/* Burger button */}
      <button
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
        className='p-2 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 lg:hidden'>
        <RxHamburgerMenu size={25} />
      </button>

      {/* Menu list */}
      <div className={`${isMobileMenuShown === false && 'hidden'} w-full lg:block lg:w-auto`}>
        <ul className='flex flex-col p-4 text-lg border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:border-none lg:bg-transparent'>
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`cursor-pointer rounded px-3 py-2 ${
                  i === 0 ? 'bg-blue-500 text-white lg:bg-transparent lg:text-blue-500 ' : 'hover:bg-gray-100'
                }`}
                key={route}>
                <a>{route}</a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Cart button */}
      <div className='fixed bottom-4 left-4 lg:static'>
        <div className='w-12 h-12 bg-white rounded-full shadow-md flex-center'>
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}
