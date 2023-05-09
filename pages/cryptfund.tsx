import Image from 'next/image';
import React from 'react';
import cryptfundImg from '../public/static/assets/projects/cryptfund.png';
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
          src={cryptfundImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>CryptFund</h2>
          <h3>Web3 / Solidity / React</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2>Overview</h2>
          <br></br>
          <p>
            This dApp serves as a crowdfunding platform which users can contribute to
            campaigns of their choice using Ethereum by connecting their MetaMask wallets (with the help
            of Web3 framework Thirdweb). Users can also create their own compaigns to request pledges, and track
            contributions. Used React-Vite to create the user interface, and wrote smart contracts which handle the blockchain
            transactions using Solidity.
            
          </p>
          <a
            href='https://github.com/shaheer73/cryptfund'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://cryptfund.netlify.com'
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
                <RiRadioButtonFill className='pr-1' /> React (Vite)
              </p>
              <p className=' py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Solidity
              </p>
              <p className=' py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className=' py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Web3
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MetaMask
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/RjlBeQLajo4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"></iframe>

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