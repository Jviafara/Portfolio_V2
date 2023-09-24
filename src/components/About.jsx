import UnderLine from './UnderLine';

const About = () => {
    return (
        <div
            id="About"
            className="w-full py-10 bg-gradient-to-br from-white to-gray-300 ">
            <div className="max-w-screen-lg p-2 md:p-8 mx-auto my-10 flex flex-col gap-10 justify-center w-full h-full">
                <UnderLine>
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About Me
                    </p>
                </UnderLine>
                <div className="flex flex-col gap-4">
                    <p className="text-xl">
                        I am an enthusiastic and dedicated full stack developer
                        more than a year of experience and passion for creating
                        innovative and user-friendly web applications. With a
                        strong foundation in both front-end and back-end
                        development technologies, I bring creativity,
                        problem-solving skills, and a commitment to continuous
                        learning to every project. I am excited to contribute my
                        technical expertise and collaborate with
                        cross-functional teams to deliver high-quality web
                        solutions that meet both user and business needs.
                    </p>
                    <p className="text-xl">
                        I{"'"}m ready to contribute my technical skills,
                        dedication, and passion for web development to create
                        impactful and user-centric web solutions.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
