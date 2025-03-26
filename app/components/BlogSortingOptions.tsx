'use client'
import { AdjustmentsHorizontalIcon, AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function BlogSortingOptions() {
    let [sortByUpdated, setSortByUpdated] = useState(false);

    const router = useRouter()

    const toggleSortByUpdated = () => {
        setSortByUpdated(!sortByUpdated);
        router.push('?sortByUpdated=' + sortByUpdated);
    };

    return (<div className="ml-auto w-7 h-7 align-middle items-center justify-center">
        {sortByUpdated ? <AdjustmentsHorizontalIcon onClick={toggleSortByUpdated} /> : <AdjustmentsVerticalIcon onClick={toggleSortByUpdated} />}
    </div>);
}