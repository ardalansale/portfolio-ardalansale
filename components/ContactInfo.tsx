export type ContactItem = {
    label: string;
    value: string;
    href?: string;
    linkProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
};

type ContactInfoProps = {
    items: ContactItem[];
};

export default function ContactInfo({items}: ContactInfoProps) {
    return (
        <address className="not-italic space-y-2">
            {items.map(({label, value, href, linkProps}, index) => (
                <div key={index} className="flex gap-2">
                    <span className="font-normal">{label}:</span>
                    {href ? (
                        <a 
                        href={href}
                        className="text-blue-700 dark:text-blue-500 hover:underline"
                        {...linkProps}
                        >
                        {value}
                        </a>
                    ) : (
                        <span>{value}</span>
                    )}
                </div>
            ))}
        </address>
    );
};