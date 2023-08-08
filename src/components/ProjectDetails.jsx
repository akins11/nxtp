import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri';
import { BsGithub } from 'react-icons/bs';
import { GrLink } from 'react-icons/gr';


const ProjectDetails = ({ project }) => {

  const {id, title, description, image, fullImage, tools, projectLink, githubLink} = project;

  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase underline text-[#6C757D] pb-6'>{title}</p>
            <div className='grid md:grid-cols-2 gap-8'>
                <div className='col-span-1 shadow-sm shadow-gray-400 rounded-md p-1'>
                    <Image 
                        className='h-fit'
                        src={fullImage}
                        width="800"
                        height="600"
                    />
                </div>
                <div className='col-span-1 p-4'>
                    <div className='flew flex-col'>
                        <div className='mb-3'>
                            <p className='text-xl tracking-widest uppercase text-[#6C757D] pb-6'>Overview</p>
                            {
                                description.split('\n').map((desc, index) => (
                                    <p key={index} className='text-start'>{desc}</p>
                                ))
                            }
                        </div>
                        <div className='shadow-sm shadow-gray-400 rounded-md p-4'>
                            <div className="p-2">
                                <p className="text-start uppercase text-[#6C757D] pb-2">Technologies</p>
                                <div className='grid grid-cols-4'>
                                    {
                                        tools.map((item, index) => (
                                            <p key={index} className='text-gray-500 py-2 flex items-center gap-2'> <RiRadioButtonFill /> {item}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-8 mt-10'>
                            <Link href={projectLink}>
                                <div className='w-fit rounded-md shadow-sm shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <GrLink size={25}/>
                                </div>
                            </Link>
                            <Link href={githubLink}>
                                <div className='w-fit rounded-md shadow-sm shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <BsGithub size={25}/>
                                </div>
                            </Link>
                            <Link href='/#projects'>
                                <p className='text-[1.2rem] font-bold border-b-2 border-black hover:text-gray-400 hover:border-gray-400 cursor-pointer duration-300'>
                                    Back
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails;