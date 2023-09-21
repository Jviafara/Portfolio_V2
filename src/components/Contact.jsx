import React from 'react';
import UnderLine from './UnderLine';

const Contact = () => {
    return (
        <div
            id="Contact"
            className="bg-gradient-to-b from-transparent via-white to-gray-500 bg-opacity-10 w-full h-full p-4">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <UnderLine>
                        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                            Contact
                        </p>
                    </UnderLine>

                    <p className="py-6 font-semibold">
                        Fill And Submit theForm to send me an Email
                    </p>
                </div>
                <div className="flex justify-center items-center">
                    <form
                        action="https://getform.io/f/986d3bba-f0d0-44f6-a1a2-6c31b80fab9c"
                        method="post"
                        className="flex flex-col w-full md:w-3/4">
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Name"
                            className="p-2 bg-transparent border-2 rounded-md border-black focus:outline-none placeholder-gray-500"
                        />
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Email Address"
                            className="my-4 p-2 bg-transparent border-2 rounded-md border-black focus:outline-none placeholder-gray-500"
                        />
                        <textarea
                            name="message"
                            required
                            rows="10"
                            placeholder="Write your message here!"
                            className="p-2 bg-transparent border-2 rounded-md border-black focus:outline-none placeholder-gray-500"
                        />
                        <button
                            type="submit"
                            className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
