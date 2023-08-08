"use client"

import React, {useState} from 'react';
import Tab from './Tab';
import ProjectContainer from './ProjectContainer';
import {
    analyticalApps,
    dashboard,
    ml,
    eda
} from "@/projectData";






const Project = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div id="projects" className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#6C757D] pb-6'>Project</p>
            <div className='flex flex-wrap'>
                <div className='w-full'>
                    <ul 
                        className='grid md:grid-cols-4 gap-8 sm:gap-3 place-content-center mb-2 list-none pt-3 pb-4'
                        role='tablist'
                    >
                        <Tab 
                            value={1}
                            title="Analytical App"
                            isOpenTab={openTab === 1}
                            onTabOpen={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }
                            }
                        />
                        <Tab 
                            value={2}
                            title="Dashboard"
                            isOpenTab={openTab === 2}
                            onTabOpen={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }
                            }
                        />
                        <Tab 
                            value={3}
                            title="Machine Learning"
                            isOpenTab={openTab === 3}
                            onTabOpen={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }
                            }
                        />
                        <Tab 
                            value={4}
                            title="Exploratory Analysis"
                            isOpenTab={openTab === 4}
                            onTabOpen={e => {
                                    e.preventDefault();
                                    setOpenTab(4);
                                }
                            }
                        />
                    </ul>
                    <div className='relative flex flex-col min-w-0 break-words w-full mb-6 rounded'>
                        <div>
                            <div className='tab-content tab-space'> 
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <ProjectContainer projectItems={analyticalApps} />
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <ProjectContainer projectItems={dashboard} />
                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                    <ProjectContainer projectItems={ml} />
                                </div>
                                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                                    <ProjectContainer projectItems={eda} />
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

export default Project;