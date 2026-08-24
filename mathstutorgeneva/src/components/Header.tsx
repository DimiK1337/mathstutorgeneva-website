//src/components/Header.tsx

"use client"; // Need CSR for usePathname

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from 'react';


interface NavItem {
	name: string;
	href: string;
}

const navigation: NavItem[] = [
	{ name: "Home", href: "/" },
	{ name: "About Dr. Larson", href: "/about-dr-larson-maths-tutor" },
	{ name: "How I Tutor", href: "/how-i-tutor" },
	{ name: "SAT Math", href: "/sat-math" },
	{ name: "Testimonials", href: "/testimonials" },
	{ name: "Tutoring Fees", href: "/fees" },
	{ name: "Location", href: "/how-to-get-to-the-larsons-in-nyon" },
	{ name: "Contact", href: "/contact-dr-larson" },
];

function classNames(...classes: (string)[]): string {
	return classes.filter(Boolean).join(" ");
}

export default function Header(): React.ReactElement {
	const pathname = usePathname();

	return (
		<Disclosure as="nav" className="bg-slate-800 text-white shadow">
			{({ open }: { open: boolean }) => (
				<>
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="flex h-16 items-center justify-between">
							<div className="flex-shrink-0 text-lg font-bold text-white">
								<Link href="/">Dr. William J. Larson</Link>
							</div>

							<div className="hidden sm:block sm:ml-6">
								<div className="flex space-x-4 items-center">
									{navigation.map((item) => (
										<Link
											key={item.name}
											href={item.href}
											className={classNames(
												pathname === item.href
													? "bg-slate-900 text-white"
													: "text-gray-300 hover:bg-slate-700 hover:text-white",
												"px-3 py-2 rounded-md text-sm font-medium"
											)}
										>
											{item.name}
										</Link>
									))}
								</div>
							</div>

							<div className="sm:hidden">
								<DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
									)}
								</DisclosureButton>
							</div>
						</div>
					</div>

					<DisclosurePanel className="sm:hidden">
						<div className="space-y-1 px-2 pt-2 pb-3">
							{navigation.map((item) => (
								<DisclosureButton
									key={item.name}
									as={Link}
									href={item.href}
									className={classNames(
										pathname === item.href
											? "bg-slate-900 text-white"
											: "text-gray-300 hover:bg-slate-700 hover:text-white",
										"block rounded-md px-3 py-2 text-base font-medium"
									)}
								>
									{item.name}
								</DisclosureButton>
							))}
						</div>
					</DisclosurePanel>
				</>
			)}
		</Disclosure>
	);
}
