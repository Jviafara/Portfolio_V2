import { TbArrowRightCircle } from 'react-icons/tb';
import UnderLine from './UnderLine';

const Header = () => {
    const handleClick = () => {
        const element = document.getElementById('Projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            name="Home"
            className="w-full h-screen flex flex-col gap-12 justify-center items-center relative">
            <div className="flex flex-col gap-2">
                <UnderLine>
                    <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-600 text-center  md:text-left relative group">
                        Hi! I{"'"}m Jesús.
                    </h1>
                </UnderLine>
                <UnderLine>
                    <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-600 text-center  md:text-left">
                        I{"'"}m a Full Stack Web Developer.
                    </h1>
                </UnderLine>
            </div>
            <button
                type="button"
                onClick={handleClick}
                className="bg-cyan-400 px-8 py-2 rounded-full text-white text-2xl font-bold uppercase flex items-center gap-4 group">
                Projects
                <span className="group-hover:rotate-90 duration-300">
                    <TbArrowRightCircle size={25} className="ml-2" />
                </span>
            </button>

            <div className="absolute bottom-4 border border-black rounded-full px-1 py-4">
                <div className="w-3 h-3 bg-cyan-400 border rounded-full border-cyan-400 animate-top-botton"></div>
            </div>
        </div>
    );
};

export default Header;
