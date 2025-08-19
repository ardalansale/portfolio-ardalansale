export default function Footer() {
    const links = [
        { name: "ardalansale@gmail.com", href: "mailto:ardalansale@gmail.com" },
        { name: "Linkedin", href: "https://www.linkedin.com/in/ardalansale" },
        { name: "Github", href: "https://www.github.com/ardalansale" },
    ];

    return (
        <div className="flex w-full justify-between items-center mt-10 py-2 font-normal text-gray-500">
            <p>© 2025 Ardalan Sale. All Rights Reserved.</p>
            <nav>
                <ul className="flex gap-4">
                {links.map((link) => (
                    <li key={link.name}>
                        <a
                            href={link.href}
                            className="hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
                </ul>
            </nav>
        </div>
    )
}