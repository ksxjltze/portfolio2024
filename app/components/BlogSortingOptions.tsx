'use client'

import { AdjustmentsHorizontalIcon, AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function BlogSortingOptions() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    let [sortByUpdated, setSortByUpdated] = useState(true);

    function toggleSortByUpdated() {
        if (searchParams) {
            const params = new URLSearchParams(Array.from(searchParams.entries()));
            setSortByUpdated(!sortByUpdated);
            params.set("sortByUpdated", sortByUpdated.toString());
            replace(`${pathname}?${params.toString()}`);
        }
    }

    return (<div className="ml-auto w-7 h-7 align-middle items-center justify-center">
        {sortByUpdated ? <AdjustmentsHorizontalIcon onClick={toggleSortByUpdated} /> : <AdjustmentsVerticalIcon onClick={toggleSortByUpdated} />}
    </div>);
}