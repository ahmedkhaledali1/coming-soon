import React from 'react';
import logo from '@/public/logo.png';
import redman from '@/public/redman.png';
import Image from 'next/image';
import { AiOutlineCompass } from 'react-icons/ai';
import { CiHeart, CiSearch } from 'react-icons/ci';
import { MdOutlinePentagon } from 'react-icons/md';
import { GiGps } from 'react-icons/gi';
import { BsFilterRight } from 'react-icons/bs';
function Header() {
  return (
    <div className="w-full pr-20 pl-10 pt-6 border-b border-b-gray-200">
      <div className="flex w-full h-24 justify-between items-center ">
        <div className="flex w-[45%] justify-between">
          <div>
            <Image alt="Logo" src={logo} />
          </div>
          <div className="flex">
            <div className="mr-2 h-[67.2px] w-[64px] text-gray-700 flex justify-center items-center text-center rounded-xl bg-gray-100">
              <CiHeart size={40} />
            </div>
            <div className="mr-2 h-[67.2px] w-[64px] text-gray-700 flex justify-center items-center text-center rounded-xl bg-gray-100">
              <CiSearch size={40} />
            </div>
            <div className="mr-2 h-[67.2px] w-[64px] text-gray-700 flex justify-center items-center text-center rounded-xl bg-gray-100">
              <GiGps size={40} />
            </div>
            <div className="mr-2 h-[67.2px] w-[64px] text-gray-700 flex justify-center items-center text-center rounded-xl bg-gray-100">
              <AiOutlineCompass size={40} />
            </div>
            <div className="mr-2 h-[67.2px] w-[64px] text-white flex justify-center items-center text-center rounded-xl bg-red-800">
              <MdOutlinePentagon size={40} />
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-4xl flex font-serif">
            <h1 className="text-gray-800">صهيب </h1>

            <h1 className=" text-red-800">
              {''},{''}مساء الخير{' '}
            </h1>
          </div>
          <div className="mr-4 ml-10 h-[67.2px] w-[64px] text-gray-700 flex justify-center items-center text-center rounded-xl bg-gray-100">
            <div>
              <Image alt="redman" src={redman} />
            </div>
          </div>
          <div className="mr-2 h-[67.2px] w-[64px] text-gray-700 flex justify-center items-center text-center rounded-xl bg-gray-100">
            <BsFilterRight size={40} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
