'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function ProjectsLayout({ children, }: { children: React.ReactNode; }) {
    const pathname = usePathname();

    return (
        <section>
            <nav aria-label="Projects" className="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
                <ul className="flex gap-6 border-b border-gray-200 pb-3 text-sm font-medium dark:border-gray-700">
                    <li>
                        <Link
                            href="/projects"
                            className={pathname === '/projects' ? 'active' : ''}
                            aria-current={pathname === '/projects' ? 'page' : undefined}
                        >Projects</Link>
                    </li>
                    <li>
                        <Link
                            href="/projects/settings"
                            className={pathname === '/projects/settings' ? 'active' : ''}
                            aria-current={pathname === '/projects/settings' ? 'page' : undefined}
                        >Settings</Link>
                    </li>
                </ul>
            </nav>

            {children}
        </section>
    );
}