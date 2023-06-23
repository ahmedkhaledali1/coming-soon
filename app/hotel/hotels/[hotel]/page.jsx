'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import photo from '@/public/cover.png';
import photo1 from '@/public/cardphoto.png';
import map1 from '@/public/map1.png';
import { Rating } from 'react-simple-star-rating';
import commetnphoto from '@/public/comment-Photo.png';
function HotelScreen() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [photo, photo, photo];

  console.log(photos);
  return (
    <div className="w-full flex flex-col " dir="rtl">
      <div className=" w-full flex justify-center mb-2 ">
        <Image
          src={selectedPhoto || photos[0]}
          width={photo}
          alt="cover photo"
        />
      </div>
      <div className="slider w-full flex mr-28">
        {photos.map((photo) => (
          <Image
            className="mx-1"
            width={150}
            height={300}
            key={photo}
            src={photo}
            alt="small photo"
            onClick={() => setSelectedPhoto(photo)}
          />
        ))}
      </div>
      <div className="desc flex flex-col border-b-2  border-b-gray-200 mx-16 mt-16 pb-12">
        <h1 className="text-3xl font-tajwal mb-8 font-semibold text-red-700">
          مخيم غروب الشمس
        </h1>
        <p className="text-xl  font-medium">
          وصف قصير عن مخيم شمس الغروب في وادي رم الاردن ،وصف قصير عن مخيم شمس
          الغروب في وادي رم الاردن ،وصف قصير عن مخيم شمس الغروب في وادي رم
          الاردن ،وصف قصير عن مخيم شمس الغروب في وادي رم الاردن، وصف قصير عن
          مخيم شمس الغروب في وادي رم الاردن ،وصف قصير عن مخيم شمس الغروب في وادي
          رم الاردن، وصف قصير عن مخيم شمس الغروب في وادي رم الاردن ،وصف قصير عن
          مخيم شمس الغروب في وادي رم الاردن.
        </p>
      </div>
      <div className="flex w-[90%] pb-8 border-b-2  border-b-gray-200 mx-auto">
        <div className="desc w-[50%] flex flex-col pl-16 mt-16 pb-12">
          <h1 className="text-3xl font-tajwal mb-8 font-semibold text-red-700">
            الفروع و العناوين
          </h1>
          <div className="text-xl w-full flex font-medium">
            <div className="w-[50%]">
              <h3 className="text-xl font-semibold mb-3">فرع عمان</h3>
              <p>
                <p className="mb-3">الاردن -عمان</p>
                توصيف مختصر للعنوان
              </p>
            </div>
            <div>
              <Image src={map1} alt="map" />
            </div>
          </div>
        </div>
        <div className="desc w-[50%] flex flex-col border-r-2  border-r-gray-200 px-16 mt-16 pb-12">
          <h1 className="text-3xl font-tajwal mb-8 font-semibold text-red-700">
            اوقات وساعات العمل{' '}
          </h1>
          <div className="w-[70%] flex flex-col ">
            <div className="flex justify-between mb-4">
              <p className="text-2xl font-medium"> الاحد - الخميس</p>
              <p className="text-xl text-gray-500"> 11:00 - 10:00 ص</p>
            </div>
            <div className="flex justify-between">
              <p className="text-2xl font-medium"> السبت - الحمعة</p>
              <p className="text-xl text-gray-500 "> 12:00 - 9:00 ص</p>
            </div>
          </div>
        </div>
      </div>
      <div className="desc flex flex-col border-b-2  border-b-gray-200 mx-16 mt-16 pb-12">
        <h1 className="text-3xl font-tajwal mb-8 font-semibold text-red-700">
          التقييمات
        </h1>
        <div className="flex mb-12">
          <div className="font-semibold text-3xl ml-3 ">4.8</div>
          <div>
            <Rating
              iconsCount={5}
              size={25}
              emptyStyle={{ display: 'flex' }}
              fillStyle={{ display: '-webkit-inline-box' }}
              className="my-custom-class  flex  justify-end"
              initialValue={4}
            />
            <div className="text-gray-400">18.234</div>
          </div>
        </div>
        <div>
          <div className="mb-10">
            <div>
              <div className="flex mb-8">
                <div className="ml-5">
                  <Image src={commetnphoto} alt="commment photo" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold"> محمد احمد</h1>
                  <div className="text-gray-400">2 ايلون 2022</div>
                </div>
              </div>
              <div className="text-2xl pr-16">
                وصف قصير عن مخيم شمس الغروب في وادي رم الاردن، وصف قصير عن مخيم
                شمس الغروب في وادي رم الاردن،وصف قصير عن مخيم شمس الغروب في وادي
                رم الاردن، وصف قصير عن مخيم شمس الغروب في وادي رم الاردن، وصف
                قصير عن مخيم شمس الغروب في وادي رم الاردن،وصف قصير عن مخيم شمس
                الغروب في وادي رم الاردن.
              </div>
            </div>
          </div>
          <div className="mb-10">
            <div>
              <div className="flex mb-8">
                <div className="ml-5">
                  <Image src={commetnphoto} alt="commment photo" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold"> محمد احمد</h1>
                  <div className="text-gray-400">2 ايلون 2022</div>
                </div>
              </div>
              <div className="text-2xl pr-16">
                وصف قصير عن مخيم شمس الغروب في وادي رم الاردن، وصف قصير عن مخيم
                شمس الغروب في وادي رم الاردن،وصف قصير عن مخيم شمس الغروب في وادي
                رم الاردن، وصف قصير عن مخيم شمس الغروب في وادي رم الاردن، وصف
                قصير عن مخيم شمس الغروب في وادي رم الاردن،وصف قصير عن مخيم شمس
                الغروب في وادي رم الاردن.
              </div>
            </div>
          </div>
          <div className="mb-10">
            <div>
              <div className="flex mb-8">
                <div className="ml-5">
                  <Image src={commetnphoto} alt="commment photo" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold"> محمد احمد</h1>
                  <div className="text-gray-400">2 ايلون 2022</div>
                </div>
              </div>
              <div className="text-2xl pr-16">
                وصف قصير عن مخيم شمس الغروب في وادي رم الاردن، وصف قصير عن مخيم
                شمس الغروب في وادي رم الاردن،وصف قصير عن مخيم شمس الغروب في وادي
                رم الاردن، وصف قصير عن مخيم شمس الغروب في وادي رم الاردن، وصف
                قصير عن مخيم شمس الغروب في وادي رم الاردن،وصف قصير عن مخيم شمس
                الغروب في وادي رم الاردن.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelScreen;
