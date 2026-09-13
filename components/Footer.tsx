export default function Footer() {
    return (
        <footer className="border-t-2 border-white bg-[var(--primary-color)] py-6 text-white">
            <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
                <p className="text-sm">Copyright © {new Date().getFullYear()} | Kell Brine | All rights reserved</p>
            </div>
        </footer>
    );
}