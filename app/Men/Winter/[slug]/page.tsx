'use client'
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';
import { useState } from 'react';
import { CardData2 } from '@/data/CardDatawinter';
interface PageProps {
  params: {
    slug: string;
  };
}

const Page = ({ params }: PageProps) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);
  const [isCareGuideOpen, setIsCareGuideOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const item = CardData2.find(data => data.slug === params.slug);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    // Implement add to cart functionality
    console.log(`${item?.title} added to cart with quantity: ${quantity}`);
  };

  const handleBuyNow = () => {
    // Implement buy now functionality
    console.log(`Buying now: ${item?.title} with quantity: ${quantity}`);
  };

  if (item) {
    return (
      <>
        <Navbar />
        <div className="p-6 flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h1 className="text-2xl font-bold">{item.title}</h1>
            <img src={item.imageSrc} alt={item.title} className="w-full h-auto my-4 border" />
          </div>
          <div className="md:w-1/2 md:pl-6">
            {/* Product Description */}
            <div className="mt-10 mx-5">
              <button
                onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                className="flex items-center justify-between text-xl font-semibold text-left w-full"
              >
                Product Description
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className={`fill-current transition-transform transform ${isDescriptionOpen ? 'rotate-180' : 'rotate-90'}`}
                >
                  <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/>
                </svg>
              </button>
              {isDescriptionOpen && (
                <p className="mt-2">{item.productDetails}</p>
              )}
            </div>

            {/* Size Chart */}
            <div className="mt-10 mx-5">
              <button
                onClick={() => setIsSizeChartOpen(!isSizeChartOpen)}
                className="flex items-center justify-between text-xl font-semibold text-left w-full"
              >
                Size Chart
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className={`fill-current transition-transform transform ${isSizeChartOpen ? 'rotate-180' : 'rotate-90'}`}
                >
                  <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/>
                </svg>
              </button>
              {isSizeChartOpen && (
                <ul className="mt-2">
                  {item.sizeChart.map((size, index) => (
                    <li key={index} className="list-disc list-inside">{size}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Care Guide */}
            <div className="mt-10 mx-5">
              <button
                onClick={() => setIsCareGuideOpen(!isCareGuideOpen)}
                className="flex items-center justify-between text-xl font-semibold text-left w-full"
              >
                Care Guide
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className={`fill-current transition-transform transform ${isCareGuideOpen ? 'rotate-180' : 'rotate-90'}`}
                >
                  <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/>
                </svg>
              </button>
              {isCareGuideOpen && (
                <p className="mt-2">{item.careGuide}</p>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="mt-10 mx-5">
  <label htmlFor="quantity" className="block text-lg font-semibold">
    Quantity
  </label>
  <div className="flex items-center mt-2">
    <button
      onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
      className="px-3 py-2 bg-gray-200 text-gray-700 rounded-l hover:bg-gray-300"
    >
      -
    </button>
    <input
      type="number"
      id="quantity"
      value={quantity}
      onChange={handleQuantityChange}
      className="w-20 py-2 text-center border"
      min="1"
    />
    <button
      onClick={() => setQuantity(quantity + 1)}
      className="px-3 py-2 bg-gray-200 text-gray-700 rounded-r hover:bg-gray-300"
    >
      +
    </button>
  </div>
</div>

            {/* Add to Cart & Buy Now Buttons */}
            <div className="mt-10 mx-5 flex space-x-4">
              <button
                onClick={handleAddToCart}
                className="bg-gray-600 text-white py-2 px-4 rounded-full hover:bg-blue-700"
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="bg-gray-600 text-white py-2 px-4 rounded-full hover:bg-green-700"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <div className="p-6">
          <h1 className="text-2xl font-bold">Page not found</h1>
          <p>The item you are looking for does not exist.</p>
          <Link href="/men/summer">
            <a className="btn btn-secondary mt-4">Back to Summer Collection</a>
          </Link>
        </div>
        <Footer />
      </>
    );
  }
};

export default Page;
