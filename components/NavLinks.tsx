'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <nav aria-label="Primary" className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8 mt-2 py-2">
            <ul className="flex gap-6 text-lg font-medium">
                <li>
                    <Link
                        href="/"
                        className={pathname === '/' ? 'active' : 'inactive'}
                        aria-current={pathname === '/' ? 'page' : undefined}
                    >Home</Link>
                </li>
                <li>
                    <Link
                        href="/about"
                        className={pathname === '/about' ? 'active' : 'inactive'}
                        aria-current={pathname === '/about' ? 'page' : undefined}
                    >About</Link>
                </li>
                <li>
                    <Link
                        href="/contact"
                        className={pathname === '/contact' ? 'active' : 'inactive'}
                        aria-current={pathname === '/contact' ? 'page' : undefined}
                    >Contact</Link>
                </li>
                <li>
                    <Link
                        href="/projects"
                        className={pathname === '/projects' ? 'active' : 'inactive'}
                        aria-current={pathname === '/projects' ? 'page' : undefined}
                    >Projects</Link>
                </li>
            </ul>
        </nav>
    );
}