import Image from 'next/image';
import React from 'react';
import portfolio from '../public/assets/projects/portfolioimg.png';
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
          src={portfolio}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Personal Wesbite</h2>
          <h3>NextJS / TypeScript</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2>Overview</h2>
          <br></br>
          <p>
            This website was built using Next JS to take advantage of it&apos;s SSR and file-based routing.
            It was entirely written using TypeScript to ensure industry standards and error trapping.
            I created this website to showcase things about me as well as the projects I have been working on lately.
            I integrated EmailJS to handle the contact form, so please feel free to reach out!
            I also used TailwindCSS to style this website, and make it fully responsive so that others can comfortably view it 
            on their mobile devices. I also made use of Framer Motion to add the animations you see throughout the main page!
          </p>
          <a
            href='https://github.com/fireclint/property-finder'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <Link href='/'>
          <button className='px-8 py-2 mt-4'>Visit</button>
          </Link>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl bg-white shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className=' py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> NextJS
              </p>
              <p className=' py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> ReactJS
              </p>
              <p className=' py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> TypeScript
              </p>
              <p className=' py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className=' py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Framer Motion
              </p>
              <p className=' py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> EmailJS
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