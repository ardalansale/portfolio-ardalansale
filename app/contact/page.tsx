export const metadata: Metadata = {
    title: 'Contact - Ardalan Sale Portfolio',
    description: 'Contact Ardalan Sale - Linkedin & E-Mail',
    keywords: ['Ardalan Sale', 'developer', 'portfolio', 'contact'],
}

import { Metadata } from 'next'
import Link from 'next/link'
import ContactInfo, {ContactItem} from "@/components/ContactInfo"

export default function Contact() {
    const contactItems: ContactItem[] = [
        {
            label: "Email",
            value: "ardalansale@gmail.com",
            href: "mailto:ardalansaleh@gmail.com"
        },
        {
            label: "LinkedIn",
            value: "linkedin.com/in/ardalnsale",
            href: "https://www.linkedin.com/in/ardalansale",
            linkProps: {target: "_blank", rel: "noopener noreferrer"}
        },
        {
            label: "Github",
            value: "github.com/ardalansale",
            href: "https://www.github.com/ardalansale",
            linkProps: {target: "_blank", rel: "noopener noreferrer"}
        }
    ]

    return (
        <main className='flex flex-col items-center py-20 md:py-30 lg:py-40'>
        <ContactInfo items={contactItems}/>
        </main>    
    );
}