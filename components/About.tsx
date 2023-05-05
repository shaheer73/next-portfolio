import React from 'react';
import Image from 'next/image';
import AboutImg from '../public/static/assets/aboutpic.jpg';
import Link from 'next/link';
import { SectionWrapper } from '@/hoc';
import { slideIn, fadeIn, zoomIn } from "../utils/motion";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
              <motion.div variants={slideIn("left", "tween", 0, 0.7)}>
                <p className='uppercase text-xl tracking-widest'>About</p>
                <h2 className='py-4'>Who I Am</h2>
              </motion.div>  
              <motion.div variants={zoomIn( 0.5, 1)}>
                  <p className='py-2 text-md'>
                    Hey there, my name is Shaheer! I’m a 19 year old Computer Engineering Student attending the University of Waterloo.  I was born in Toronto, Canada 🇨🇦 and have lived here my whole life but hold Pakistani 🇵🇰 heritage through my parents, and am incredibly proud to partake in both cultures.
                    <br></br>
                    <br></br>
                    I’ve already completed two internships where I have gained valuable skills about software development. Some areas that spark my interest is full stack and backend development 👨🏽‍💻, artificial intelligence 🦾, machine learning ⚙️, as well as quantitative finance🏦. I would love to continue my growth in these fields through work experience or making my own projects in order to create unique and effective solutions to whatever problem may come in the way. I aspire to become a Software Engineer after graduation and always looking for opportunities to invigorate my entire skillset along the way!
                    <br></br>
                    <br></br>
                    Some things about me is that I love to play sports. My two favourite sports are Soccer ⚽️ and Basketball 🏀. I’m a huge Manchester United fan as well as a supporter of my local Toronto Raptors. I love to play basketball with my friends, as it’s a great way to destress and socialize. I also participated in my university’s basketball intramural league. I used to play competitive soccer for my hometown club where I was deployed as a winger but was used to playing multiple positions when needed. This experience helped me gain a valuable lesson about being a team player and doing what the team needs to succeed even if it’s not of my preference 👏. Sports are an integral part of my life as it taught me a lot of lessons, and has helped me increase my mental focus and critical thinking skills 💭, as you’re continuously forced to make decisions on your feet on how to tackle whatever challenge the game may bring to you.
                    <br></br>
                    <br></br>
                    One of my favourite hobbies is playing video games 🎮! Some of my favourite video games are FIFA, Call of Duty, and NBA 2K. I was able to work with Unity, which was really cool as I was able to see how game engines work and the development that goes into making video games. I love to go travelling ✈️ as well and have been to 🇺🇸🇪🇸🏴󠁧󠁢󠁥󠁮󠁧󠁿🇵🇰🇸🇦🇦🇪 and wish to see the rest of the world 🌎 one day. I love to learn about different cultures and immerse myself in their diversity. I am also a huge fan of music 🎧, some of my favourite genres are R&B, hip hop, and rap. Some of my favourite artists are Travis Scott, Dave, and The Weeknd. I would love to learn how to compose music myself and have previously played the tenor sax 🎷and am currently learning the piano 🎹.
                  </p>
                  <Link href='/#projects'><p className='py-2 underline cursor-pointer text-gray-700'>Check out some of my latest projects!</p></Link>
                </motion.div>
            </div>
            <motion.div variants={fadeIn("right", "spring", 0.75, 2)}>
              <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 bg-white'>
                  <Image src={AboutImg} className='rounded-xl' alt='about pic'/>
              </div>
            </motion.div>
            
        </div>
    </div>
  )
}

export default SectionWrapper(About, "about")