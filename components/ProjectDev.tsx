type ProjectProps = {
    title: string;
    description: string;
    tags: string[];
    demoUrl?: string;
};

const ProjectDev = ({ title, description, tags, demoUrl}: ProjectProps) => {

    // Färg för specifika taggar
    const tagColors: Record<string, string> = {
        React: "bg-blue-100 text-blue-800",
        "Next.js": "bg-black text-white",
        Tailwind: "bg-cyan-100 text-cyan800",
        TypeScript: "bg-blue-200 text-blue-900",
        JavaScript: "bg-yellow-300 text-black",
        Node: "bg-green-100 text-green-800",
        HTML: "bg-orange-300 text-black",
        CSS: "bg-blue-400 text-white-300",
    };


    const Wrapper = demoUrl 
    ? ({ children }: {children: React.ReactNode }) => (
        <a
        href={demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        >
        {children}
        </a>
    )
    : ({children}: {children: React.ReactNode }) => <div>{children}</div>;

    return (
        <Wrapper>
            <div className='flex flex-col p-5 gap-2 bg-white border-1 border-gray-100 rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-200'>
                <h3 className='font-semibold'>{title}</h3>
                <p className='text-gray-700 mb-4'>{description}</p>
                <div className='flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <span
                        key={tag}
                        className={`text-xs font-medium px-4 py-2 rounded-xl ${
                            tagColors[tag] || "bg-gray-100 text-gray-800"
                        }`}
                        >
                        {tag}
                        </span>
                    ))}
                </div>
            </div>
        </Wrapper>
    );
};

export default ProjectDev;
