import React from 'react';
import ProjectItem from './ProjectItem';
import wordgame from '../public/static/assets/projects/WordGamePic.png';
import playertracker from '../public/static/assets/projects/basketballtrackerpic.png';
import mathpic from '../public/static/assets/projects/demopic.jpg';
import calculator from '../public/static/assets/projects/reactcalculatorpic.png';
import transit from '../public/static/assets/projects/transit.jpeg';
import athletic from '../public/static/assets/projects/athleticavenue.png';
import cryptfund from '../public/static/assets/projects/cryptfund.png';
import taskmaster from '../public/static/assets/projects/taskmaster.png';
import portfolio from '../public/static/assets/projects/portfolioimg.png';
import djoggers from '../public/static/assets/projects/djoggers.png';
import realestate from '../public/static/assets/projects/realestate.png';
import coupon from '../public/static/assets/projects/coupontracker.png';
import { SectionWrapper } from '@/hoc';
import { slideIn, zoomIn } from "../utils/motion";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
          <motion.div variants={slideIn("left", "tween", 0, 0.7)}>
            <p className='text-xl uppercase tracking-widest'>Projects</p>
            <h2 className='py-4'>What I&apos;ve Built</h2>
          </motion.div>
          <motion.div variants={zoomIn( 0, 1)}>
            <div className='grid md:grid-cols-3 gap-8 items-center'>
                <ProjectItem title='Athletic Avenue' image={athletic} projectUrl='/athleticavenue'/>
                <ProjectItem title='Djoggers' image={djoggers} projectUrl='/djoggers'/>
                <ProjectItem title='Real Estate Price Predictor' image={realestate} projectUrl='/realestate'/>
                <ProjectItem title='CryptFund' image={cryptfund} projectUrl='/cryptfund'/>
                <ProjectItem title='Coupon Geotracker' image={coupon} projectUrl='/coupongeotracker'/>
                <ProjectItem title='TaskMaster' image={taskmaster} projectUrl='/taskmaster'/>
                <ProjectItem title='Personal Website' image={portfolio} projectUrl='/portfolio'/>
                <ProjectItem title="Word's World" image={wordgame} projectUrl='/wordgame'/>
                <ProjectItem title='NBA Player Tracker' image={playertracker} projectUrl='/playertracker'/>
                <ProjectItem title='Missing Mathematician' image={mathpic} projectUrl='/math'/>
                <ProjectItem title='Calculator' image={calculator} projectUrl='/calculator/'/>
                <ProjectItem title='Transit Management' image={transit} projectUrl='/transit'/>
            </div>
          </motion.div>
        </div>
    </div>
  )
}

export default SectionWrapper(Projects,"projects")