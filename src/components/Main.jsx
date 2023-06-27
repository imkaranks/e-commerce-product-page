import React, { useState } from 'react';
import Slider from './Slider';
import { iconMinus, iconPlus } from '../assets/images';

function Main({ setCart }) {
  const [count, setCount] = useState(0);

  const updateCart = (name, price, count) => {
    count && setCart({ name, price, count });
  }

  return (
    <main className='md:py-16'>
      <section className='w-full max-w-6xl mx-auto grid gap-4 md:p-8 md:grid-cols-2 md:gap-14 lg:gap-20'>
        <Slider />
        <article className='flex flex-col gap-6 p-4'>
          <div className='flex flex-col-reverse gap-4'>
            <h1 className='text-primary-600 text-4xl font-bold'>Fall Limited Edition Sneakers</h1>
            <p className='text-accent-400 font-bold uppercase tracking-wider'>Sneaker Company</p>
          </div>
          <p className='text-primary-500'>
            These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they’ll withstand everything the weather can offer.
          </p>
          <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-4'>
              <ins className='font-bold text-2xl no-underline'>$125.00</ins>
              <span className='bg-accent-300 text-accent-400 font-bold px-2'>50%</span>
            </div>
            <del className='text-primary-400 font-bold block'>$250</del>
          </div>

          <div className='flex items-center justify-start gap-4'>
            <div className="flex flex-shrink-0 gap-4 text-lg font-bold bg-primary-300 p-3">
              <button
                className='p-1'
                onClick={() => setCount(count => {
                  if (count > 0) {
                    return count - 1;
                  }
                  return count;
                })}
              >
                <img src={iconMinus} alt='Remove by one' />
              </button>
              <span className='px-4'>{count}</span>
              <button className='p-1' onClick={() => setCount(count => count + 1)}>
                <img src={iconPlus} alt='Add by one' />
              </button>
            </div>
            <button
              className='w-full max-w-[18rem] p-4 inline-flex justify-center items-center bg-accent-400 text-white font-bold transition-all ease hover:bg-accent-400/75 hover:-translate-y-1 rounded-md shadow-lg hover:shadow-black/30'
              onClick={() => updateCart("Fall Limited Edition Sneaker", 125, count)}
            >
              <span>Add to Cart</span>
            </button>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Main;