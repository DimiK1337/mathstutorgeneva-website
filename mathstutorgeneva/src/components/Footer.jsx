export default function Footer() {
    return (
        <footer className="bg-slate-100 dark:bg-slate-800 text-center text-sm p-4 mt-10 text-gray-800 dark:text-gray-100">
            <p>
                Contact:{" "}
                <a
                    href="mailto:DrL@MathsTutorGeneva.ch"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                    DrL@MathsTutorGeneva.ch
                </a>{" "}
                •{" "}
                <a
                    href="tel:+41793734686"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                    079 373 46 86
                </a>{" "}
                •{" "}
                <a
                    href="skype:live:bill_larson_1?call"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                    Skype: live:bill_larson_1
                </a>
            </p>
            <p className="mt-2">
                © {new Date().getFullYear()} mathstutorgeneva.ch — Site by Hacks R Us
            </p>
        </footer>
    );
}
