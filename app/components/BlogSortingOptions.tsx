'use client'

import { AdjustmentsHorizontalIcon, AdjustmentsVerticalIcon, BarsArrowDownIcon, BarsArrowUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
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
    let [sortOldestFirst, setsortOldestFirst] = useState(false);

    useEffect(() => {
        if (searchParams?.size == 0) {
            const params = new URLSearchParams(Array.from(searchParams.entries()));
            params.set("sortByUpdated", sortByUpdated.toString());
            params.set("sortOldestFirst", sortOldestFirst.toString());
            replace(`${pathname}?${params.toString()}`);
        }
    }, [searchParams]);

    function toggleSortByUpdated() {
        if (searchParams) {
            const params = new URLSearchParams(Array.from(searchParams.entries()));
            sortByUpdated = !(searchParams.get("sortByUpdated")?.toLowerCase() === 'true');
            setSortByUpdated(sortByUpdated);
            params.set("sortByUpdated", sortByUpdated.toString());
            replace(`${pathname}?${params.toString()}`);
        }
    }

    function togglesortOldestFirst() {
        if (searchParams) {
            const params = new URLSearchParams(Array.from(searchParams.entries()));
            sortOldestFirst = !(searchParams.get("sortOldestFirst")?.toLowerCase() === 'true');
            setsortOldestFirst(sortOldestFirst);
            params.set("sortOldestFirst", sortOldestFirst.toString());
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
                    {sortOldestFirst ? <BarsArrowDownIcon onClick={togglesortOldestFirst} /> : <BarsArrowUpIcon onClick={togglesortOldestFirst} />}
                </TooltipTrigger>
                <TooltipContent>
                    <p>{sortOldestFirst ? "Show Newest First" : "Show Oldest First"}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    </div>);
}