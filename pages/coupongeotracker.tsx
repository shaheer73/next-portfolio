import Image from 'next/image';
import React from 'react';
import couponImg from '../public/static/assets/projects/coupontracker.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const property = () => {
  return (
    <div className='w-full h-full bg-[#d9d9d9]'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={couponImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Coupon Geotracker</h2>
          <h3>MERN / Radar API</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto px-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <h2>Overview</h2>
          <br></br>
          <p>
          Coupon Geotracker is a geolocation-based coupon application that seamlessly integrates geographical data to offer users a dynamic coupon exploration experience. With a user-friendly interface, the app allows individuals to input latitude and longitude coordinates, enabling them to discover nearby coupons from various local businesses. The system employs the Radar API for precise geocoding, translating user-provided addresses into accurate geographical coordinates. Users can not only explore existing coupons but also create personalized ones by submitting a title and address. The app's backend, built with Node.js and Express, facilitates the storage and retrieval of coupon data using MongoDB as the database (deployed on Google Cloud Platform). On the frontend, the React-based UI built with Next and TypeScript ensures an interactive and visually appealing experience, presenting coupons in a card-based grid layout. Coupon Geotracker is a technically advanced solution for users and businesses seeking an efficient and engaging way to explore and share local discounts.
          </p>
          <a
            href='https://github.com/shaheer73/CouponGeotracker'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl bg-white shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className=' py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> NextJS
              </p>
              <p className=' py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className=' py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> TypeScript
              </p>
              <p className=' py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MongoDB
              </p>
              <p className=' py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Node
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Express
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Radar API
              </p>
              <p className=' py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Google Cloud Platform
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/0WlY1yR8LVw?si=3bn_h6Kn7CR2wwzU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"></iframe>

          <div className='pt-10 pb-10'>
            <Link href='/#projects'>
              <p className='underline cursor-pointer'>Back</p>
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default property;