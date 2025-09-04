export const metadata: Metadata = {
    title: 'Work - Ardalan Sale Portfolio',
    description: 'Work  Ardalan Sale - Work done from internships and freelance',
    keywords: ['Ardalan Sale', 'developer', 'portfolio', 'work', 'showcase', 'freelance'],
}

import { Metadata } from 'next';
import Card from '@/components/WorkCard';
import Link from 'next/link';

export default function Work() {
    return (

        <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8 mx-auto p-6'>
            {/* Med block innan <Link> fyller länken hela det utrymme som barnet (Card-komponenten) upptar. */}

            {/* 1. Closar AI */}
            <Link href="/under-construction" className="block"> 
                <Card
                color="bg-gradient-to-r from-blue-600 to-gray-100"
                title="Closar AI"
                category="HealthTech / SaaS"
                description="Designed accessible interfaces for a healthcare platform, simplifying data sharing for patients and doctors."
                />
            </Link>

            {/* 2. WEIQ */}
            <Link href="/under-construction" className="block"> 
                <Card
                color="bg-gradient-to-r from-rose-400 to-purple-600"
                title="WEIQ"
                category="FinTech / SaaS"
                description="Improved the restaurant app by simplifying checkout, boosting upselling, and creating a modern interface."
                />
            </Link>

            {/* 3. Birds Relations  */}
            <Link href="/under-construction" className="block"> 
                <Card
                color="bg-gradient-to-r from-violet-400 to-gray-100"
                title="Birds Relations"
                category="HealthTech / SaaS"
                description="Enhanced app usability with reviews, user tests, and wireframes, creating clearer flows and solutions."
                />
            </Link>

            {/* 4. Sigma  */}
            <Link href="/under-construction" className="block"> 
                <Card
                color="bg-gradient-to-r from-red-600 to-zinc-500"
                title="Sigma Technology Cloud"
                category="AgTech / SaaS"
                description="Designed an accessible dashboard for a remote hydroponic system SaaS platform, tailored for both large and small businesses."
                />
            </Link>

            {/* 5. Areachica/Clira */}
            <Link href="/under-construction" className="block"> 
                <Card
                color="bg-gradient-to-r from-violet-500 to-fuchsia-400"
                title="AreaChica/Clira"
                category="B2B Services / SaaS"
                description="Redesigned onboarding, profiles, and procurement workflows, simplifying navigation and boosting engagement."
                />
            </Link>

            {/* 6. Försäkringskassan */}
            <Link href="/under-construction" className="block"> 
                <Card
                color="bg-gradient-to-r from-green-800 to-gray-100"
                title="Försäkringskassan"
                category="GovTech / SaaS"
                description="Enhanced the digital childcare leave process with clearer interfaces and simplified, accessible flows."
                />
            </Link>

            {/* 7. Dreams */}
            <Link href="/under-construction" className="block"> 
                <Card
                color="bg-gradient-to-r from-emerald-600 to-green-900"
                title="Dreams"
                category="FinTech / SaaS"
                description="Created personalized onboarding and notifications, improving user engagement, retention, and app loyalty."
                />
            </Link>

        </main>
    );
}