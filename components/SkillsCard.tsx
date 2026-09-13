interface Skill {
    title: string;
    skills: string[];
}

export default function SkillsCard({ title, skills }: Skill) {
    return (
        <div className="rounded-xl border-l-4 border-l-[var(--secondary-color)] bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
            <h2 className="mb-5 text-2xl font-bold tracking-tight text-black">
                {title}
            </h2>

            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span key={skill} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-[red]">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}