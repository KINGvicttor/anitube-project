'use client'

import { Header } from "@/components/Header";
import { MangaList } from "@/components/MangaList";
import { DataContextProvider } from "@/contexts/DataContext";

const Page = () => {
    return (
        <DataContextProvider>
            <div className="mx-auto font-roboto">
                <Header />
                <MangaList />
            </div>
        </DataContextProvider>
    )
}

export default Page;