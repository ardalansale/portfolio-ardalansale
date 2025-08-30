// Kort för case studies för Home-sidan
interface Cardprops {
    color: string;
    title: string;
    category: string
    description: string;
}

export default function Card ({ color, title, category, description }: Cardprops) {
    return (
        <div className="flex flex-col p-5 gap-2 bg-white border-1 border-gray-100 rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-200">
            <div className={`h-40 rounded-lg border-2 border-stone-100 ${color}`}></div>
            <h3 className="font-semibold">{title}</h3>
            <h3 className="text-blue-900">{category}</h3>
            <p className="text-gray-700">{description}</p>
        </div>
    );
}