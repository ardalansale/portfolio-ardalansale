export default function Footer() {
    const links = [
        { name: "ardalansale@gmail.com", href: "mailto:ardalansale@gmail.com" },
        { name: "Linkedin", href: "https://www.linkedin.com/in/ardalansale" },
        { name: "Github", href: "https://www.github.com/ardalansale" },
    ];

    return (
        <div className='flex flex-col gap-8 max-w-170 mx-auto justify-center items-center mt-30 mb-30'>
            <nav>
                <ul className='flex gap-4 nav-link'>
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
            <p className='text-gray-300 dark:text-gray-700'>© 2025 Ardalan Sale. All Rights Reserved.</p>
        </div>
    )
};