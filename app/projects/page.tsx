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
        </main>
    );
}