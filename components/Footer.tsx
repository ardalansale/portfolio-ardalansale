export default function Footer() {
    const links = [
        { name: "ardalansale@gmail.com", href: "mailto:ardalansale@gmail.com" },
        { name: "Linkedin", href: "https://www.linkedin.com/in/ardalansale" },
        { name: "Github", href: "https://www.github.com/ardalansale" },
    ];

    return (
        <div className='flex flex-col gap-20 max-w-90 mx-auto justify-center items-center mt-20 mb-30'>
            <nav>
                <ul className='flex flex-col lg:flex-row items-center gap-4 nav-link'>
                {links.map((link) => (
                    <li key={link.name}>
                        <a
                            href={link.href}
                            className="nav-link--hover"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
                </ul>
            </nav>
            <div className='flex flex-col gap-2 footer-text'>
                <p>© 2025 Ardalan Sale.</p>
                <p>All Rights Reserved.</p>
                <p>Designed and developed by Ardalan Sale using Next.js, Tailwind CSS, and TypeScript.</p>
            </div>
        </div>
    )
};