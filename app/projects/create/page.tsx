'use client';

import { createProject, type State } from '@/lib/actions';
import { useActionState } from 'react';

const initialActionState: State = { message: null, errors: {} };

export default function Page() {
    const [state, formAction, isPending] = useActionState(createProject, initialActionState);

    return (
        <main className="mx-auto max-w-5xl px-4 py-12 text-white sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 text-white">
                <h1 className="mb-4 text-4xl font-bold tracking-tight">Create Project</h1>
            </div>

            <form action={formAction} className="project-form">
                <label htmlFor="title">Title</label>
                <input id="title" name="title" type="text" aria-describedby="title-error" required />
                <div id="title-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.title?.map((error) => (
                        <p key={error} className="mt-1 text-sm text-red-600">
                            {error}
                        </p>
                    ))}
                </div>

                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" rows={4} aria-describedby="description-error" required />
                <div id="description-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.description?.map((error) => (
                        <p key={error} className="mt-1 text-sm text-red-600">
                            {error}
                        </p>
                    ))}
                </div>

                <label htmlFor="type">Type</label>
                <select id="type" name="type" aria-describedby="type-error" required>
                    <option value="opensource">Open Source</option>
                    <option value="school">School</option>
                </select>
                <div id="type-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.type?.map((error) => (
                        <p key={error} className="mt-1 text-sm text-red-600">
                            {error}
                        </p>
                    ))}
                </div>

                <label htmlFor="technologies">Technologies (comma-seperated)</label>
                <input id="technologies" name="technologies" type="text" aria-describedby="technologies-error" required />
                <div id="technologies-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.technologies?.map((error) => (
                        <p key={error} className="mt-1 text-sm text-red-600">
                            {error}
                        </p>
                    ))}
                </div>

                <label htmlFor="yearCompleted">Year Completed</label>
                <input id="yearCompleted" name="yearCompleted" type="number" min="2000" max="2099" aria-describedby="yearCompleted-error" required />
                <div id="yearCompleted-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.yearCompleted?.map((error) => (
                        <p key={error} className="mt-1 text-sm text-red-600">
                            {error}
                        </p>
                    ))}
                </div>

                <label htmlFor="link">Link (optional)</label>
                <input id="link" name="link" type="url" aria-describedby="link-error" />
                <div id="link-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.link?.map((error) => (
                        <p key={error} className="mt-1 text-sm text-red-600">
                            {error}
                        </p>
                    ))}
                </div>

                {state.message ? <p className="text-sm text-red-600">{state.message}</p> : null}

                <button type="submit" disabled={isPending} className="disabled:cursor-not-allowed disabled:opacity-60">{isPending ? 'Saving...' : 'Save Project'}</button>
            </form>
        </main>
    );
}