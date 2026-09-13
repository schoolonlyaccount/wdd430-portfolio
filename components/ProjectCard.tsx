interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
    return (
        <article className="rounded-xl border-l-4 border-l-[var(--secondary-color)] bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
            <h2 className="mb-3 text-xl font-bold text-black">{title}</h2>
            <p className="mb-4 leading-relaxed text-black">{description}</p>
            <p className="text-sm text-[red]">
                <strong className="font-semibold text-slate-800">Technologies:</strong> {technologies.join(', ')}
            </p>

            {link && (
                <p className="mt-4">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--secondary-color)] transition-colors hover:text-[var(--hover-color2)]">View Project</a>
                </p>
            )}
        </article>
    );
}