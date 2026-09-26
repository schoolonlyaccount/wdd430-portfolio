'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function ProjectsLayout({ children, }: { children: React.ReactNode; }) {
    const pathname = usePathname();

    return (
        <section>
            <nav aria-label="Projects" className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-4">
                <ul className="flex gap-6 border-b border-white pb-5 text-sm font-medium">
                    <li>
                        <Link
                            href="/projects"
                            className={pathname === '/projects' ? 'active' : 'inactive'}
                            aria-current={pathname === '/projects' ? 'page' : undefined}
                        >All Projects</Link>
                    </li>
                    <li>
                        <Link
                            href="/projects/school"
                            className={pathname === '/projects/school' ? 'active' : 'inactive'}
                            aria-current={pathname === '/projects/school' ? 'page' : undefined}
                        >School Projects</Link>
                    </li>
                    <li>
                        <Link
                            href="/projects/open-source"
                            className={pathname === '/projects/open-source' ? 'active' : 'inactive'}
                            aria-current={pathname === '/projects/open-source' ? 'page' : undefined}
                        >Open Source Projects</Link>
                    </li>
                    <li>
                        <Link
                            href="/projects/settings"
                            className={pathname === '/projects/settings' ? 'active' : 'inactive'}
                            aria-current={pathname === '/projects/settings' ? 'page' : undefined}
                        >Settings</Link>
                    </li>
                </ul>
            </nav>

            {children}
        </section>
    );
}