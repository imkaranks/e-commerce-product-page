import React,{ useState } from 'react';
import { iconNext, iconPrev, product1, product1Thumbnail, product2, product2Thumbnail, product3, product3Thumbnail, product4, product4Thumbnail, } from '../assets/images';

function Slider() {
  const [current, setCurrent] = useState(0);

  function prevSlide() {
    if (current > 0) {
      setCurrent(prev => prev - 1);
    } else {
      setCurrent(3)
    }
  }

  function nextSlide() {
    if (current < 3) {
      setCurrent(prev => prev + 1);
    } else {
      setCurrent(0)
    }
  }

  return (
    <div>
      <div className='relative'>
        <img
          src={product1}
          alt=''
          className={`w-full max-h-[20rem] object-cover md:aspect-square md:max-h-none md:max-w-[30rem] md:rounded-3xl ${current === 0 ? 'block' : 'hidden'}`}
        />
        <img
          src={product2}
          alt=''
          className={`w-full max-h-[20rem] object-cover md:aspect-square md:max-h-none md:max-w-[30rem] md:rounded-3xl ${current === 1 ? 'block' : 'hidden'}`}
        />
        <img
          src={product3}
          alt=''
          className={`w-full max-h-[20rem] object-cover md:aspect-square md:max-h-none md:max-w-[30rem] md:rounded-3xl ${current === 2 ? 'block' : 'hidden'}`}
        />
        <img
          src={product4}
          alt=''
          className={`w-full max-h-[20rem] object-cover md:aspect-square md:max-h-none md:max-w-[30rem] md:rounded-3xl ${current === 3 ? 'block' : 'hidden'}`}
        />

        <ul className="list-none absolute w-full px-4 flex justify-between top-1/2 md:hidden">
          <li>
            <button className='flex justify-center items-center w-10 aspect-square bg-white rounded-full' onClick={prevSlide}>
              <img src={iconPrev} alt='previous' />
            </button>
          </li>
          <li>
            <button className='flex justify-center items-center w-10 aspect-square bg-white rounded-full' onClick={nextSlide}>
              <img src={iconNext} alt='next' />
            </button>
          </li>
        </ul>
      </div>

      <ul className='hidden mt-8 md:grid md:grid-cols-4 md:gap-4 md:max-w-[30rem]' role='tablist'>
        <li>
          <button className={`rounded-xl ${current === 0 && 'outline outline-4 outline-accent-400'}`} role='tab' aria-controls='product-1' onClick={() => setCurrent(0)}>
            <img
              src={product1Thumbnail}
              alt=''
              className={`w-full aspect-square object-cover rounded-xl ${current === 0 && 'opacity-75'}`}
            />
          </button>
        </li>
        <li>
          <button className={`rounded-xl ${current === 1 && 'outline outline-4 outline-accent-400'}`} role='tab' aria-controls='product-2' onClick={() => setCurrent(1)}>
            <img
              src={product2Thumbnail}
              alt=''
              className={`w-full aspect-square object-cover rounded-xl ${current === 1 && 'opacity-75'}`}
            />
          </button>
        </li>
        <li>
          <button className={`rounded-xl ${current === 2 && 'outline outline-4 outline-accent-400'}`} role='tab' aria-controls='product-3' onClick={() => setCurrent(2)}>
            <img
              src={product3Thumbnail}
              alt=''
              className={`w-full aspect-square object-cover rounded-xl ${current === 2 && 'opacity-75'}`}
            />
          </button>
        </li>
        <li>
          <button className={`rounded-xl ${current === 3 && 'outline outline-4 outline-accent-400'}`} role='tab' aria-controls='product-4' onClick={() => setCurrent(3)}>
            <img
              src={product4Thumbnail}
              alt=''
              className={`w-full aspect-square object-cover rounded-xl ${current === 3 && 'opacity-75'}`}
            />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Slider;