//src/components/ContactLink.tsx

export default function ContactLink(props: { text: string, href: string}) {
    const { text, href } = props
    return (
        <a
            href={href}
            className="text-blue-600 dark:text-blue-400 hover:underline"
        >
            {text}
        </a>
    )
}

