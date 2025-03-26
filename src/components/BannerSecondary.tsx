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
        <section className="w-full h-[400px]">
            {dataCtx?.animeData.map(anime => (
                <div key={anime.id} className="w-full h-full bg-center bg-cover" style={{backgroundImage: `url('${anime.attributes.coverImage.original}')`}}>
                    <div className="flex justify-center items-center w-full h-full bg-black/50">
                        <div className="container mx-auto px-4 w-full h-[350px] flex flex-col justify-end items-start lg:px-0">
                            <div className="flex flex-col w-[280px] text-start lg:w-[500px]">
                                <div className="flex justify-between">
                                    <p className="border rounded-lg px-2 py-1">New Release</p>
                                </div>
                                <h1 className="font-bold text-4xl mt-2 mb-2 lg:text-7xl">{anime.attributes.titles.en_jp}</h1>
                                <p>{anime.attributes.synopsis.substring(0, 300)}.</p>
                            </div>
                            <div className="w-[280px] mb-4 flex mt-4 lg:w-full">
                                <button className="flex justify-center items-center mr-6 bg-primary border border-primary rounded-lg w-32 h-10 py-6 cursor-pointer hover:bg-transparent hover:ease-in-out hover:duration-500">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 18V6l8 6-8 6Z" />
                                    </svg>
                                    Watch Now
                                </button>
                                <button className="flex justify-center items-center bg-transparent border border-primary rounded-lg w-32 h-10 py-6 cursor-pointer hover:bg-primary hover:ease-in-out hover:duration-500">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5.464V3.099m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C19 17.4 19 18 18.462 18H5.538C5 18 5 17.4 5 16.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.464ZM6 5 5 4M4 9H3m15-4 1-1m1 5h1M8.54 18a3.48 3.48 0 0 0 6.92 0H8.54Z" />
                                    </svg>
                                    Remind Me
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}