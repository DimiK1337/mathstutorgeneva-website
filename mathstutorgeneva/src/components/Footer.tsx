import ContactLink from "@/components/ContactLink";

import rawContactData from "@/data/contact_info.json";

type ContactData = {
    email: string;
    telephone: string;
}

const contactData = rawContactData as ContactData;

export default function Footer() {
    return (
        <footer className="bg-slate-100 dark:bg-slate-800 text-center text-sm p-4 mt-10 text-gray-800 dark:text-gray-100">
            <p>
                Contact:{" "}
                <ContactLink text={contactData.email} href={`mailto:${encodeURIComponent(contactData.email)}`} />
                {"  |  "}
                <ContactLink text={contactData.telephone} href={`tel:${encodeURIComponent(contactData.telephone.replaceAll(' ', ''))}`} />
                {"  |  "}
                <ContactLink text={"Teams"} href={`https://teams.microsoft.com/l/call/0/0?users=${encodeURIComponent(contactData.email)}`} />
            </p>
            <p className="mt-2">
                © {new Date().getFullYear()} mathstutorgeneva.ch — Site by DMTK1337
            </p>
        </footer>
    );
}
