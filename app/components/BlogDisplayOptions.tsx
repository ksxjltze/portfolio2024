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

import {SearchIcon, ViewIcon} from "lucide-react";
import { BlogDisplayMode } from "../blog/types";

export default function BlogDisplayOptions() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    let [sortByUpdated, setSortByUpdated] = useState(true);
    let [sortOldestFirst, setSortOldestFirst] = useState(false);
    let [displayMode, setDisplayMode] = useState(BlogDisplayMode.List);
    let [filter, setFilter] = useState<string[]>([]);
    let [doSort, setDoSort] = useState(false);

    useEffect(() => {
        if (!doSort)
            return;

        if (searchParams?.size == 0) {
            const params = new URLSearchParams(Array.from(searchParams.entries()));
            params.set("sortByUpdated", sortByUpdated.toString());
            params.set("sortOldestFirst", sortOldestFirst.toString());
            params.set("mode", displayMode.toString().toLowerCase());
            params.set("filter", filter.join(","));
            replace(`${pathname}?${params.toString()}`);
        }
    }, [searchParams]);

    function toggleDisplayMode() {
        if (searchParams) {
            const params = new URLSearchParams(Array.from(searchParams.entries())); 
            let mode: BlogDisplayMode = Number.parseInt(searchParams.get("mode") ?? "2");

            mode = (mode + 1) % 3;
            
            displayMode = mode;
            setDisplayMode(mode);

            params.set("mode", displayMode.toString().toLowerCase());
            replace(`${pathname}?${params.toString()}`);
        }
    }

    function toggleSortByUpdated() {
        setDoSort(true);

        if (searchParams) {
            const params = new URLSearchParams(Array.from(searchParams.entries()));
            sortByUpdated = !(searchParams.get("sortByUpdated")?.toLowerCase() === 'true');
            setSortByUpdated(sortByUpdated);
            params.set("sortByUpdated", sortByUpdated.toString());
            replace(`${pathname}?${params.toString()}`);
        }
    }

    function togglesortOldestFirst() {
        setDoSort(true);
        
        if (searchParams) {
            const params = new URLSearchParams(Array.from(searchParams.entries()));
            sortOldestFirst = !(searchParams.get("sortOldestFirst")?.toLowerCase() === 'true');
            setSortOldestFirst(sortOldestFirst);
            params.set("sortOldestFirst", sortOldestFirst.toString());
            replace(`${pathname}?${params.toString()}`);
        }
    }

    function openSearchPopup() {
        
    }

    return (<div className="ml-auto align-middle items-center justify-center">
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger className="w-7 h-7">
                    {<ViewIcon onClick={toggleDisplayMode} />}
                </TooltipTrigger>
                <TooltipContent>
                    <p>{"Change Display Mode"}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
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
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger className="w-7 h-7">
                    <SearchIcon onClick={openSearchPopup}></SearchIcon>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Search</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    </div>);
}