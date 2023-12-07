import React from 'react';

import {
    DataStackItemList,
    WebStackItemList
} from "@/skillsData";


import SkillsContainer from './skillsContainer';


const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-3'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#6C757D] pb-6'>Skill</p>
            <div className='grid md:grid-cols-3 gap-8'>
                <SkillsContainer stackName="Data Stack" skillsItem={DataStackItemList} />
                <SkillsContainer stackName="Web Stack" skillsItem={WebStackItemList} />
            </div>
        </div>
    </div>
  )
}

export default Skills;