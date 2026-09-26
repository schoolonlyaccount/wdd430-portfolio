//'use client';

//import { useEffect, useState } from 'react';
import { fetchFilteredProjects, fetchProjectsPages } from '@/lib/projects-db';
import { ProjectSearch } from '@/components/ProjectSearch';
import Pagination from '@/components/Pagination';

export default async function Projects(props: {
    searchParams?: Promise<{ query?: string; page?: string }>
}) {
    //const [projects, setProjects] = useState([]);

    //useEffect(() => {
    //    fetch('/api/projects')
    //        .then((res) => res.json())
    //        .then((data) => setProjects(data));
    //}, []);

    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const projects = await fetchFilteredProjects(query, currentPage);
    const totalPages = await fetchProjectsPages(query);

    return (
        <main className="mx-auto max-w-5xl px-4 py-12 text-white sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 text-white">
                <h1 className="mb-4 text-4xl font-bold tracking-tight">Projects Overview</h1>
            </div>

            <div className="mb-8">
                <ProjectSearch />
            </div>

            <section className="grid gap-6 md:grid-cols-2">
                {projects.map((project: any) => (
                    <div
                        key={project.id}
                        className="rounded-xl border-l-4 border-l-[var(--secondary-color)] bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                    >
                        <h2 className="mb-2 text-xl font-semibold text-black">
                            {project.title}
                        </h2>

                        <p className="mb-4 text-sm leading-6 text-black">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.technologies?.map((tech: string) => (
                                <span
                                    key={tech}
                                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-[var(--special-red)]"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            <Pagination totalPages={totalPages} />
        </main>
    );
}