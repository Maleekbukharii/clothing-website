'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';
import Link from 'next/link';
import { cardData } from '@/data/cardData';

interface CartItem {
  id: number;
  title: string;
  imageSrc: string;
  quantity: number;
  price: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // Example data, replace with actual cart data
    { id: 1, title: 'Product 1', imageSrc: '/isagi.jpeg', quantity: 2, price: 30 },
    { id: 2, title: 'Product 2', imageSrc: '/makimom.jpg', quantity: 1, price: 50 },
  ]);

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                <Image src={item.imageSrc} alt={item.title} className="w-20 h-20" width={80} height={80} />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p>${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded-l-full hover:bg-gray-300"
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                      className="w-12 h-8 text-center border"
                      min="1"
                    />
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded-r-full hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Total Amount */}
        {cartItems.length > 0 && (
          <div className="mt-6">
            <div className="text-lg font-bold">
              Total Amount:
            </div>
            <div className="text-lg font-semibold text-white">
              ${calculateTotalAmount().toFixed(2)}

            </div>
            <Link href='/checkout'>
            <button
              onClick={() => console.log('Proceeding to checkout')}
              className="mt-4 px-6 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-700"
            >
              Checkout
            </button>
            </Link>
          </div>
        )}
      </div>

      {/* Carousel Section */}
      <h2 className="text-2xl font-bold mb-4">Items you might also like</h2>
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
    </div>
  );
};

export default Cart;
