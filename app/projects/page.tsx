export const metadata: Metadata = {
    title: 'Contact - Ardalan Sale Portfolio',
    description: 'Ardalan Sale Projects - Developed and designed passion projects',
    keywords: ['Ardalan Sale', 'developer', 'portfolio', 'projects', 'showcase'],
}

import { Metadata } from 'next'
import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
    return (
        <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8 mx-auto p-6'>
            <ProjectCard
            title='hej'
            description='hej'
            tags={["Next.js", "TypeScript", "Tailwind"]}
            demoUrl="https://www.google.se"
            />

            <ProjectCard
            title='hej'
            description='hej'
            tags={["Next.js", "TypeScript", "Tailwind"]}
            demoUrl="https://www.google.se"
            />
        </main>
    );
}