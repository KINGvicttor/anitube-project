import { DataContext } from "@/contexts/DataContext"
import { Anime } from "@/types/Anime";
import { useContext, useEffect, useState } from "react"

export const BannerSecondary = () => {

    const dataCtx = useContext(DataContext);
    const [data, setData] = useState<Anime[] | any>([]);

    useEffect(() => {
        setData(dataCtx?.animeData)
    })

    return (
        <section className="w-full h-[400px] flex border-b-8 border-t-8 border-black">
            {dataCtx?.animeData.map(anime => (
                <div key={anime.id} className="w-full h-full flex bg-cover bg-center" style={{ backgroundImage: `url('${anime.attributes.coverImage.original}')` }}>
                    <div className="bg-black/60 w-full h-full">
                        <div className="container mx-auto flex items-center w-full h-full">
                            <div className="w-[50%] h-[70%] flex flex-col">
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
                                    <button className="px-3 py-2 flex border border-primary bg-transparent justify-center items-center rounded-lg cursor-pointer hover:bg-primary hover:ease-in-out hover:duration-500">
                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5.464V3.099m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C19 17.4 19 18 18.462 18H5.538C5 18 5 17.4 5 16.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.464ZM6 5 5 4M4 9H3m15-4 1-1m1 5h1M8.54 18a3.48 3.48 0 0 0 6.92 0H8.54Z" />
                                        </svg>
                                        <p>Remind Me</p>
                                    </button>
                                </div>
                            </div>
                            <div className="w-[50%] h-full"></div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}