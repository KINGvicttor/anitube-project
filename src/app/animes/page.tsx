'use client'

import { AnimeList } from "@/components/AnimeList";
import { Header } from "@/components/Header";
import { DataContextProvider } from "@/contexts/DataContext";

const Page = () => {
    return (
        <DataContextProvider>
            <div className="mx-auto font-roboto">
                <Header />
                <AnimeList />
            </div>
        </DataContextProvider>
    )
}

export default Page;