import React from 'react';
import { logo1 } from './logo';
import Students from './Students';
export function Sidenav() {
    return (
      <div className="w-full md:w-64 h-screen bg-[#FFD3B4] text-[#72412B] flex flex-col sticky top-0">
        <div className="flex justify-center items-center bg-[#FFD3B4] text-[#72412B] px-3 py-4">
          <div className="font-bold text-2xl text-center">Dashboard</div>
          <div className="flex md:hidden"></div>
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src={logo1}
            alt=""
          />
        </div>
        <nav className="flex-grow m-7 max-w-full mx-0">
          <a
            href="/students"
            className="block py-7 px-7 hover:bg-[#4e2c1d]  hover:text-white"
          >
            Student{' '}
          </a>
          <a
            href="/results"
            className="block py-7 px-7 hover:bg-[#4e2c1d]  hover:text-white"
          >
            Student Results{' '}
          </a>
          <a
            href="/modules"
            className="block py-7 px-7 hover:bg-[#4e2c1d]  hover:text-white"
          >
            Modules
          </a>
          <a
            href="/topics"
            className="block py-7 px-7 hover:bg-[#4e2c1d]  hover:text-white"
          >
            Topics
          </a>
          <a
            href="/questions"
            className="block py-7 px-7 hover:bg-[#4e2c1d]  hover:text-white"
          >
            Questions
          </a>
        </nav>
        
      </div>
    );
  }