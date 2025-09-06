// Kort för case studies för Home-sidan
interface Cardprops {
    color: string;
    title: string;
    category: string
    description: string;
};

export default function Card ({ color, title, category, description }: Cardprops) {
    return (
        <div className='item-container'>
            <div className={`h-40 rounded-lg border-2 mb-2 border-stone-100 ${color}`}></div>
            <h4 className='dark:text-cyan-100'>{title}</h4>
            <h4 className='text-blue-900 dark:text-blue-00'>{category}</h4>
            <p className='text-gray-700 dark:text-neutral-200'>{description}</p>
        </div>
    );
};