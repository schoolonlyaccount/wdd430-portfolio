import Link from 'next/link';

export default function Header() {
    return (
        <header className="border-b border-slate-200 bg-slate-900 py-4 text-white shadow-sm">
            <div id="header-title" className="mx-auto max-w-5xl px-4 text-2xl font-bold tracking-tight sm:px-6 lg:px-8">
                Kell Brine
            </div>
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <ul className="flex gap-6 text-sm font-medium">
                    <li>
                        <Link href="/" className="transition-colors hover:text-blue-400">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="transition-colors hover:text-blue-400">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}