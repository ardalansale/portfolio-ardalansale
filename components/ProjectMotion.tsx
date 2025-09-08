interface ProjectMotionProps {
    alt: string;
    demoUrl?: string;
    title?: string;
}

export default function ProjectMotion({ alt, demoUrl, title }: ProjectMotionProps) {
    const isVideo = demoUrl?.includes(".mp4");

    return (
        <div>
            {isVideo && demoUrl ? (
            <>
            <video
                controls
                width="100%"
                className='rounded-lg cursor-pointer'
            >
                <source src={demoUrl} type="video/mp4" />
                Your browser doesn&apos;t support this video.
            </video>

            {title && (
                <h4 className="mt-2 text-lg font-semibold dark:text-cyan-100 text-gray-800">
                    {title}
                </h4>
            )}
            </>

            ) : (
            <div className="rounded-lg bg-gray-100 p-4 flex items-center justify-center h-[400px] w-[600px]">
                <p className="text-gray-500 text-center">{alt}</p>
            </div>
            )}
        </div>
    );
}
