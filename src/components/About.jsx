import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#6C757D] pb-5'>About</p>
                <p className='py-2 text-gray-600'>
                    I am a <span className='text-gray-800'>business intelligence analyst</span>, and i have a committed to generating 
                    important insight and conveying them through interactive applications. I belive that data visualization is a powerful 
                    tool for storytelling, and i enjoy usning my skills to help others understand complex concepts and making informed decisions. 
                    Whether it is through interactive reports, dashboards, maps or other outputs, my goal is always to create 
                    engaging experiences that reveal valuable insights and inspire meaningful actions.
                </p>
                <p className='py-2 text-gray-600'> 
                    I'm a fast learner, constantly seeking out new technologies and techniques to enhance my skillset, stay 
                    up-to-date with industry trends and provide lasting solutions to novel challenges.
                </p>
                <Link href="/#projects" className='py-4 text-gray-600 underline cursor-pointer'>
                    Get a glimpse of my projects
                </Link>
            </div>
            <div className='col-span-1 flex items-center justify-center'>
                <div className='w-fit  h-auto m-auto shadow-xl shadow-gray-400 rounded-xl  hover:scale-103 ease-in duration-500'>
                    <Image className='rounded-xl' src='/pie-ph.jpg' alt='analytic-image' width='300' height='350'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;