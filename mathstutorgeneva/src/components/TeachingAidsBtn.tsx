import React from "react"
import Link from "next/link"

export default function TeachingAidsBtn(): React.ReactElement {
    return (
        <div className="pt-8 text-center">
            <Link
                href="/#TeachingAids"
                className="inline-block bg-orange-600 text-white px-5 py-3 rounded hover:bg-orange-700 transition text-sm font-medium"
            >
                Back to teaching materials
            </Link>
        </div>
    );
}