import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="mx-auto max-w-5xl px-4 py-12 text-white sm:px-6 lg:px-8">
            <div className="mx-auto mt-16 max-w-xl rounded-lg border
      border-slate-200 bg-white p-6 text-center shadow-sm">
                <h1 className="text-2xl font-bold text-slate-900">Project Not Found</h1>
                <p className="mt-3 text-slate-600">The project you are looking for does not exist.</p>
                <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link
                        href="/projects"
                        className="rounded-md border border-slate-300 px-4 py-2 font-semibold text-slate-700 transition hover:bg-slate-50"
                    >
                        Back to Projects
                    </Link>
                </div>
            </div>
        </main>
    );
}