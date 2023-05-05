import React from 'react';
import ProjectItem from './ProjectItem';
import wordgame from '../public/assets/projects/WordGamePic.png';
import playertracker from '../public/assets/projects/basketballtrackerpic.png';
import mathpic from '../public/assets/projects/demopic.jpg';
import calculator from '../public/assets/projects/reactcalculatorpic.png';
import transit from '../public/assets/projects/transit.jpeg';
import athletic from '../public/assets/projects/athleticavenue.png';
import cryptfund from '../public/assets/projects/cryptfund.png';
import taskmaster from '../public/assets/projects/taskmaster.png';
import portfolio from '../public/assets/projects/portfolioimg.png';
import djoggers from '../public/assets/projects/djoggers.png';
import realestate from '../public/assets/projects/realestate.png';
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
            <div className='grid grid-cols-2 md:grid-cols-3 gap-8 items-center'>
                <ProjectItem title='Athletic Avenue' image={athletic} projectUrl='/athleticavenue'/>
                <ProjectItem title='Djoggers' image={djoggers} projectUrl='/djoggers'/>
                <ProjectItem title='CryptFund' image={cryptfund} projectUrl='/cryptfund'/>
                <ProjectItem title='TaskMaster' image={taskmaster} projectUrl='/taskmaster'/>
                <ProjectItem title='Real Estate Price Predictor' image={realestate} projectUrl='/realestate'/>
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