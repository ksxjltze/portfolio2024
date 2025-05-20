'use client';

import { SearchIcon } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import { useDebouncedCallback } from 'use-debounce';

export default function SearchArticle({ placeholder = "Search for articles..." }: { placeholder: string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term : string) => {
        const params = new URLSearchParams();
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        
        replace(`${pathname}?${params.toString()}`, {
            scroll: false
        });
    }, 300);

    return (
        <div className="relative flex flex-1 flex-shrink-0 mb-4">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-muted"
                placeholder={placeholder}
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                defaultValue={searchParams?.get('query')?.toString()}
            />
            <SearchIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-muted peer-focus:emphasis" />
        </div>
    )
}