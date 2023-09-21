import About from '../components/About';
import Contact from '../components/Contact';
import Header from '../components/Header';
import ProjectsGrid from '../components/ProjectsGrid';
import Skills from '../components/Skills';
import SocialLinks from '../components/SocialLinks';

const Home = () => {
    return (
        <div id="Home" className="w-full h-full -z-[999]">
            <div
                style={{ backgroundImage: 'url(./assets/background.jpg)' }}
                className="w-[100vw] h-full fixed bg-cover -z-[999]"
            />
            <Header />
            <About />
            <Skills />
            <div id="Projects">
                <ProjectsGrid />
            </div>
            <Contact />
            <SocialLinks />
        </div>
    );
};

export default Home;
