import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import profile from '../public/static/assets/profile.jpg';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { TypeAnimation } from "react-type-animation";

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='pt-5 uppercase text-md font-semibold tracking-widest'>Welcome to my Portfolio!</p>
                <div className='items-center flex justify-center p-5'>
                <Image src={profile} alt='profile' width={350} height={350} className='rounded-full'/>
                </div>
                <h1>Hey! I&apos;m <span className='text-white'>Shaheer,</span></h1>
                <h1 className="py-2 text-md"> {""}
                    <TypeAnimation
                        sequence={[
                        "A Software Engineer",
                        1000,
                        "A Creator",
                        1000,
                        "An Innovator",
                        1000,
                        "A Student",
                        1000,
                        ]}
                        repeat={Infinity}
                    />
                </h1>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                    <a href="https://www.linkedin.com/in/shaheer-hasan/" target='_blank' rel='noreferrer'>
                        <div className='rounded-full bg-white shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                    </a>
                    <a href="https://github.com/shaheer73" target='_blank' rel='noreferrer'>
                        <div className='rounded-full bg-white shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaGithub />
                        </div>
                    </a>
                    <Link href='/#contact'>
                        <div className='rounded-full bg-white shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                    </Link>
                    <a href="/Resume2023.pdf" target='_blank' rel='noreferrer'>
                        <div className='rounded-full bg-white shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main