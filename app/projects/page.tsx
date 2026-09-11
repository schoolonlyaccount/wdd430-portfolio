'use client';

import { useEffect, useState } from 'react';

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/api/projects')
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);

    return (
        <main className="mx-auto max-w-5xl px-4 py-12 text-white sm:px-6 lg:px-8">
            <section className="py-12 text-center sm:py-16">
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-white">Projects Overview</h1>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
                {projects.map((project: any) => (
                    <div
                        key={project.id}
                        className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                    >
                        <h2 className="mb-2 text-xl font-semibold text-gray-900">
                            {project.title}
                        </h2>

                        <p className="mb-4 text-sm leading-6 text-gray-600">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.technologies?.map((tech: string) => (
                                <span
                                    key={tech}
                                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}