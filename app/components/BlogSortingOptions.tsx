'use client'

import { AdjustmentsHorizontalIcon, AdjustmentsVerticalIcon, BarsArrowDownIcon, BarsArrowUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function BlogSortingOptions() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    let [sortByUpdated, setSortByUpdated] = useState(true);
    let [sortAscending, setSortAscending] = useState(false);

    function toggleSortByUpdated() {
        if (searchParams) {
            const params = new URLSearchParams(Array.from(searchParams.entries()));
            setSortByUpdated(!sortByUpdated);
            params.set("sortByUpdated", sortByUpdated.toString());
            params.set("sortAscending", sortAscending.toString());
            replace(`${pathname}?${params.toString()}`);
        }
    }

    function toggleSortAscending() {
        if (searchParams) {
            const params = new URLSearchParams(Array.from(searchParams.entries()));
            setSortAscending(!sortAscending);
            params.set("sortByUpdated", sortByUpdated.toString());
            params.set("sortAscending", sortAscending.toString());
            replace(`${pathname}?${params.toString()}`);
        }
    }

    return (<div className="ml-auto align-middle items-center justify-center">
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger className="w-7 h-7">
                    {sortByUpdated ? <AdjustmentsHorizontalIcon onClick={toggleSortByUpdated} /> : <AdjustmentsVerticalIcon onClick={toggleSortByUpdated} />}
                </TooltipTrigger>
                <TooltipContent>
                    <p>{sortByUpdated ? "Sort by Published" : "Sort by Updated"}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger className="w-7 h-7">
                    {sortAscending ? <BarsArrowUpIcon onClick={toggleSortAscending} /> : <BarsArrowDownIcon onClick={toggleSortAscending} />}
                </TooltipTrigger>
                <TooltipContent>
                    <p>{sortAscending ? "Sort Descending" : "Sort Ascending"}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    </div>);
}