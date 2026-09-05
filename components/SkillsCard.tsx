interface Skill {
    title: string;
    skills: string[];
}

export default function SkillsCard({ title, skills }: Skill) {
    return (
        <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-2xl font-bold tracking-tight text-slate-900">
                {title}
            </h2>

            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span key={skill} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}