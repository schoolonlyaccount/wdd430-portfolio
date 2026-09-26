export default function OpenSourceProjectsLoading() {
    return (
        <main className="mx-auto max-w-5xl px-4 py-12 text-white sm:px-6 lg:px-8">
            {/* Page heading */}
            <div className="text-center mb-12 sm:mb-16 text-white">
                <h1 className="mb-4 text-4xl font-bold tracking-tight">Open Source Projects</h1>
            </div>

            {/* Project cards */}
            <section className="grid gap-6 md:grid-cols-2">
                {[1, 2, 3, 4].map((project) => (
                    <div
                        key={project}
                        className="rounded-xl border-l-4 border-l-zinc-700 bg-white p-6 shadow-sm"
                    >
                        {/* Title */}
                        <div className="mb-3 h-6 w-48 animate-pulse rounded bg-gray-200" />

                        {/* Description */}
                        <div className="mb-4 space-y-2">
                            <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                            <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200" />
                            <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                            {[1, 2, 3].map((tech) => (
                                <div
                                    key={tech}
                                    className="h-6 w-20 animate-pulse rounded-full bg-gray-200"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}