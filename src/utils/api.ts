import { Anime } from "@/types/Anime";
import { Manga } from "@/types/Manga";
import axios from "axios";

const url = axios.create({
    baseURL: "https://kitsu.io/api/edge"
})

export const getAnimes = async (): Promise<Anime[] | any> => {
    const res = await url.get('/anime?page[limit]=20');
    return res.data;
}

export const getAnime = async (id: number): Promise<Anime | any> => {
    const res = await url.get(`/anime?filter[id]=${id}`);
    return res.data;
}

export const getMangas = async (): Promise<Manga[] | any> => {
    const res = await url.get('/manga?page[limit]=20');
    return res.data;
}

export const getManga = async (id: number): Promise<Manga | any> => {
    const res = await url.get(`/manga?filter[id]=${id}`);
    return res.data;
}