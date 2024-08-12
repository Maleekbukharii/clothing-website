// app/summermen/page.tsx
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';
import { cardData } from '@/data/cardData';

const Summermen = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {cardData.map((item) => (
          <div key={item.id} className="relative w-96 h-80 shadow-xl overflow-hidden group">
            <figure className="h-full">
              <img
                src={item.imageSrc}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between">
              <div className="text-center text-white p-4">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <div className="card-actions absolute bottom-0 left-0 m-4">
                <Link href={`/Men/Summer/${item.slug}`}>
                  <button className="btn btn-primary">View</button>
                </Link>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 bg-white p-2 m-4 text-center">
              <p className="text-lg font-bold text-black">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Summermen;
