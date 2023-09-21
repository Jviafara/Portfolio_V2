import React from 'react';
import Css from '../assets/css.png';
import GitHub from '../assets/github.png';
import Html from '../assets/html.png';
import JavaScript from '../assets/javascript.png';
import MongoDB from '../assets/mongodb.png';
import MySQL from '../assets/mysql.png';
import Node from '../assets/node.png';
import ReactLogo from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import VsCode from '../assets/vscode.png';
import UnderLine from './UnderLine';

const Skills = () => {
    const backEnd = [
        {
            id: 1,
            src: Node,
            title: 'Node js',
            style: 'shadow-green-500',
        },
        {
            id: 2,
            src: MongoDB,
            title: 'MongoDb',
            style: 'shadow-green-800',
        },
        {
            id: 3,
            src: MySQL,
            title: 'MySQL',
            style: 'shadow-blue-800',
        },
    ];
    const tools = [
        {
            id: 1,
            src: GitHub,
            title: 'Git and GitHub',
            style: 'shadow-gray-500',
        },
        {
            id: 2,
            src: VsCode,
            title: 'VsCode',
            style: 'shadow-blue-800',
        },
    ];
    const frontEnd = [
        {
            id: 1,
            src: Html,
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            src: Css,
            title: 'CSS',
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            src: JavaScript,
            title: 'JavaScript',
            style: 'shadow-yellow-500',
        },
        {
            id: 4,
            src: ReactLogo,
            title: 'React',
            style: 'shadow-cyan-600',
        },
        {
            id: 5,
            src: Tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400',
        },
    ];

    return (
        <div id="Skills" className="w-full h-full py-10 mt-10 relative">
            <div className="max-w-screen-lg mx-auto pt-16 flex flex-col justify-center w-full h-full text-black">
                <div>
                    <UnderLine>
                        <p className="text-3xl font-bold border-b-4 border-gray-500 pt-2 inline sm:text-4xl">
                            Skils and Experience
                        </p>
                    </UnderLine>
                    <p className="py-6 text-lg font-semibold">
                        This are the Technologies and Tools I{"'"}ve worked with
                    </p>
                </div>
                <div>
                    <UnderLine>
                        <p className="text-3xl font-bold pt-2 inline sm:text-4xl">
                            BackEnd
                        </p>
                    </UnderLine>
                    <div className="w-full flex gap-8 text-center py-8 px-12 sm:px-0">
                        {backEnd.map(({ id, title, src, style }) => (
                            <div
                                key={id}
                                className={
                                    'shadow-lg hover:scale-110 duration-500 p-8 rounded-lg w-auto bg-white bg-opacity-70' +
                                    ' ' +
                                    style
                                }>
                                <img
                                    src={src}
                                    alt={title}
                                    className="w-20 mx-auto"
                                />
                                {/* <p className="mt-4">{title}</p> */}
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <UnderLine>
                        <p className="text-3xl font-bold pt-2 inline sm:text-4xl">
                            FrontEnd
                        </p>
                    </UnderLine>
                    <div className="w-full flex gap-8 text-center py-8 px-12 sm:px-0">
                        {frontEnd.map(({ id, title, src, style }) => (
                            <div
                                key={id}
                                className={
                                    'shadow-lg hover:scale-110 duration-500 p-8 rounded-lg w-auto bg-white bg-opacity-70' +
                                    ' ' +
                                    style
                                }>
                                <img
                                    src={src}
                                    alt={title}
                                    className="w-20 mx-auto"
                                />
                                {/* <p className="mt-4">{title}</p> */}
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <UnderLine>
                        <p className="text-3xl font-bold pt-2 inline sm:text-4xl">
                            Tools
                        </p>
                    </UnderLine>
                </div>
                <div className="w-full flex  gap-8 text-center py-8 px-12 sm:px-0">
                    {tools.map(({ id, title, src, style }) => (
                        <div
                            key={id}
                            className={
                                'shadow-lg hover:scale-110 duration-500 p-8 rounded-lg w-auto bg-white bg-opacity-70' +
                                ' ' +
                                style
                            }>
                            <img
                                src={src}
                                alt={title}
                                className="w-20 mx-auto"
                            />
                            {/* <p className="mt-4">{title}</p> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
