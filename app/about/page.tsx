import SkillsCard from "@/components/SkillsCard";

export default function About() {
    return (
        <main className="mx-auto max-w-5xl px-4 py-12 text-white sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 text-white">
                <h2 className="mb-4 text-4xl font-bold tracking-tight">About Me</h2>
                <p className="mx-auto max-w-2xl text-lg leading-relaxed">
                    This about page shares more information about my background and work.
                </p>
            </div>

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