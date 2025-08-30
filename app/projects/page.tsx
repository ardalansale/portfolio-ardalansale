export const metadata: Metadata = {
    title: 'Contact - Ardalan Sale Portfolio',
    description: 'Ardalan Sale Projects - Developed and designed passion projects',
    keywords: ['Ardalan Sale', 'developer', 'portfolio', 'projects', 'showcase'],
}

import { Metadata } from 'next'
import ProjectCard from '@/components/ProjectCard'
import ProjectGraphics from '@/components/ProjectGraphics'

export default function Projects() {
    return (
        <main className='flex flex-col w-full gap-4 mx-auto p-6'>

            {/* Frontend-projekt */}
            <h2 className="text-2xl">Dev</h2>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/* 5. Daily Quote */}
                <ProjectCard
                title='5. Daily Quote'
                description='This is my first project using an API. It displays an inspirational quote each day, fetched from the ZenQuotes API.
                I built it using HTML, CSS, and JavaScript, and learned how to handle API requests, CORS issues, and local storage.'
                tags={["HTML", "CSS", "JavaScript"]}
                demoUrl="https://ardalansale.github.io/dailyquote/"
                />

                {/* 4. Planned Planthood */}            
                <ProjectCard
                title='4. Planned Planthood'
                description='This project is an assignment for my training program, focusing on learning to use semantic HTML, the BEM methodology for CSS class naming, and creating a structured and accessible website with CSS.'
                tags={["HTML", "CSS"]}
                demoUrl="https://ardalansale.github.io/planned-planthood/"
                />

                {/* 3. Beställlningsformulär */}
                <ProjectCard
                title='3. Beställningsformulär'
                description='HTML form exercise focused on semantic markup, accessibility, and validation. Built to practice proper form structure, labeling, fieldset/legend usage, and HTML5 input types.'
                tags={["HTML", "CSS", "JavaScript"]}
                demoUrl="https://ardalansale.github.io/orderform-event/"
                />

                {/* 2. Tiramisu TOK */}
                <ProjectCard
                title='2. Tiramisu Recipe'
                description='A simple webpage showcasing a classic Tiramisu recipe. The project is built with HTML and CSS and was created for a Test & Assessment assignment. I made this as a trial to see if I would be accepted into the Lexicon training program.'
                tags={["HTML", "CSS"]}
                demoUrl="https://ardalansale.github.io/tiramisu-v2/"
                />

                {/* 1. Closar AI */}
                <ProjectCard
                title='1. Closar AI - Log In'
                description='This is a simple login page created as part of my thesis project at Closar AI. The purpose of the page is to prioritize simplicity and accessibility through strong color contrasts and as few distractions as possible.'
                tags={["HTML", "CSS", "JavaScript"]}
                demoUrl="https://ardalansale.github.io/closarai-login/"
                />
            </section>

            {/* Grafiska-project */}
            <h2 className="text-2xl">Graphics</h2>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                
            {/* 1. Ardi Sketch */}
            <ProjectGraphics
            src="/images/projects/ardi-sketch.webp"
            alt="a black and white sketch of me"
            />

            {/* 2. Vin-Rab */}
            <ProjectGraphics
            src="/images/projects/vin-rab.webp"
            alt="a black and white sketch of me"
            />

            {/* 3. Sale-Wolf */}
            <ProjectGraphics
            src="/images/projects/sale-wolf.webp"
            alt="a black and white sketch of me"
            />

            {/* 4. stressed-out */}
            <ProjectGraphics
            src="/images/projects/stressed-out.webp"
            alt="a black and white sketch of me"
            />

            {/* 5. Lucho */}
            <ProjectGraphics
            src="/images/projects/lucho.webp"
            alt="a black and white sketch of me"
            />
            
            {/* 6. Susy-Circle */}
            <ProjectGraphics
            src="/images/projects/susy-circle.webp"
            alt="a black and white sketch of me"
            />

            {/* 7. Olive */}
            <ProjectGraphics
            src="/images/projects/olive.webp"
            alt="a black and white sketch of me"
            />

            {/* 8. Barry-blue */}
            <ProjectGraphics
            src="/images/projects/barryblue.webp"
            alt="a black and white sketch of me"
            />

            {/* 10. Smirk */}
            <ProjectGraphics
            src="/images/projects/smirk.webp"
            alt="a black and white sketch of me"
            />

            {/* 11. First Flower */}
            <ProjectGraphics
            src="/images/projects/first-flower.webp"
            alt="a black and white sketch of me"
            />

            {/* 12. Sunhill */}
            <ProjectGraphics
            src="/images/projects/sunhill.webp"
            alt="a black and white sketch of me"
            />

            {/* 13. Pink Ghost */}
            <ProjectGraphics
            src="/images/projects/pink-ghost.webp"
            alt="a black and white sketch of me"
            />

            {/* 14. Snizzle */}
            <ProjectGraphics
            src="/images/projects/snizzle.webp"
            alt="a black and white sketch of me"
            />

            {/* 15. Fangman */}
            <ProjectGraphics
            src="/images/projects/fangman.webp"
            alt="a black and white sketch of me"
            />

            {/* 16. Tooth Demon */}
            <ProjectGraphics
            src="/images/projects/tooth-demon.webp"
            alt="a black and white sketch of me"
            />

            {/* 17. Donnie */}
            <ProjectGraphics
            src="/images/projects/donnie.webp"
            alt="a black and white sketch of me"
            />

            {/* 18. DottheOne */}
            <ProjectGraphics
            src="/images/projects/dottheone.webp"
            alt="a black and white sketch of me"
            />
            
            {/* 19. DotDot */}
            <ProjectGraphics
            src="/images/projects/dotdot.webp"
            alt="a black and white sketch of me"
            />

            </section>

            {/* UX/UI
            <h2 className="text-2xl">UX/UI</h2>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            </section> */}
        </main>
    );
}