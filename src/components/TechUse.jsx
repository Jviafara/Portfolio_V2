import React from 'react';
import { DiMongodb } from 'react-icons/di';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiMui, SiTailwindcss } from 'react-icons/si';

const TechUse = (props) => {
    if (props.tech === 'react') return <FaReact size={32} />;
    if (props.tech === 'tailwind') return <SiTailwindcss size={32} />;
    if (props.tech === 'nodejs') return <FaNodeJs size={32} />;
    if (props.tech === 'mongodb') return <DiMongodb size={32} />;
    if (props.tech === 'express') return <SiExpress size={32} />;
    if (props.tech === 'material ui') return <SiMui size={32} />;
};

export default TechUse;
