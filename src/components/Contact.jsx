import React from 'react';
import Link from 'next/link';

import { SiGmail } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import { RxDoubleArrowUp } from 'react-icons/rx';
import { 
    BsWhatsapp, 
    BsGithub,
    BsTwitter
 } from 'react-icons/bs';

const Contact = () => {
  return (
    <div id="contact" className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#6C757D] pb-6'>Contact</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className='col-span-1'>
                    <p className='tracking-widest uppercase text-[#6C757D] pb-3'>Go To</p>
                    <ul className='flex flex-col gap-5'>
                        <Link href="/#skills">
                            <li className='border-b-2 w-fit text-[#212529] border-[#F8F9FA] hover:border-[#212529] duration-300'>Skill</li>
                        </Link>
                        <Link href="/#projects">
                            <li className='border-b-2 w-fit text-[#212529] border-[#F8F9FA] hover:border-[#212529] duration-300'>Portfolio</li>
                        </Link>
                        <Link href="https://akins11.github.io/SCM/">
                            <li className='border-b-2 w-fit text-[#212529] border-[#F8F9FA] hover:border-[#212529] duration-300'>Blog</li>
                        </Link>
                    </ul>
                </div>
                <div className='col-span-1'>
                    <p className='tracking-widest uppercase text-[#6C757D] pb-3'>Get in touch</p>
                    <ul className='flex flex-col gap-3'>
                        <Link href='mailto:akinwandeayomide24@gmail.com'>
                            <li className='w-fit rounded-md shadow-sm shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <SiGmail />
                            </li>
                        </Link>
                        <Link href='https://wa.me/+2347084792065/'>
                            <li className='w-fit rounded-md shadow-sm shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <BsWhatsapp />
                            </li>
                        </Link>
                        <Link href='https://github.com/akins11/'>
                            <li className='w-fit rounded-md shadow-sm shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <BsGithub />
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className='col-span-1'>
                    <p className='tracking-widest uppercase text-[#6C757D] pb-3'>Follow me</p>
                    <ul className='flex flex-col gap-3'>
                        <Link href='https://www.linkedin.com/in/akinwande-ayomide-7bb37a199'>
                            <li className='w-fit rounded-md shadow-sm shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaLinkedinIn />
                            </li>
                        </Link>
                        <Link href='https://twitter.com/Akinwande_ay24?s=09'>
                            <li className='w-fit rounded-md shadow-sm shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <BsTwitter />
                            </li>
                        </Link>
                        <Link href='https://github.com/akins11/'>
                            <li className='w-fit rounded-md shadow-sm shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <BsGithub />
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
            <div className='flex justify-end mt-12 mb-0'>
                <Link href='/'>
                    <div className='bg-[#343A40] rounded-full shadow-sm shadow-gray-300 p-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <RxDoubleArrowUp className='text-[#F8F9FA]' size={24}/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact;