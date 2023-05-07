import React from 'react';
import { logo1 } from './logo';
import Students from './Students';
export function Sidenav() {
    return (
      <div className="w-full md:w-64 bg-[#FFD3B4] text-[#72412B] flex flex-col">
        <div className="flex justify-between items-center bg-[#FFD3B4] text-[#72412B] px-3 py-4">
          <div className="font-bold text-2xl">Dashboard</div>
          <div className="flex md:hidden"></div>
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src={logo1}
            alt=""
          />
        </div>
        <nav className="flex-grow">
          <a
            href="/students"
            className="block py-10 px-4 hover:bg-[#4e2c1d]  hover:text-white"
          >
            Student{' '}
          </a>
          <a
            href="/results"
            className="block py-10 px-4 hover:bg-[#4e2c1d]  hover:text-white"
          >
            Student Results{' '}
          </a>
          <a
            href="/modules"
            className="block py-10 px-4 hover:bg-[#4e2c1d]  hover:text-white"
          >
            Modules
          </a>
          <a
            href="/question"
            className="block py-10 px-4 hover:bg-[#4e2c1d]  hover:text-white"
          >
            Question
          </a>
          <a
            href="/choices"
            className="block py-10 px-4  hover:bg-[#4e2c1d]  hover:text-white"
          >
            Choices
          </a>
        </nav>
        
      </div>
    );
  }