// Kort för case studies under Home
import Image from "next/image";

interface Cardprops {
    image: string;
    title: string;
    category: string
    description: string;
}

export default function Card ({ image, title, category, description }: Cardprops) {
    return (
        <div className="flex flex-col p-5 gap-2 max-w-80 border-1 rounded-lg cursor-pointer">
            <Image src={image} alt={"bild på blabla"} width={200} height={200}/>
            <h3 className="font-semibold">{title}</h3>
            <h3 className="text-blue-900">{category}</h3>
            <p className="text-gray-700">{description}</p>
        </div>
    );
}