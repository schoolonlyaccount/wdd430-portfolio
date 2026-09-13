import NavLinks from './NavLinks';

export default function Header() {
    return (
        <header className="border-b-2 border-white bg-[var(--primary-color)] py-4 text-white shadow-sm">
            <div id="header-title" className="mx-auto max-w-5xl text-2xl font-bold tracking-tight px-4 sm:px-6 lg:px-8">
                Kell Brine
            </div>

            <NavLinks />
        </header>
    );
}