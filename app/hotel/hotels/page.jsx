'use client';
import React, { useState } from 'react';
import data from '@/components/data';
import Card from '@/components/card';
function FirstPage() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className="h-[110vh]  w-full pt-5  ">
      <div className="flex pl-16  ">
        <div className="cards grid grid-cols-4 pt-16 pr-10  gap-4">
          {data.map((item) => (
            <Card key={item.title} data={item} />
          ))}
        </div>

        <div
          dir="rtl"
          className=" flex flex-grow border-l pl-10 border-l-gray-300"
        >
          <div className=" mt-12 mr-10 text-gray-600 ">
            <div className=" mb-6 text-2xl font-medium ">
              <div>{/* <RiContactsBookUploadFill /> */}</div>
              <div>التصفية</div>
            </div>
            <div
              className="bg-gray-100 py-3 pr-3 pl-32 rounded-xl"
              onClick={() => setMenuVisible((visible) => !visible)}
            >
              <button className="pr-3 text-xl font-medium text-gray-600">
                المدينة
              </button>
            </div>
            {menuVisible && (
              <ul>
                <li>Menu Item 1</li>
                <li>Menu Item 2</li>
                <li>Menu Item 3</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
