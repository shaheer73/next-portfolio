import Image from 'next/image';
import React from 'react';
import taskmasterImg from '../public/static/assets/projects/taskmaster.png';
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
          src={taskmasterImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>TaskMaster</h2>
          <h3>PERN</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2>Overview</h2>
          <br></br>
          <p>
            This app was built using React JS and is hosted on Kinsta.
            The frontend was developed using ReactJS components, and it is connected to an ExpressJS backend server where I created
            an API with HTTP endpoints to integrate CRUD functionality to the PostgreSQL database. I initialized the database using
            the SQL language. The app allows users to create, edit, delete tasks and track its progress. I also used JWT tokens to implement
            authentication for users allowing them to register or login. Feel free to check it out!
          </p>
          <a
            href='https://github.com/shaheer73/pern-todo-app'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='http://pern-todo-app-client-nbl0z.kinsta.app/'
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
                <RiRadioButtonFill className='pr-1' /> PostgreSQL
              </p>
              <p className=' py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Express
              </p>
              <p className=' py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className=' py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Node
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> SQL
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Kinsta
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/LFuK7AwoGEY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"></iframe>

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