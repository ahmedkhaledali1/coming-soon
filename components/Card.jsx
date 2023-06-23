'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { Rating } from 'react-simple-star-rating';
import photo from '@/public/cardphoto.png';
function Card({ data }) {
  const [ratingValue, setRatingValue] = useState(data.rating);

  const handleRating = (rate) => {
    setRatingValue(rate);
  };
  //   console.log(data.photo);
  return (
    <div className="w-[270px] rounded-xl overflow-hidden ">
      <Image src={photo} alt="card photo" />
      <div className="bg-gray-100 h-32 p-4">
        <div className="flex justify-between">
          <div className=" bg-red-800 rounded-xl text-white w-16 text-center py-1">
            {data.price}
          </div>
          <h3 className="text-red-700 font-tajwal text-xl ">{data.title}</h3>
        </div>
        <div className="flex justify-end">
          <h3 className="mr-1 font-tajwal font-medium">{data.location}</h3>
          <HiLocationMarker className="text-gray-400" />
        </div>
        <div>
          <div className="flex justify-between mt-2 ">
            <p className="text-gray-500">$$$</p>
            <div
              style={{
                direction: 'ltr',
                fontFamily: 'sans-serif',
                touchAction: 'none',
              }}
            >
              <Rating
                iconsCount={5}
                size={25}
                emptyStyle={{ display: 'flex' }}
                fillStyle={{ display: '-webkit-inline-box' }}
                className="my-custom-class  flex justify-start "
                initialValue={ratingValue}
                onClick={handleRating}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
