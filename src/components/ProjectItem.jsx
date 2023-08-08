import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectItem = ({title, backgroundImg, projectID, Dtool}) => {

  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-sm shadow-gray-400 rounded-md p-4 group hover:backdrop-blur-sm bg-white/30'> 
        <Image 
            className='rounded-md group-hover:opacity-5'
            src={backgroundImg}
            alt='hotel project'
            width='600'
            height='550'
        />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%]'>
            <h3 className='text-2xl text-black tracking-wider text-center'>{title}</h3>
            <p className='pb-4 pt-2 text-black text-center'>{Dtool}</p>
            <div className='flex items-center justify-center'>
                <Link href={`/details/${projectID}`} >
                    <p className='text-center py-3 px-10 rounded-lg bg-black text-white font-bold text-lg cursor-pointer'>
                        More Info
                    </p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ProjectItem;