'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const currentYear = new Date().getFullYear();

const ProjectFormSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    description: z.string().min(1, 'Description is required'),
    type: z.enum(['opensource', 'school']),
    technologies: z.string().min(1, 'At least one technology is required'),
    yearCompleted: z.coerce
        .number()
        .int('Year must be a whole number.')
        .gte(2000, 'Year must be 2000 or later.')
        .lte(currentYear, `Year cannot be greater than ${currentYear}.`),
    link: z.preprocess(
        (value) => value === '' ? undefined : value,
        z.string().url().optional()
    )
});

export type State = {
    errors?: {
        title?: string[];
        description?: string[];
        technologies?: string[];
        type?: string[];
        yearCompleted?: string[];
        link?: string[];
    };
    message?: string | null;
};


export async function createProject(prevState: State, formData: FormData): Promise<State> {
    const validateFields = ProjectFormSchema.safeParse({
        title: formData.get('title'),
        description: formData.get('description'),
        type: formData.get('type'),
        technologies: formData.get('technologies'),
        yearCompleted: formData.get('yearCompleted'),
        link: formData.get('link')
    });

    if (!validateFields.success) {
        return {
            errors: validateFields.error.flatten().fieldErrors,
            message: 'Missing or invalid fields. Failed to create project.'
        };
    }

    const { title, description, type, technologies: technologiesInput, yearCompleted, link } = validateFields.data;

    const technologies = technologiesInput
        .split(',')
        .map((tech) => tech.trim())
        .filter(Boolean);

    try {
        await sql.query(`
            INSERT INTO projects (title, description, type, technologies, yearCompleted, link)
            VALUES ($1, $2, $3, $4, $5, $6)
        `, [title, description, type, technologies, yearCompleted, link]
        );
    } catch (error) {
        return {
            message: 'Database Error: Failed to create project.'
        };
    }

    revalidatePath('/projects');
    redirect('/projects');
}

export async function updateProject(id: number, formData: FormData) {
    const raw = {
        title: formData.get('title'),
        description: formData.get('description'),
        type: formData.get('type'),
        technologies: formData.get('technologies'),
        yearCompleted: formData.get('yearCompleted'),
        link: formData.get('link')
    };

    const parsed = ProjectFormSchema.safeParse(raw);
    if (!parsed.success) {
        throw new Error('Invalid project input.');
    }

    const { title, description, type, technologies: technologiesInput, yearCompleted, link } = parsed.data;

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
            yearCompleted = $5,
            link = $6
        WHERE id = $7
    `,
        [title, description, type, technologies, yearCompleted, link, id]
    );


    revalidatePath('/projects');
    redirect('/projects');
}

export async function deleteProject(id: number) {
    try {
        await sql`DELETE FROM projects WHERE id = ${id}`;
        revalidatePath('/projects');
    } catch (error) {
        console.error('Failed to delete project:', error);
        throw new Error('Failed to delete project. Please try again later.');
    }
    revalidatePath('/projects');
    redirect('/projects');
}