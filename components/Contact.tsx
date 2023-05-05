import { SectionWrapper } from '@/hoc';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/static/assets/contact.png';
import { slideIn, fadeIn } from "../utils/motion";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';

const Contact = () => {
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_ntt5bii', 'template_kwu58jc', e.target, 'n2eYJ4a4isvcu6kia')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  }

  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <motion.div variants={slideIn("left", "tween", 0, 0.7)}>
          <p className='text-xl tracking-widest uppercase'>
            Contact
          </p>
          <h2 className='py-4'>Get In Touch</h2>
        </motion.div>  
        <motion.div variants={fadeIn("right", "spring", 0.75, 2)}>
          <div className='grid lg:grid-cols-5 gap-8'>
            {/* left */}
            <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl bg-[lightgrey] shadow-gray-400 rounded-xl p-4'>
              <div className='lg:p-4 h-full'>
                <div className='items-center justify-center flex pb-2'>
                  <Image
                    className='rounded-xl hover:scale-105 ease-in duration-300'
                    src={ContactImg}
                    alt='/'
                    height={200}
                  />
                </div>
                <div>
                  <h2 className='py-2'>Shaheer Hasan</h2>
                  <p>Aspiring Software Engineer</p>
                  <p className='py-4'>
                    I am available for a 4-month co-op from September 2023 to December 2023. Or, if there&apos;s anything you want to chat about whether it be sports or music - feel free to reach out!
                  </p>
                </div>
                <div>
                  <p className='uppercase pt-8'>Connect With Me</p>
                  <div className='flex items-center justify-between py-4'>
                    <a
                      href='https://www.linkedin.com/in/shaheer-hasan/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <div className='rounded-full shadow-lg shadow-gray-400 bg-white p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <a
                      href='https://github.com/shaheer-73'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <div className='rounded-full shadow-lg shadow-gray-400 bg-white p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                      </div>
                    </a>

                    <div className='rounded-full shadow-lg shadow-gray-400 bg-white  p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <AiOutlineMail />
                    </div>

                    <a 
                      href='/Resume2023.pdf'
                      target='_blank'
                      rel='noreferrer'
                    >
                        <div className='rounded-full shadow-lg shadow-gray-400 bg-white  p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                          <BsFillPersonLinesFill />
                        </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* right */}
            <div className='col-span-3 w-full h-auto shadow-xl bg-[lightgrey] shadow-gray-400 rounded-xl lg:p-4'>
              <div className='p-4'>
                <form
                  onSubmit={sendEmail}
                >
                  <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                      <label className='uppercase text-sm py-2'>Name</label>
                      <input
                        className='border-2 rounded-lg p-3 flex border-gray-300'
                        type='text'
                        name='name'
                      />
                    </div>
                    <div className='flex flex-col'>
                      <label className='uppercase text-sm py-2'>
                        Phone Number
                      </label>
                      <input
                        className='border-2 rounded-lg p-3 flex border-gray-300'
                        type='text'
                        name='phone'
                      />
                    </div>
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='email'
                      name='email'
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Subject</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='subject'
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea
                      className='border-2 rounded-lg p-3 border-gray-300'
                      name='message'
                      rows={4}
                    ></textarea>
                  </div>
                  <button className='w-full p-4 text-gray-100 mt-4'>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
              <div className='rounded-full shadow-lg shadow-gray-400 bg-[#051923] p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[white]'
                  size={30}
                />
              </div>
          </Link>
        </div>
      </div>
    </div>
      
  );
};

export default SectionWrapper(Contact, "contact") ;