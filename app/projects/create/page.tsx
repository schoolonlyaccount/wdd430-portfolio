import { createProject } from '@/lib/actions';

export default function Page() {
    return (
        <main className="mx-auto max-w-5xl px-4 py-12 text-white sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 text-white">
                <h1 className="mb-4 text-4xl font-bold tracking-tight">Create Project</h1>
            </div>

            <form action={createProject} className="project-form">
                <label htmlFor="title">Title</label>
                <input id="title" name="title" required />

                <label htmlFor="description">Description</label>
                <input id="description" name="description" required />

                <label htmlFor="type">Type</label>
                <select id="type" name="type" required>
                    <option value="opensource">Open Source</option>
                    <option value="school">School</option>
                </select>

                <label htmlFor="technologies">Technologies (comma-seperated)</label>
                <input id="technologies" name="technologies" required />

                <label htmlFor="link">Link (optional)</label>
                <input id="link" name="link" />

                <button type="submit">Save Project</button>
            </form>
        </main>
    );
}