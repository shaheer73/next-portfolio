import Image from 'next/image';
import React from 'react';
import transitImg from '../public/static/assets/projects/transitcodepic.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const property = () => {
  return (
    <div className='w-full h-screen bg-[#d9d9d9]'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={transitImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>GO Transit Management</h2>
          <h3>Java</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2>Overview</h2>
          <br></br>
          <p>
            A program that serves as a backend operations software for employees to check on transit information, 
            as well as for passengers to upload their credentials and check route schedules. 
            Implemented use of classes and objects, sorting, searching, file writing and reading all together using Java. 
            I made this program as my final project for my grade 12 computer science class.
          </p>
          <a
            href='https://github.com/shaheer73/Transit-Management-System'
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
                <RiRadioButtonFill className='pr-1' /> Java
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