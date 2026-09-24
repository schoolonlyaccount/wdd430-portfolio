import { NextRequest, NextResponse } from 'next/server';
import { getProjects } from '@/lib/projects-db';

export async function GET(request: NextRequest) {
    const type = request.nextUrl.searchParams.get('type');

    const projects = await getProjects(type);

    return NextResponse.json(projects);
}