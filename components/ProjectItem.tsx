import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectItem = ({ title, image, projectUrl }: any) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 bg-white rounded-xl p-4 group hover:bg-gradient-to-r from-[#051923] to-[#709dff]'>
        <Image className='rounded-xl group-hover:opacity-10' src={image} alt="/"/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-xl pb-1 text-white tracking-wider text-center'>{title}</h3>
            <Link href={projectUrl}>
                <p className='text-center py-3 rounded-lg bg-white text-md cursor-pointer font-bold'>More info</p>
            </Link>
        </div>
    </div>  
  )
}

export default ProjectItem