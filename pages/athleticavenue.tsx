import Image from 'next/image';
import React from 'react';
import athleticImg from '../public/assets/projects/athleticavenue.png';
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
          src={athleticImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Athletic Avenue</h2>
          <h3>NextJS / TypeScript</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto px-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <h2>Overview</h2>
          <br></br>
          <p>
            Created a fully responseive sports blog app for friends and family to discuss about the latest sporting stories happening around the world.
            This app was built using NextJS to take advantage of techniques such as server-side rendering, static
            generation, and file-based routing. The application was entirely written in TypeScript. All the posts, comments, and user information is
            stored in a Sanity.io CMS, and GCP is used to maintain a database of 40+ users. I integrated OAuth to handle user authentication, where users
            can sign in using their personal Google accounts. Zustand was used as an alternative to Redux, for the App&apos;s state management. I used TailwindCSS to
            style it and make it fully-responsive. The application is hosted on Vercel. Please check it out and leave some comments or even make some posts of 
            your own!
          </p>
          <a
            href='https://github.com/shaheer73/Sports-Blog-App'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://athleticavenue.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Visit</button>
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
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className=' py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Zustand
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Sanity.io
              </p>
              <p className=' py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Google Cloud Platform
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default property;