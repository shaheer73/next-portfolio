import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { useRouter } from 'next/router';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [project, setProject] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if(
            router.asPath === '/athleticavenue'||
            router.asPath === '/cryptfund' ||
            router.asPath === '/djoggers' ||
            router.asPath === '/taskmaster' ||
            router.asPath === '/realestate' ||
            router.asPath === '/portfolio' ||
            router.asPath === '/wordgame' ||
            router.asPath === '/playertracker' ||
            router.asPath === '/math' ||
            router.asPath === '/calculator' ||
            router.asPath === '/transit'
        ) {
            setProject(true);
        }
        else{
            setProject(false);
        }
    }, [router])

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(()=> {
        const handleShadow = () => {
            if (window.scrollY >= 90){
                setShadow(true);
            } else {
                setShadow(false);
            }
        }
        window.addEventListener('scroll', handleShadow);
    }, [])

  return (
    <div className={shadow ? 'px-4 pt-2 pb-2 fixed w-full h-20 shadow-xl z-[100] bg-[#051923]' : 'pt-2 pb-2 px-4 fixed w-full h-20 z-[100]'}>
        <div className="flex justify-between items-center w-full h-full px-[8px] 2xl:px-[64px]">
            <Link href='/'>
                {shadow||project ? <Image src="/../public/assets/sh-white.png" alt="logo" width='80' height='60'/> : <Image src="/../public/assets/sh-black.png" alt="logo" width='80' height='60'/>}
            </Link>
            <div>
                <ul className={shadow||project ? 'hidden md:flex text-white' : 'hidden md:flex'}>
                    <Link href='/#about'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                    </Link>
                    <Link href='/#skills'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                    </Link>
                    <Link href='/#projects'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                    </Link>
                    <Link href='/#work'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Experience</li>
                    </Link>
                    <Link href='/#contact'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size={25} color={shadow ? 'white' : ''}/>
                </div>
            </div>
        </div>

        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 
            'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Link href='/'>
                            <Image  src='/../public/assets/sh-logo.png' alt='/' width='120' height='35'/>
                        </Link>
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4 pb-2'>
                        <p className='w-[85%] md:w-[90%] py-4'>Welcome to my Portfolio!</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                    <Link href='/#about'>
                        <li onClick={() => setNav(false)}  className='py-4 text-sm'>About</li>
                    </Link>
                    <Link href='/#skills'>
                        <li onClick={() => setNav(false)}  className='py-4 text-sm'>Skills</li>
                    </Link>
                    <Link href='/#projects'>
                        <li onClick={() => setNav(false)}  className='py-4 text-sm'>Projects</li>
                    </Link>
                    <Link href='/#work'>
                        <li onClick={() => setNav(false)}  className='py-4 text-sm'>Experience</li>
                    </Link>
                    <Link href='/#contact'>
                        <li onClick={() => setNav(false)}  className='py-4 text-sm'>Contact</li>
                    </Link>
                    </ul>
                    <div className='pt-40'>
                        <p className='uppercase tracking-wide text-[#3c8fca]'>Let&apos;s connect!</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaGithub />
                            </div>
                            <Link href='/#contact'>
                                <div onClick={() => setNav(false)} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiOutlineMail />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar