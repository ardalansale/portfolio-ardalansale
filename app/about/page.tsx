export const metadata: Metadata = {
    title: 'About - Ardalan Sale',
    description: 'Learn more about me',
    keywords: ['Ardalan Sale', 'developer','ux','design', 'portfolio', 'about'],
};

import { Metadata } from 'next';
import Image from 'next/image';
import AboutSection from '@/components/AboutText';

const sections = [
    {
        title: "I am",
        content: "a creative problem-solver who loves turning ideas into real, usable products. I get energy from working with people, bouncing ideas around and celebrating wins together. For me, design is simply about creating something that people genuinely enjoy."
    },

    {
        title: "I approach",
        content: "every project by putting the user at the center of all decisions. I focus on truly understanding what people need, then adapt my solutions to create value for both users and the business. Function always drives my work. Beautiful design means nothing if it doesn't actually solve problems or make life easier. I work across both UX and frontend because I want to control the entire experience, from initial user journeys to final interactive details. My goal is creating interfaces so intuitive and satisfying that people naturally recommend them to others. I'm constantly exploring new creative tools to bring into my workflow. AI has become an invaluable collaborator in my process and I'm currently learning Blender to bring 3D elements into web projects."
    },

    {
        title: "I enjoy",
        content: "staying active both physically and creatively. Music is a huge part of my life and I have small home studio where I create music. The gym has become my morning ritual, especially since I started incorporating some light running into my routine. Gaming is my go-to for unwinding on the weekends and Gran Turismo 7 has completely hooked me lately. Above everything else though, nothing beats the time I get to spend with my fiancée, family and the people closest to me."
    },
]

export default function About() {
    return (
        <main className="flex flex-row gap-2">
            {/* Textyta */}
            <article className="flex flex-col flex-1 gap-8">
                {sections.map((section, index) => (
                <AboutSection
                    key={index}
                    title={section.title}
                    content={section.content}
                    />
                ))}
            </article>

            {/* Bild */}
            <section className='flex flex-col flex-1 gap-2'>
                <figure>
                    <Image
                        src="/images/ardalan.webp"
                        alt="A picture of me, Ardalan"
                        width={250}
                        height={0}
                        className='rounded-md mx-auto'
                        priority
                    />
                    {/* <figcaption></figcaption> */}
                </figure>

                <figure>
                    <Image
                        src="/images/donut.webp"
                        alt="A pink donut made in Blender"
                        width={250}
                        height={0}
                        className='rounded-md mx-auto'
                        priority
                    />
                    {/* <figcaption></figcaption> */}
                </figure>

                <figure>
                    <Image
                        src="/images/skyline.webp"
                        alt="a picture of a car in Gran Turismo 7"
                        width={250}
                        height={0}
                        className='rounded-md mx-auto'
                        priority
                    />
                    {/* <figcaption></figcaption> */}
                </figure>
            </section>
        </main>
    )
}
