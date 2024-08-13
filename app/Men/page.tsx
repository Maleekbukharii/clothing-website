'use client'
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import { cardData } from '@/data/cardData';
import { cardData2 } from '@/data/CardDatawinter';

const Men = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? cardData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex >= cardData.length - 3;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <Navbar />
      <h1 className="font-bold text-xl text-center my-6">Summer Collection</h1>
      <div className="relative w-full h-[32rem] flex items-center justify-center">
        <button onClick={goToPrevious} className="absolute left-4 bg-black text-white p-2 rounded-full z-10">❮</button>
        <div className="w-full h-full overflow-hidden relative">
          <div
            className="w-full h-full flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {cardData.map((item) => (
              <div
                key={item.id}
                className="w-1/3 flex-shrink-0 p-4"
              >
                <div className="card bg-base-100 w-full h-full shadow-xl border">
                  <figure className="px-10 pt-10 relative h-72">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{item.title}</h2>
                    <p>{item.description}</p>
                    <div className="card-actions">
                      <Link href={`/Men/Summer/${item.slug}`}>
                        <button className="btn btn-primary">View</button>
                      </Link>
                    </div>
                    <div className="mt-4">
                      <p className="text-lg font-bold text-black">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={goToNext} className="absolute right-4 bg-black text-white p-2 rounded-full z-10">❯</button>
      </div>

      <div className='flex justify-center items-center h-full mb-8'>
        <Link href='/Men/Summer'>
            <button className="btn btn-primary">VIEW ALL SUMMER COLLECTION</button>
        </Link>
      </div>


      <h1 className="font-bold text-xl text-center my-6">Winter Collection</h1>
      <div className="relative w-full h-[32rem] flex items-center justify-center">
        <button onClick={goToPrevious} className="absolute left-4 bg-black text-white p-2 rounded-full z-10">❮</button>
        <div className="w-full h-full overflow-hidden relative">
          <div
            className="w-full h-full flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {cardData2.map((item) => (
              <div
                key={item.id}
                className="w-1/3 flex-shrink-0 p-4"
              >
                <div className="card bg-base-100 w-full h-full shadow-xl border">
                  <figure className="px-10 pt-10 relative h-72">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{item.title}</h2>
                    <p>{item.description}</p>
                    <div className="card-actions">
                      <Link href={`/Men/Summer/${item.slug}`}>
                        <button className="btn btn-primary">View</button>
                      </Link>
                    </div>
                    <div className="mt-4">
                      <p className="text-lg font-bold text-black">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={goToNext} className="absolute right-4 bg-black text-white p-2 rounded-full z-10">❯</button>
      </div>
      
      <div className='flex justify-center items-center h-full mb-4'>
        <Link href='/Men/Winter'>
            <button className="btn btn-primary">VIEW ALL WINTER COLLECTION</button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Men;
