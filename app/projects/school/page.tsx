'use client';

import { useEffect, useState } from 'react';

export default function School() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/api/projects?type=school')
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);

    return (
        <main className="mx-auto max-w-5xl px-4 py-12 text-white sm:px-6 lg:px-8">
            <section className="py-12 text-center sm:py-16">
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-white">School Projects</h1>
            </section>

            {projects.map((project: any) => (
                <div key={project.id}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                </div>
            ))}
        </main>
    );
}
