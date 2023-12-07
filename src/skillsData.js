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



export const DataStackItemList = [
    {
        tool: "R",
        icon: <FaRProject size={20}/>
    },
    {
        tool: "Python",
        icon: <FaPython size={20}/>
    },
    {
        tool: "Excel",
        icon: <RiFileExcel2Fill size={20}/>
    },
    {
        tool: "SQL",
        icon: <BsFiletypeSql size={20}/>
    },
    {
        tool: "Power BI",
        icon: <SiPowerbi size={20}/>
    },
    {
        tool: "Shiny",
        icon: <LuLayoutDashboard size={20}/>
    },
    {
        tool: "Plotly Dash",
        icon: <LuLayoutDashboard size={20}/>
    }
]


export const WebStackItemList = [
    {
        tool: "HTML",
        icon: <SiHtml5 size={20}/>
    },
    {
        tool: "CSS",
        icon: <SiCss3 size={20}/>
    },
    {
        tool: "JavaScript",
        icon: <SiJavascript size={20}/>
    },
    {
        tool: "Quarto",
        icon: <LuLayoutDashboard size={20}/>
    },
    {
        tool: "Next.js",
        icon: <SiReact size={20}/>
    },
]