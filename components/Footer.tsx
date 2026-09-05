export default function Footer() {
    return (
        <footer className="mt-16 border-t border-slate-200 bg-slate-900 py-6 text-slate-300">
            <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
                <p className="text-sm">Copyright © {new Date().getFullYear()} | Kell Brine | All rights reserved</p>
            </div>
        </footer>
    );
}