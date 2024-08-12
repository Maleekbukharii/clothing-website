'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <div className="navbar bg-base-100 shadow-lg text-gray-300">
      <div className="navbar-start">
        <div className="dropdown" ref={dropdownRef}>
          <button
            className="btn btn-ghost lg:hidden"
            onClick={() => toggleDropdown('main')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          {activeDropdown === 'main' && (
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-60 p-3 shadow">
              <li className="py-1 px-2 text-gray-300"><Link href="#">Exclusive</Link></li>
              <li className="py-1 px-2 text-gray-300">
                <details>
                  <summary>Unisex</summary>
                  <ul className="p-3 bg-base-100 text-gray-300 z-50">
                    <li className="py-1 px-2"><Link href="/Tops">Tops</Link></li>
                    <li className="py-1 px-2"><Link href="/Bottoms">Bottoms</Link></li>
                  </ul>
                </details>
              </li>
              <li className="py-1 px-2 text-gray-300">
                <details>
                  <summary>Men</summary>
                  <ul className="p-3 bg-base-100 text-gray-300 z-50">
                    <li className="py-1 px-2"><Link href="/Men/Winter">Winter Collection</Link></li>
                    <li className="py-1 px-2"><Link href="/Men/Summer">Summer Collection</Link></li>
                  </ul>
                </details>
              </li>
              <li className="py-1 px-2 text-gray-300">
                <details>
                  <summary>Women</summary>
                  <ul className="p-3 bg-base-100 text-gray-300 z-50">
                    <li className="py-1 px-2"><Link href="/Women/Winter">Winter Collection</Link></li>
                    <li className="py-1 px-2"><Link href="/Women/Summer">Summer Collection</Link></li>
                  </ul>
                </details>
              </li>
            </ul>
          )}
        </div>
        <Link className="btn btn-ghost text-xl text-gray-300" href="#">ABC</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-8">
          <li className="py-1 px-3 text-gray-300"><Link href="/Exclusive">Exclusive</Link></li>
          <li className="py-1 px-3 text-gray-300">
            <details>
              <summary>Unisex</summary>
              <ul className="p-3 bg-base-100 text-gray-300 z-50">
                <li className="py-1 px-3"><Link href="/Utop">Tops</Link></li>
                <li className="py-1 px-3"><Link href="/Ubottom">Bottoms</Link></li>
              </ul>
            </details>
          </li>
          <li className="py-1 px-3 text-gray-300">
            <details>
              <summary>Men</summary>
              <ul className="p-3 bg-base-100 text-gray-300 z-50">
                <li className="py-1 px-3"><Link href="/Men/Winter">Winter Collection</Link></li>
                <li className="py-1 px-3"><Link href="/Men/Summer">Summer Collection</Link></li>
              </ul>
            </details>
          </li>
          <li className="py-1 px-3 text-gray-300">
            <details>
              <summary>Women</summary>
              <ul className="p-3 bg-base-100 text-gray-300 z-50">
                <li className="py-1 px-3"><Link href="/Women/Winter">Winter Collection</Link></li>
                <li className="py-1 px-3"><Link href="/Women/Summer">Summer Collection</Link></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/cart">
          <Image src="/cart.svg" alt="Cart" height={20} width={20} className="h-5 w-5 mx-5" />
        </Link>
        <Link className="btn bg-base-100 border-gray-400 text-gray-300" href="#">Account</Link>
      </div>
    </div>
  );
};

export default Navbar;
