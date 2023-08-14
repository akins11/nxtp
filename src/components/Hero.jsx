import React from 'react'
import { GoMail } from 'react-icons/go';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Link from 'next/link';

const Hero = () => {
  return (
    <div id='home' className='w-full h-screen text-start'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 ps-5 md:ps-2 flex justify-start items-center'>
            <div>
                <p className="uppercase mt-20 md:mt-0 text-sm tracking-widest  text-[#C4C4C4]">Data is the key to innovation</p>
                <h1 className='py-2 text-[1.6rem] text-gray-800'>Hello, I'm <span className='text-[#6C757D]'>Ayomide</span></h1>
                <h1 className='py-2 text-gray-800'>A Business Intelligence Analyst</h1>
                <p className='py-4 text-gray-600 max-w-[70%]'>
                    I excel at crafting and conducting thorough analyses, precisely tailored to address specific business challenges.
                    I am driven to create impactful insight that empower businesses to make progressive decisions and drive success.
                    By using standard tools, I strive to achieve the desired outcome, delivering valuable solutions.
                </p>
                <div className='flex items-center justify-between max-w-[320px] m-auto py-4'>
                    <div className='rounded-md shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <Link href="https://www.linkedin.com/in/akinwande-ayomide-7bb37a199"><FaLinkedinIn /></Link>
                    </div>
                    <div className='rounded-md shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <Link href="https://github.com/akins11/"><FaGithub /></Link>
                    </div>
                    <div className='rounded-md shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <Link href="mailto:akinwandeayomide24@gmail.com"><GoMail /></Link>
                    </div>
                    <div className='rounded-md shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <Link href="mailto:akinwandeayomide24@gmail.com"><BsFillPersonLinesFill /></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;