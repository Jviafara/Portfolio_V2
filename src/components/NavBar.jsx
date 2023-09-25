import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo_invert.jpg';

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'Home',
        },
        {
            id: 2,
            link: 'About',
        },
        {
            id: 3,
            link: 'Skills',
        },
        {
            id: 4,
            link: 'Projects',
        },
        {
            id: 5,
            link: 'Contact',
        },
    ];
    const handleClick = (link) => {
        const element = document.getElementById(link);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setNav(false);
    };

    return (
        <div className="flex justify-between items-center text-gray-600 w-full h-20 fixed px-4 z-50 bg-white">
            <div
                onClick={() => handleClick('Home')}
                className="flex gap-2 items-center hover:cursor-pointer">
                <img className="h-12" src={logo} alt="logo" />
                <h1 className="text-xl font-bold">Jesús Viafara</h1>
            </div>
            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        onClick={() => handleClick(link)}
                        className="px-4 cursor-pointer hover:scale-105 duration-200 text-xl lg:text-2xl font-medium underline hover:no-underline decoration-cyan-400 decoration-4 uppercase ">
                        {link}
                    </li>
                ))}
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && (
                <ul
                    className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b 
             from-white to-gray-400">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            onClick={() => handleClick(link)}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl">
                            {link}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NavBar;
