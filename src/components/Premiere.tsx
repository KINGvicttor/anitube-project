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
        <section className="w-full h-[1100px] flex border-b-8 border-t-8 border-black lg:h-[400]">
            {animeData.map(anime => (
                <div key={anime.id} className="w-full h-full flex bg-cover bg-center" style={{ backgroundImage: `url('${anime.attributes.coverImage.original}')` }}>
                    <div className="bg-black/60 w-full h-full">
                        <div className="container mx-auto px-4 flex flex-col justify-center items-center w-full h-full lg:flex-row lg:justify-items-normal lg:px-0">
                            <div className="w-full h-[40%] flex flex-col lg:w-[50%] lg:h-[70%]">
                                <p className="rounded-lg border px-2 py-1 w-28 cursor-pointer">New Release</p>
                                <h1 className="mt-4 text-6xl">{anime.attributes.titles.en_jp}</h1>
                                <p className="mt-4">{anime.attributes.synopsis.substring(0, 300)}</p>
                                <div className="w-72 flex justify-between mt-4">
                                    <button className="px-3 py-2 flex border border-primary bg-primary justify-center items-center rounded-lg cursor-pointer hover:bg-transparent hover:ease-in-out hover:duration-500">
                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 18V6l8 6-8 6Z" />
                                        </svg>
                                        <p>Watch Now</p>
                                    </button>
                                    <button className="px-3 py-2 flex border border-primary bg-transparent text-white justify-center items-center rounded-lg cursor-pointer hover:bg-primary hover:ease-in-out hover:duration-500">
                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5.464V3.099m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C19 17.4 19 18 18.462 18H5.538C5 18 5 17.4 5 16.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.464ZM6 5 5 4M4 9H3m15-4 1-1m1 5h1M8.54 18a3.48 3.48 0 0 0 6.92 0H8.54Z" />
                                        </svg>
                                        <p>Remind Me</p>
                                    </button>
                                </div>
                            </div>
                            <div className="w-full h-[50%] flex justify-center items-center lg:w-[50%] lg:h-full">
                                <div className="w-full h-[80%] rounded-lg">
                                    <video
                                        className="object-fill h-full w-full rounded-lg border-black border-2"
                                        ref={videoTag}
                                        src={videoUrl}
                                        autoPlay
                                        controls
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