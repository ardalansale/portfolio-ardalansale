import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Home - Ardalan Sale',
    description: 'Home page of portfolio',
    keywords: ['Ardalan Sale', 'developer','ux','design', 'portfolio', 'home', 'landing page'],
}

export default function Home() {
  return (
    <main className='flex flex-col gap-4 max-w-170 w-full mx-auto p-6'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-sky-600'>Ardalan Sale</h1>
        <h1 className='text-cyan-500'>UX Designer & Web Developer</h1>
      </div>
      <div className='space-y-4'>
        <p>UX Designer who also codes. I handle both the design process and technical implementation.</p>
        <p>Fascinated by how people think, feel and interact, I shape those insights into digital experiences that guide, inspire, and make every interaction feel intentional. Working from both design and development perspectives, I create digital products that make sense to users. The best solutions come from understanding both user needs and technical realities.</p>
        <p>I&apos;m currently studying at Lexicon IT-Proffs in Stockholm and looking for an internship from October 30, 2025 to January 29, 2026.</p>
      </div>
    </main>
  );
}