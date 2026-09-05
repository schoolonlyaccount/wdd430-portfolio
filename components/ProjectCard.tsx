interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
    return (
        <article className="rounded-xl border border-slate-200 border-l-4 border-l-blue-600 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            <h3 className="mb-3 text-xl font-bold text-slate-900">{title}</h3>
            <p className="mb-4 leading-relaxed text-slate-600">{description}</p>
            <p className="text-sm text-slate-600">
                <strong className="font-semibold text-slate-800">Technologies:</strong> {technologies.join(', ')}
            </p>
            {link && (
                <p className="mt-4">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 transition-colors hover:text-blue-700 hover:underline">View Project</a>
                </p>
            )}
        </article>
    );
}