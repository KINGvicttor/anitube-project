import { Anime } from "@/types/Anime";
import { Manga } from "@/types/Manga";
import { getAnime, getAnimes, getManga, getMangas, getTrendingAnimes } from "@/utils/api";
import { createContext, ReactNode, useEffect, useState } from "react";

type DataContextType = {
    animesData: Anime[];
    animeData: Anime[];
    trendingAnimesData: Anime[];
    mangasData: Manga[];
    mangaData: Manga[];
}

type Props = {
    children: ReactNode
}

export const DataContext = createContext<DataContextType | null>(null);
export const DataContextProvider = ({children}: Props) => {

    const [animesData, setAnimesData] = useState<Anime[]>([]);
    const [animeData, setAnimeData] = useState<Anime[]>([]);
    const [trendingAnimesData, setTrendingAnimesData] = useState<Anime[]>([]);
    const [mangasData, setMangasData] = useState<Manga[]>([]);
    const [mangaData, setMangaData] = useState<Manga[]>([]);

    useEffect(() => {
        const getAnimesData = getAnimes();
        getAnimesData.then((response) => setAnimesData(response.data));
        const getAnimeData = getAnime(12);
        getAnimeData.then((response) => setAnimeData(response.data));
        const getTrendingAnimesData = getTrendingAnimes();
        getTrendingAnimesData.then((response) => setTrendingAnimesData(response.data))

        const getMangasData = getMangas();
        getMangasData.then((response) => setMangasData(response.data));
        const getMangaData = getManga(11);
        getMangaData.then((response) => setMangaData(response.data));
    }, [])


    return(
        <DataContext.Provider value={{animesData, animeData, trendingAnimesData, mangasData, mangaData}}>
            {children}
        </DataContext.Provider>
    )
}