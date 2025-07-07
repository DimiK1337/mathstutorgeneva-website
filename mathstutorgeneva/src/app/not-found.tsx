import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center text-center p-6">
            <div>
                <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="text-lg mb-6">
                    Sorry, we couldn&apos;t find the page you were looking for.
                </p>
                <Link href="/" className="text-blue-600 hover:underline">
                    Go back to the homepage
                </Link>
            </div>
        </div>
    );
}