import React from 'react';
import {
  analyticalApps,
  dashboard,
  ml,
  eda
} from "@/projectData";

import ProjectDetails from '@/components/ProjectDetails';

const DetailPage = ({ params }) => {

  const allProjectDetails = [...analyticalApps, ...dashboard, ...ml, ...eda];

  const selectedProject = allProjectDetails.find((p) => p.id === params.id);

  return (
    <div>
        <div>
            <ProjectDetails project={selectedProject}/>
        </div>
    </div>
  )
}

export default DetailPage;