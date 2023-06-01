import React, { useState } from 'react';
import { siteLogo, iconCart, avatar, iconMenu, iconClose, product1Thumbnail, iconDelete } from '../assets/images';

function Navbar({ cart, setCart }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [cartExpanded, setCartExpanded] = useState(false);
  const { count, name, price } = cart;

  const Cart = () => (
    <div className={`absolute top-full right-4 z-50 bg-white w-full max-w-xs transition-all ease-in-out grid ${cartExpanded ? 'grid-rows-[1fr] ml-4 p-4' : 'grid-rows-[0fr]'} shadow-lg`}>
      <div className='overflow-hidden flex flex-col gap-4'>
        <h2 className='text-lg font-bold'>Cart</h2>
        <hr />
        {
          Object.entries(cart).length
          ? <>
            <div className='flex gap-2'>
              <img
                src={product1Thumbnail}
                alt=''
                className='w-10 aspect-square rounded-lg'
              />
              <div>
                <p>{name}</p>
                <p>{`${price} x ${count}`} <strong>{price * count}</strong></p>
              </div>
              <button onClick={() => setCart({})}>
                <img src={iconDelete} alt='Empty Cart' />
              </button>
            </div>
            <button className='w-full px-8 py-2 inline-flex justify-center text-white font-bold bg-accent-400 hover:bg-accent-300 rounded-md shadow-md'>
              <span>Checkout</span>
            </button>
          </>
          : <p className='text-primary-500 font-bold'>Your cart is empty.</p>
        }
      </div>
    </div>
  );

  return (
    <header>
      <div className='relative w-full max-w-6xl px-8 mx-auto flex gap-4 md:gap-6 lg:gap-8 items-center py-6 border-b border-b-primary-400'>
        <button
          className='z-50 w-6 aspect-square md:hidden'
          aria-expanded={isExpanded}
          aria-controls='primary-navigation'
          onClick={() => setIsExpanded(prev => !prev)}
        >
          <span className='sr-only'>Menu</span>
          <img src={isExpanded ? iconClose : iconMenu} alt='' />
        </button>

        <img src={siteLogo} alt='sneakers' role='image' />

        <nav className={`fixed z-40 top-0 bottom-0 left-0 w-3/4 shadow-md transform duration-75 ease-linear ${isExpanded ? 'translate-x-0' : '-translate-x-full'} bg-white text-primary-500 md:static md:shadow-none md:translate-x-0`} aria-label='Main' id='primary-navigation'>
          <ul className="list-none flex flex-col h-full text-sm lg:text-base px-8 pt-24 font-bold md:font-normal md:flex-row md:items-center gap-4 md:gap-6 lg:gap-8 md:px-0 md:pt-0">
            <li><a href="#">Collections</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

        <div className='flex gap-4 md:gap-6 lg:gap-8 items-center ml-auto'>
          <button className='relative' onClick={() => setCartExpanded(prev => !prev)}>
            <span className="sr-only">Cart</span>
            <img src={iconCart} alt='' role='image' />
            {count && <span className='absolute -top-2 right-0 inline-block w-4 text-xs aspect-square bg-accent-400 rounded-full text-white'>{count}</span>}
          </button>
          <Cart />

          <img src={avatar} alt='' className='block w-10 aspect-square rounded-full object-cover' />
        </div>
      </div>
    </header>
  );
}

export default Navbar;