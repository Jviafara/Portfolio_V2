import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import movienest from '../assets/portfolio/MovieNest.png';
import RubickStore from '../assets/portfolio/RubikStore.png';
import TechUse from './TechUse';
import UnderLine from './UnderLine';

const ProjectsGrid = () => {
    const [projectInfo, setProjectInfo] = useState(false);
    const [project, setProject] = useState(null);

    const projects = [
        {
            id: 1,
            src: movienest,
            name: 'MovieNest',
            description:
                'Galeria web FullStack de peliculas y series de todo el mundo usado react y materialUI, nodejs e implementando el uso de un dataset como API llamado TMDB (The Movie DataBase)',
            liveDemo: 'https://movienestapp.netlify.app/',
            codeLink: 'https://github.com/Jviafara/MovieNest_V2',
            techs: ['nodejs', 'mongodb', 'express', 'react', 'tailwind'],
        },
        {
            id: 2,
            src: RubickStore,
            name: "Rubik's Store",
            description:
                'Aplicacion web FullStack E-commerce usando nodejs, mongoDB y react/redux, implementando la API de manejo de pagos Stripe',
            liveDemo: 'https://rubikstore.netlify.app/',
            codeLink: 'https://github.com/Jviafara/RubicksStore',
            techs: ['nodejs', 'mongodb', 'express', 'react', 'tailwind'],
        },
    ];

    return (
        <div name="Projects" className="w-full pt-20 md:h-full">
            <div className="max-w-screen-lg py-8 mx-auto flex flex-col gap-4 justify-center w-full h-full">
                <div className="pb-4">
                    <UnderLine>
                        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                            Projects
                        </p>
                    </UnderLine>
                    <p className="py-6 text-lg font-semibold">
                        Check out some of my work! <strong></strong>
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {projects.map(({ id, src, name }) => (
                        <div
                            key={id}
                            style={{
                                backgroundImage: `url(${src})`,
                            }}
                            onClick={() => {
                                setProjectInfo(true);
                                setProject(projects.filter((e) => e.id === id));
                            }}
                            className="w-full h-48 flex flex-col group relative bg-cover bg-center shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 hover:opacity-90">
                            <div className="text-center font-bold text-lg text-white bg-gray-700 bg-opacity-50 rounded-t-lg">
                                <h1>{name}</h1>
                            </div>
                            <div className="justify-center hidden group-hover:flex absolute top-1/2 w-full">
                                <p className="bg-opacity-90 rounded-xl font-bold text-lg text-white bg-gray-700 px-3 py-1 hover:cursor-pointer">
                                    Click for more info
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {projectInfo && (
                <div className="py-10 bg-gradient-to-br from-transparent via-white to-gray-500 flex justify-center">
                    <div className="flex flex-col lg:flex-row max-w-screen-lg">
                        <div
                            style={{
                                backgroundImage: `url(${project[0].src})`,
                            }}
                            className="w-full h-full pt-[33.33%] lg:w-2/3 rounded-lg bg-top-center bg-no-repeat bg-cover"></div>
                        <div className="w-full lg:w-1/3 flex flex-col pl-4">
                            <div className="rounded-t-lg flex  items-center justify-between font-bold text-lg">
                                <h1>{project[0].name}</h1>
                                <button
                                    type="button"
                                    onClick={() => setProjectInfo(false)}>
                                    <AiOutlineCloseCircle
                                        size={24}
                                        color="red"
                                    />
                                </button>
                            </div>
                            <div className="my-2">
                                <p>{project[0].description}</p>
                            </div>
                            <div className="flex items-center justify-center">
                                <button className="w-1/2 px-4 py-3 m-4 shadow-md shadow-gray-600 rounded-lg duration-300 hover:scale-110">
                                    <a
                                        href={project[0].liveDemo}
                                        target="_blank"
                                        rel="noreferrer">
                                        Live Demo
                                    </a>
                                </button>
                                <button className="w-1/2 px-6 py-3 m-4 shadow-md shadow-gray-600 rounded-lg duration-300 hover:scale-110">
                                    <a
                                        href={project[0].codeLink}
                                        target="_blank"
                                        rel="noreferrer">
                                        Code
                                    </a>
                                </button>
                            </div>
                            <div className="flex items-center justify-evenly gap-2 p-4">
                                {project[0].techs.map((tech) => (
                                    <div
                                        key={tech}
                                        className="group flex items-center">
                                        <div className="group-hover:hidden">
                                            <TechUse tech={tech} />
                                        </div>
                                        <p className="hidden group-hover:flex">
                                            {tech.toUpperCase()}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectsGrid;
