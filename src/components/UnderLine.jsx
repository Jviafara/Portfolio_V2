const UnderLine = ({ children }) => {
    return (
        <div className="max-w-max group relative overflow-hidden">
            <div className="relative z-10 px-1">{children}</div>
            <div className="absolute bottom-0 w-full group-hover:-translate-x-[35%] transition ease-in-out duration-500 h-[38%] z-0 bg-cyan-400"></div>
        </div>
    );
};

export default UnderLine;
