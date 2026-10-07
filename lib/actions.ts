'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const ProjectFormSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    description: z.string().min(1, 'Description is required'),
    type: z.enum(['opensource', 'school']),
    technologies: z.string().min(1, 'At least one technology is required'),
    link: z.preprocess(
        (value) => value === '' ? undefined : value,
        z.string().url().optional()
    ),
});

export async function createProject(formData: FormData) {
    const raw = {
        title: formData.get('title'),
        description: formData.get('description'),
        type: formData.get('type'),
        technologies: formData.get('technologies'),
        link: formData.get('link')
    };

    const parsed = ProjectFormSchema.safeParse(raw);
    if (!parsed.success) {
        throw new Error('Invalid project input.');
    }

    const { title, description, type, technologies: technologiesInput, link } = parsed.data;

    const technologies = technologiesInput
        .split(',')
        .map((tech) => tech.trim())
        .filter(Boolean);

    await sql.query(
        `
        INSERT INTO projects (title, description, type, technologies, link)
        VALUES ($1, $2, $3, $4, $5)
    `,
        [title, description, type, technologies, link]
    );

    revalidatePath('/projects');
    redirect('/projects');
}

export async function updateProject(id: string, formData: FormData) {
    const raw = {
        title: formData.get('title'),
        description: formData.get('description'),
        type: formData.get('type'),
        technologies: formData.get('technologies'),
        link: formData.get('link')
    };

    const parsed = ProjectFormSchema.safeParse(raw);
    if (!parsed.success) {
        throw new Error('Invalid project input.');
    }

    const { title, description, type, technologies: technologiesInput, link } = parsed.data;

    const technologies = technologiesInput
        .split(',')
        .map((tech) => tech.trim())
        .filter(Boolean);

    await sql.query(
        `
        UPDATE projects
        SET title = $1,
            description = $2,
            type = $3,
            technologies = $4,
            link = $5
        WHERE id = $6
    `,
        [title, description, type, technologies, link, id]
    );


    revalidatePath('/projects');
    redirect('/projects');
}

export async function deleteProject(id: string) {
    await sql`DELETE FROM projects WHERE id = ${id}`;
    revalidatePath('/projects');
}