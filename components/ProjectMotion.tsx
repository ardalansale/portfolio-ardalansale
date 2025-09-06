import Image from "next/image";

interface ProjectMotionProps {
    src: string;
    alt: string;
    demoUrl?: string;
}

export default function ProjectMotion({ src, alt, demoUrl }: ProjectMotionProps) {
    const isVideo = demoUrl?.includes(".mp4");

    return (
        <div>
            {isVideo && demoUrl ? (
            <video
                controls
                width="100%"
                className='rounded-lg cursor-pointer'
            >
                <source src={demoUrl} type="video/mp4" />
                Din webbläsare stödjer inte video-taggen.
            </video>
            ) : (
            <Image
                src={src}
                alt={alt}
                width={600}
                height={400}
                className='rounded-lg object-cover'
            />
            )}
        </div>
    );
}
