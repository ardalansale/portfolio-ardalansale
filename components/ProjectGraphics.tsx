import Image from 'next/image';

interface ProjectGraphicsProps {
    src: string;
    alt: string;
    className?: string;
};

export default function ProjectGraphics ({ src, alt, className }: ProjectGraphicsProps) {
    return (
        <div className={`flex flex-col justify-center items-center p-6 gap-2 bg-white border border-gray-100 rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-200 ${className}`} >
            <Image
            src={src}
            alt={alt}
            width={400}
            height={300}
            className="rounded-lg object-cover"
            />
        </div>
    )
};
