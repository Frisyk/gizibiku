import React from 'react'
import Link from 'next/link';
const Navigation = () => {

    return (
      <nav className="p-4 fixed w-full bg-red-800 text-white top-0 left-0 flex md:justify-around justify-between z-20">
        <Link href={"/"}>
        <h1 className="text-2xl uppercase font-semibold">Gizibiku</h1>
        </Link>
        <Link href={"/about"}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
        </svg>
        </Link>
      </nav>
    );
  };
  
  export default Navigation;
  
