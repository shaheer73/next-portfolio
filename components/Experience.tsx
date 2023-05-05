import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from '../constants';
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import Image from "next/image";

const ExperienceCard = ({ experience }: any) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "white",
        color: "#051923"
      }}
      contentArrowStyle={{ borderRight: "7px solid white" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className='w-[68%] h-[68%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point: any, index: any) => (
          <li
            key={`experience-point-${index}`}
            className='text-[#051923] text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className='pt-20 uppercase text-xl tracking-widest text-center'>Work Experience</p>
        <h2 className='py-4 text-center'>What I have done so far</h2>
      </motion.div>

      <div id='work' className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience: any, index: any) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");