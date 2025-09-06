import Image from 'next/image';

interface ProjectGraphicsProps {
    src: string;
    alt: string;
    className?: string;
};

export default function ProjectGraphics ({ src, alt, className }: ProjectGraphicsProps) {
    return (
        <div className={`justify-center items-center item-container ${className}`} >
            <Image
            src={src}
            alt={alt}
            width={400}
            height={300}
            className='rounded-lg object-cover'
            />
        </div>
    )
};
