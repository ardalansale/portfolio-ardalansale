import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
    return (
    <main className='flex flex-col py-20 md:py-30 lg:py-40 bg-pink-100 rounded-2xl'>
        <div>
            <Image
            src="/images/404-glass.png"
            alt="404-error text message in the form of 3d pink glass"
            width={600}
            height={372}
            className='mx-auto mb-12'
            priority
            />
        </div>
        <div className='flex flex-col mx-auto p-4 text-center'>
            <h1 className='text-4xl font-bold mb-4'>404 - Page not found</h1>
            <p className='mb-10'>Sorry, we can&apos;t find that page! It might be an old or maybe it moved. </p>
            <Link href="/" className=' text-blue-500 hover:underline'>
            Go to the homepage
            </Link>
        </div>

    </main>
    );
}