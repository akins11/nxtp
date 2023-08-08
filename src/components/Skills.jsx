import React from 'react';
import {
    FaPython, 
    FaRProject
} from 'react-icons/fa';

import { RiFileExcel2Fill } from 'react-icons/ri';
import { BsFiletypeSql } from 'react-icons/bs';
import { LuLayoutDashboard } from 'react-icons/lu';
import { 
    SiPowerbi, 
    SiHtml5, 
    SiCss3,
    SiJavascript,
    SiReact
} from 'react-icons/si';



const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-3'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#6C757D] pb-6'>Skill</p>

            <div className='grid md:grid-cols-3 gap-8'>
                <div className='col-span-1 md:col-span-2 shadow-sm shadow-gray-400 rounded-md p-4'>
                    <h2 className='py-2'>Data Stack</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3'>
                        <div className='p-4 rounded-md hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <FaRProject size={20} />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>R</h3>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 rounded-md hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <FaPython size={20} />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>Python</h3>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 rounded-md hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <RiFileExcel2Fill size={20} />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>Excel</h3>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 rounded-md hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <BsFiletypeSql size={20} />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>SQL</h3>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 rounded-md hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <SiPowerbi size={20} />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>Power BI</h3>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 rounded-md hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <LuLayoutDashboard size={20} />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>Shiny</h3>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 rounded-md hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <LuLayoutDashboard size={20} />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>Dash</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 shadow-sm shadow-gray-400 rounded-md p-4'>
                    <h2 className='py-2'>Web Stack</h2>
                    <div className='grid grid-cols-2'>
                        <div className='p-4 rounded-md hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <SiHtml5 size={20} />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>HTML</h3>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 rounded-md hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <SiCss3 size={20} />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>CSS</h3>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 rounded-md hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <SiJavascript size={20} />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>JS</h3>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 rounded-md hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <SiReact size={20} />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>React</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills;