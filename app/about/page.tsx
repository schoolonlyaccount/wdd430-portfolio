import SkillsCard from "@/components/SkillsCard";

export default function About() {
    return (
        <main className="mx-auto max-w-5xl px-4 py-12 text-white sm:px-6 lg:px-8">
            <section className="py-12 text-center sm:py-16">
                <h2 className="mb-4 text-4xl font-bold tracking-tight text-white">About Me</h2>
                <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">
                    This about page shares more information about my background and work.
                </p>
            </section>

            <SkillsCard
                title="Technical Language Skills"
                skills={[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "C#",
                    "Python",
                    "C++",
                    "GML",
                ]}
            />
        </main>
    );
}