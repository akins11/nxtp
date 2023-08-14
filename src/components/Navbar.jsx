"use client";

import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { GoMail } from 'react-icons/go';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';



const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
  
    const handelNav = () => {
      setNav(!nav);
    }
  
    useEffect(() => {
  
      const handleShadow = () => {
          if (window.scrollY >= 80) {
              setShadow(true)
          } else {
              setShadow(false)
          }
      };
  
      window.addEventListener('scroll', handleShadow);
    }, []);
  
    return (
      <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] backdrop-blur-md bg-white/30' : 'fixed w-full h-20 z-[100]'}>
          <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
              <Image className='rounded-md' src="/logo.png" alt='logo' width='70' height='70' />
  
              <div className='mr-4'>
                  <ul className='hidden md:flex'>
                      <Link href="/#home">
                          <li className='ml-10 text-sm uppercase border-b-2 text-[#212529] border-[#F8F9FA] hover:border-[#212529] duration-300'>Home</li>
                      </Link>
                      <Link href="/#about">
                          <li className='ml-10 text-sm uppercase border-b-2 text-[#212529] border-[#F8F9FA] hover:border-[#212529] duration-300'>About</li>
                      </Link>
                      <Link href="/#skills">
                          <li className='ml-10 text-sm uppercase border-b-2 text-[#212529] border-[#F8F9FA] hover:border-[#212529] duration-300'>Skills</li>
                      </Link>
                      <Link href="/#projects">
                          <li className='ml-10 text-sm uppercase border-b-2 text-[#212529] border-[#F8F9FA] hover:border-[#212529] duration-300'>Project</li>
                      </Link>
                      <Link href="/#contact">
                          <li className='ml-10 text-sm uppercase border-b-2 text-[#212529] border-[#F8F9FA] hover:border-[#212529] duration-300'>Contact</li>
                      </Link>
                  </ul>
                  <div onClick={handelNav} className="md:hidden">
                      <AiOutlineMenu className='cursor-pointer' size={23} />
                  </div>
              </div>
          </div>
          <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
              <div className={
                  nav 
                  ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#DEE2E6] p-10 ease-in duration-500' 
                  : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
              }>
                  <div>
                      <div className='flex w-full items-center justify-between'>
                          <Link href="/">
                              <Image className='rounded-md' src='/logo.png' alt='logo' width='30' height='30'/>
                          </Link>
                          <div onClick={handelNav} className='rounded-md shadow-sm shadow-gray-400 p-1 cursor-pointer'>
                              <AiOutlineClose size={21}/>
                          </div>
                      </div>
                      <div className='border-b border-gray-300 my-4'>
                      </div>
                  </div>
                  <div className='py-4 flex flex-col'>
                      <ul className='uppercase'>
                          <Link href="/">
                              <li onClick={() => setNav(false)} className='pt-4 pb-1 text-sm w-fit border-b-2 border-[#DEE2E6]  hover:border-[#212529] duration-300'>Home</li>
                          </Link>
                          <Link href="/#about">
                              <li onClick={() => setNav(false)} className='pt-4 pb-1 text-sm w-fit border-b-2 border-[#DEE2E6]  hover:border-[#212529] duration-300'>About</li>
                          </Link>
                          <Link href="/#skills">
                              <li onClick={() => setNav(false)} className='pt-4 pb-1 text-sm w-fit border-b-2 border-[#DEE2E6]  hover:border-[#212529] duration-300'>Skills</li>
                          </Link>
                          <Link href="/#projects">
                              <li onClick={() => setNav(false)} className='pt-4 pb-1 text-sm w-fit border-b-2 border-[#DEE2E6]  hover:border-[#212529] duration-300'>Project</li>
                          </Link>
                          <Link href="/#contact">
                              <li onClick={() => setNav(false)} className='pt-4 pb-1 text-sm w-fit border-b-2 border-[#DEE2E6]  hover:border-[#212529] duration-300'>Contact</li>
                          </Link>
                      </ul>
                      <div className='pt-16'>
                          <p className='tracking-widest text-[#343A40] mb-3 text-md'>Let's Connect</p>
                          <div className='flex items-center justify-between w-full sm:w-[80%]'>
                              <a href="https://www.linkedin.com/in/akinwande-ayomide-7bb37a199">
                                <div className='rounded-md shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>
                              </a>
                              <a href="https://github.com/akins11/">
                                <div className='rounded-md shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaGithub />
                                </div>
                              </a>
                              <a href="mailto:akinwandeayomide24@gmail.com">
                                <div className='rounded-md shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <GoMail />
                                </div>
                              </a>
                              <a href="mailto:akinwandeayomide24@gmail.com">
                                <div className='rounded-md shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <BsFillPersonLinesFill />
                                </div>
                              </a>
                          </div>
  
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
  
  export default Navbar