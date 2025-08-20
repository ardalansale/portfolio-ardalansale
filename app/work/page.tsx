import { Metadata } from 'next'
import Card from '@/components/Card'


export const metadata: Metadata = {
    title: 'Work - Ardalan Sale Portfolio',
    description: 'Work  Ardalan Sale - Work done from internships and freelance',
    keywords: ['Ardalan Sale', 'developer', 'portfolio', 'work', 'showcase', 'freelance'],
}

export default function Work() {
    return (

        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8'>

            {/* 1. Closar AI */}
            <Card
            color="bg-gradient-to-r from-green-300 to-red-500"
            title="Closar AI"
            category="SaaS / AgTech"
            description="Developed an accessible dashboard for a SaaS solution controlling remote hydroponic systems."
            />

            {/* 2. WEIQ */}
            <Card
            color="bg-gradient-to-r from-green-300 to-red-500"
            title="WEIQ"
            category="SaaS / AgTech"
            description="Developed an accessible dashboard for a SaaS solution controlling remote hydroponic systems."
            />

            {/* 3. Birds Relations  */}
            <Card
            color="bg-gradient-to-r from-green-300 to-red-500"
            title="Birds Relations"
            category="SaaS / AgTech"
            description="Developed an accessible dashboard for a SaaS solution controlling remote hydroponic systems."
            />

            {/* 4. Sigma  */}
            <Card
            color="bg-gradient-to-r from-green-300 to-red-500"
            title="Sigma Technology Cloud"
            category="SaaS / AgTech"
            description="Developed an accessible dashboard for a SaaS solution controlling remote hydroponic systems."
            />

            {/* 5. Areachica/Clira */}
            <Card
            color="bg-gradient-to-r from-green-300 to-red-500"
            title="AreaChica/Clira"
            category="SaaS / AgTech"
            description="Developed an accessible dashboard for a SaaS solution controlling remote hydroponic systems."
            />

            {/* 6. Försäkringskassan */}
            <Card
            color="bg-gradient-to-r from-green-300 to-red-500"
            title="Försäkringskassan"
            category="SaaS / AgTech"
            description="Developed an accessible dashboard for a SaaS solution controlling remote hydroponic systems."
            />

            {/* 7. Dreams */}
            <Card
            color="bg-gradient-to-r from-green-300 to-red-500"
            title="Dreams"
            category="SaaS / AgTech"
            description="Developed an accessible dashboard for a SaaS solution controlling remote hydroponic systems."
            />

        </section>
    );
}