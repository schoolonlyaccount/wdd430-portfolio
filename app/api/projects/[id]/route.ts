import { NextResponse } from 'next/server';
import { getProjectById } from '@/lib/projects-db';

export async function GET(
    _request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const projectId = Number(id);

    if (!Number.isInteger(projectId) || projectId <= 0) {
        return NextResponse.json(
            { error: 'Invalid project id' },
            { status: 400 }
        );
    }

    const project = await getProjectById(projectId);

    if (!project) {
        return NextResponse.json(
            { error: 'Project not found' },
            { status: 404 }
        );
    }

    return NextResponse.json(project);
}