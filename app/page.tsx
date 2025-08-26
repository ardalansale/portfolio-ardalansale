import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Home - Ardalan Sale',
    description: 'Home page of portfolio',
    keywords: ['Ardalan Sale', 'developer','ux','design', 'portfolio', 'home', 'landing page'],
}

export default function Home() {
  return (
    <main className="flex flex-col gap-4 max-w-150">
      <h1 className='text-4xl font-regular'>Ardalan Sale</h1>
      <h1 className='text-4xl text-zinc-500'>UX Designer & Web Developer</h1>
      <div className="space-y- gap-4">
        <p>I&apos;m a UX Designer making the leap into Frontend Development; blending design vision with the ability to bring it to life in code.</p>
        <p>Fascinated by how people think, feel and interact, I shape those insights into digital experiences that guide, inspire, and make every interaction feel intentional. I believe the best digital experiences are born where human understanding meets technical precision; where every design choice is backed by empathy and every line of code has purpose.</p>
        <p className="text-blue-600">I&apos;m currently studying at Lexicon IT-Proffs in Stockholm and looking for an internship from October 30, 2025 to January 29, 2026.</p>
      </div>
    </main>
  );
}