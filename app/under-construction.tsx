import Link from 'next/link';

export default function UnderConstruction() {
    return (
    <main className='flex flex-col py-20 items-center md:py-30 lg:py-40 bg-pink-100 rounded-2xl'>
        <div className='flex flex-col mx-auto p-4 text-center'>
            <h1 className='text-4xl font-bold mb-4'>Under Construction</h1>
            <p className='mb-10'>Sorry, we can&apos;t find that page! It might be an old or maybe it moved. </p>
            <Link href="/" className=' text-blue-500 hover:underline'>
            Go to the homepage
            </Link>
        </div>
    </main>
    );
}