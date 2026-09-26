'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

interface PaginationProps {
    totalPages: number;
}

export default function Pagination({ totalPages }: PaginationProps) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const currentPage = Number(searchParams.get('page')) || 1;

    function createPageURL(pageNumber: number) {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());

        return `${pathname}?${params.toString()}`;
    }

    return (
        <div className="mt-8 flex items-center justify-center gap-4">
            {currentPage > 1 && (
                <Link
                    href={createPageURL(currentPage - 1)}
                    className="rounded-lg bg-gray-700 px-4 py-2 text-white hover:bg-gray-600"
                >
                    Previous
                </Link>
            )}

            <span className="text-white">
                Page {currentPage} of {totalPages}
            </span>

            {currentPage < totalPages && (
                <Link
                    href={createPageURL(currentPage + 1)}
                    className="rounded-lg bg-gray-700 px-4 py-2 text-white hover:bg-gray-600"
                >
                    Next
                </Link>
            )}
        </div>
    );
}