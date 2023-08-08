import React from 'react'
import ProjectItem from './ProjectItem';

const ProjectContainer = ({ projectItems }) => {

  return (
    <div className='w-full'>
        <div className='grid md:grid-cols-2 gap-8'>
            {
                projectItems.map((item) => (
                    <ProjectItem
                        key={item.id}
                        title={item.title}
                        backgroundImg={item.image}
                        projectID={item.id}
                        Dtool={item.tools[0]}
                    />
                ))
            }
        </div>
    </div>
  )

}

export default ProjectContainer;