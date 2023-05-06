import Image from 'next/image';
import React from 'react';
import realestate from '../public/static/assets/projects/realestate.png';
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
          src={realestate}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Real Estate Price Predictor</h2>
          <h3>Python / Data Science / Flask</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2>Overview</h2>
          <br></br>
          <p>
            This application allows users to predict real estate prices of properties in the Greater Toronto Area. 
            It uses a dataset of over 1500 listed properties in the region. I used Jupyter Notebooks to conduct all the
            machine learning processes. I used Sci-kit learn to build a linear regression model that does the prediction,
            and used Numpy in unison with Pandas to perform data cleaning, feature engineering, and outlier detection. I also used Matplotlib
            for data visualization.
            I incorporated a Python Flask server to create an API with the ML model, and to communicate &apos;POST&apos; and &apos;GET&apos; requests
            to the frontend, which was made using basic HTML, JavaScript, and CSS. I then deployed the whole application using the help of Nginx
            to an AWS EC2 instance.
          </p>
          <a
            href='https://github.com/shaheer73/Real-Estate-Price-Prediction'
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
                <RiRadioButtonFill className='pr-1' /> Python
              </p>
              <p className=' py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Flask
              </p>
              <p className=' py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Numpy
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Pandas
              </p>
              <p className=' py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Scikit-learn
              </p>
              <p className=' py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Matplotlib
              </p>
              <p className=' py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Jupyter
              </p>
              <p className=' py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> HTML / JS / CSS
              </p>
              <p className=' py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> AWS
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/INZrLkTNgNo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"></iframe>

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