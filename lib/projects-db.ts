import { sql } from '@vercel/postgres';

export interface Project {
    id: number;
    title: string;
    description: string;
    type: 'opensource' | 'school';
    technologies: string[];
    link?: string;
}

/*
export const projects: Project[] = [
    {
        id: 1,
        title: 'My First Open Source Contribution',
        description: 'A bug fix contributed to a popular library.',
        type: 'opensource',
        technologies: ['TypeScript', 'React'],
        link: 'https://github.com/example/repo'
    },
    {
        id: 2,
        title: 'Database Design Final Project',
        description: 'An ER diagram and normalized schema for a library system.',
        type: 'school',
        technologies: ['PostgreSQL', 'SQL']
    }
];

export function getProjects(type?: string | null): Project[] {
    if (type) return projects.filter(p => p.type === type);
    return projects;
}

export function getProjectById(id: number): Project | null {
    return projects.find(p => p.id === id) ?? null;
}
*/

export async function getProjects(type?: string | null): Promise<Project[]> {
    if (type) {
        const { rows } = await sql<Project>`SELECT * FROM projects WHERE type = ${type} ORDER BY id`;
        return rows;
    }
    const { rows } = await sql<Project>`SELECT * FROM projects ORDER BY id`;
    return rows;
}

export async function getProjectById(id: number): Promise<Project | null> {
    const { rows } = await sql<Project>`SELECT * FROM projects WHERE id = ${id}`;
    return rows[0] ?? null;
}

const ITEMS_PER_PAGE = 4;

export async function fetchFilteredProjects(query: string, currentPage: number): Promise<Project[]> {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    const search = `%${query}%`;

    const { rows } = await sql<Project>`
        SELECT *
        FROM projects
        WHERE
            title ILIKE ${search}
            OR description ILIKE ${search}
            OR EXISTS (
                SELECT 1
                FROM unnest(technologies) AS technology
                WHERE technology ILIKE ${search}
            )
        ORDER BY id
        LIMIT ${ITEMS_PER_PAGE}
        OFFSET ${offset}
    `;

    return rows;
}

export async function fetchProjectsPages(query: string): Promise<number> {
    const search = `%${query}%`;

    const { rows } = await sql<{ count: number }>`
        SELECT COUNT(*)::int AS count
        FROM projects
        WHERE
            title ILIKE ${search}
            OR description ILIKE ${search}
            OR EXISTS (
                SELECT 1
                FROM unnest(technologies) AS technology
                WHERE technology ILIKE ${search}
            )
    `;

    return Math.ceil(rows[0].count / ITEMS_PER_PAGE);
}