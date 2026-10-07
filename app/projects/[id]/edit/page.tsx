import { updateProject } from '@/lib/actions';
import { sql } from '@vercel/postgres';
import { notFound } from 'next/navigation';

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;

    const { rows } = await sql`
        SELECT *
        FROM projects
        WHERE id = ${id}
    `;

    const project = rows[0];

    if (!project) {
        notFound();
    }

    return (
        <main className="mx-auto max-w-5xl px-4 py-12 text-white sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 text-white">
                <h1 className="mb-4 text-4xl font-bold tracking-tight">Edit Project</h1>
            </div>

            <form action={updateProject.bind(null, Number(id))} className="project-form">
                <label htmlFor="title">Title</label>
                <input id="title" name="title" defaultValue={project.title} required />

                <label htmlFor="description">Description</label>
                <input id="description" name="description" defaultValue={project.description} required />

                <label htmlFor="type">Type</label>
                <select id="type" name="type" defaultValue={project.type} required>
                    <option value="opensource">Open Source</option>
                    <option value="school">School</option>
                </select>

                <label htmlFor="technologies">Technologies (comma-seperated)</label>
                <input id="technologies" name="technologies" defaultValue={project.technologies} required />

                <label htmlFor="link">Link (optional)</label>
                <input id="link" name="link" defaultValue={project.link} />

                <button type="submit">Save Project</button>
            </form>
        </main>
    );
}