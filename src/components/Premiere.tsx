import { Anime } from "@/types/Anime";
import { getAnime } from "@/utils/api"
import { useEffect, useRef, useState } from "react";

export const Premiere = () => {

    const [animeData, setAnimeData] = useState<Anime[]>([]);
    const videoUrl = "https://uiparadox.co.uk/public/templates/animetube/assets/media/videos/banner_2.mp4";
    const videoTag = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        const getAnimeData = getAnime(48108);
        getAnimeData.then((response) => setAnimeData(response.data));
    }, [])

    return (
        <section className="w-full h-[400px] border-b-8 border-t-8 border-black">
            {animeData.map(anime => (
                <div key={anime.id} className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${anime.attributes.coverImage.original}')` }}>
                    <div className="w-full h-full bg-black/50">
                        <div className="container mx-auto h-full flex">
                            <div className="w-[50%] h-full flex flex-col justify-center items-start">
                                <div>
                                    <p className="font-bold border px-2 py-1 rounded-lg w-20 cursor-pointer">Premiere</p>
                                </div>
                                <div className="flex flex-col w-[500px] text-start mt-4">
                                    <h1 className="font-bold text-4xl mt-2 mb-2 lg:text-6xl">{anime.attributes.titles.en_jp.substring(0,11)}</h1>
                                    <p>{anime.attributes.synopsis}</p>
                                </div>
                                <div className="mt-4">
                                    <button className="flex justify-center items-center bg-primary border border-primary rounded-lg w-32 h-10 py-6 cursor-pointer hover:bg-transparent hover:ease-in-out hover:duration-500">
                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5.464V3.099m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C19 17.4 19 18 18.462 18H5.538C5 18 5 17.4 5 16.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.464ZM6 5 5 4M4 9H3m15-4 1-1m1 5h1M8.54 18a3.48 3.48 0 0 0 6.92 0H8.54Z" />
                                        </svg>
                                        Remind Me
                                    </button>
                                </div>
                            </div>

                            <div className="w-[50%] h-full flex justify-center items-center">
                                <div className="w-full h-[80%] rounded-lg">
                                    <video 
                                        className="object-fill h-full w-full rounded-lg border-black border-2"
                                        ref={videoTag}
                                        src={videoUrl}
                                        autoPlay
                                        loop></video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}