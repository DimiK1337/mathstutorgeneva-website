import React from "react";

export default function Contact() {
    return (
        <div className="max-w-2xl mx-auto px-6 py-12 space-y-10 text-gray-800 dark:text-gray-100">
            {/* Header */}
            <section className="text-center space-y-4">
                <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                    Contact Dr. W. J. Larson
                </h1>
                <p>
                    To inquire about tutoring, please contact me via email, phone, or Skype.
                </p>
            </section>

            {/* Contact Image */}
            <section className="text-center">
                <img
                    src="/images/contact/rational-real-200x200.png"
                    alt="Math illustration"
                    className="mx-auto w-80 h-80 object-cover shadow-md"
                />
            </section>

            {/* Contact Details */}
            <section className="text-center space-y-2">
                <p>
                    📧{" "}
                    <a
                        href="mailto:DrL@MathsTutorGeneva.ch"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        DrL@MathsTutorGeneva.ch
                    </a>
                </p>
                <p>
                    📞{" "}
                    <a
                        href="tel:+41793734686"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        +41 79 373 4686
                    </a>
                </p>
                <p>
                    💬{" "}
                    <a
                        href="skype:live:bill_larson_1?call"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        Skype: live:bill_larson_1
                    </a>
                </p>
            </section>

            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                I typically respond within 24 hours.
            </p>
        </div>
    );
}
