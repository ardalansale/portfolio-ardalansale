type AboutSectionProps = {
    title: string
    content:string
}

export default function AboutSection({title, content}: AboutSectionProps) {
    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-4xl">{title}</h2>
            <p>{content}</p>
        </section>
    )
}