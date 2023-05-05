import React from 'react';
import { slideIn, fadeIn } from "../utils/motion";
import { motion } from "framer-motion";
import { SectionWrapper } from '@/hoc';

import {FaUserClock, FaUsers, FaCode, FaCogs} from 'react-icons/fa';

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <motion.div variants={slideIn("right", "tween", 0, 0.7)}>
                <p className='text-xl tracking-widest uppercase text-right'>Skills</p>
                <h2 className='py-4 text-right'>What I Bring</h2>
            </motion.div>    
            <div className='grid md:grid-cols-2 gap-8 pt-6'>
                <motion.div variants={fadeIn("right", "spring", 0.25, 1)}>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white hover:text-[#94cdf6] hover:bg-[#051923]'>
                        <div className='gap-4 justify-center items-center'>
                            <div className='flex items-center text-center justify-center'>
                                <FaUserClock size={100} />
                            </div>
                            <div className='text-center flex items-center justify-center pb-2'>
                                <h3>Time Management</h3>
                            </div>
                            <div className='flex items-center justify-center text-center text-md'>
                                <p> I have excellent time management skills. Creating daily schedules, outlining tasks needed
                                to be completed for the day, has helped me stay very organized and punctual. As a result, I am able to 
                                work proficiently and finish tasks with greater effort and ability.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={fadeIn("right", "spring", 0.5, 1)}>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white hover:text-[#94cdf6] hover:bg-[#051923]'>
                        <div className=' gap-4 justify-center items-center'>
                            <div className='flex items-center text-center justify-center'>
                                <FaUsers size={100} />
                            </div>
                            <div className='text-center flex items-center justify-center pb-2'>
                                <h3>Interpersonal</h3>
                            </div>
                            <div className='flex items-center justify-center text-center text-md'>
                                <p>  I consider myself to be an outgoing person, and love to meet new people.
                                I am able to communicate and interact effectively with my peers in a respectful
                                manner. I have been in leadership roles, where my interpersonal skills have
                                helped me send a message across resulting in the team performing more effectively.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={fadeIn("right", "spring", 0.75, 1)}>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white hover:text-[#94cdf6] hover:bg-[#051923]'>
                        <div className=' gap-4 justify-center items-center'>
                            <div className='flex items-center text-center justify-center'>
                                <FaCode size={100} />
                            </div>
                            <div className='text-center flex items-center justify-center pb-2'>
                                <h3>Programming</h3>
                            </div>
                            <div className='flex items-center justify-center text-center text-md'>
                                <p> I first started coding in High School using Java and then learned C++ in my first semester
                                of University. Since then I have gone on to learn a vast amount of languages and continue to seek more ways to improve my Programming
                                skills. I am versatile and have experience with Python, C#, JavaScript/TypeScript, SQL, HTML and CSS. </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={fadeIn("right", "spring", 0.75, 1)}>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white hover:text-[#94cdf6] hover:bg-[#051923]'>
                        <div className=' gap-4 justify-center items-center'>
                            <div className='flex items-center text-center justify-center'>
                                <FaCogs size={100} />
                            </div>
                            <div className='text-center flex items-center justify-center pb-2'>
                                <h3>Hardworking</h3>
                            </div>
                            <div className='flex items-center justify-center text-center text-md'>
                                <p> I am a very hardworking person, and put in extra effort to strive for 
                                whatever goal I set my mind to. Whenever phased with a challenge, I don&apos;t back down, and 
                                will devise a plan to hurdle whatever obstacles I may face.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default SectionWrapper(Skills, "skills")