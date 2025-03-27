import { DataContext } from "@/contexts/DataContext"
import { useContext } from "react"

export const AnimeList = () => {

    const dataCtx = useContext(DataContext);

    return (
        <section className="w-full h-[calc(100vh-100px)] bg-radial from-primary to-secondary from-20% ">
            <div className="container mx-auto w-full h-full">
                <div className="w-full h-[150px] flex justify-center items-center">
                    <input
                        className="border border-r-0 px-3 py-2 w-96 outline-0 rounded-l-lg bg-gray-200 text-black"
                        type="text" />
                    <button className="border border-l-0 px-3 py-2 border-black outline-0 rounded-r-lg cursor-pointer bg-gray-200">
                        <svg className="w-6 h-6 text-primary dark:text-primary " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-wrap w-full gap-1 ">
                    {dataCtx?.animesData.slice(0, 12).map(anime => (
                        <div key={anime.id} className=" w-[250px] h-[250px]">
                            <div className="w-full h-full rounded-lg overflow-hidden">
                                <img className="w-full h-full rounded-lg bg-cover bg-center cursor-pointer hover:scale-110 hover:duration-1000" src={anime.attributes.posterImage.original} />
                            </div>
                            <div className="w-full h-full relative mt-[-250px] rounded-lg bg-gradient-to-t pointer-events-none from-black to-transparent flex items-end">
                                <p className="m-4">{anime.attributes.titles.en_jp}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full h-[150px] flex items-center justify-center mt-6">
                    <div className="flex justify-between w-32 text-xl">
                        <a href="" className="border border-r-0 rounded-l-lg px-2 py-1">{'<'}</a>
                        <a href="" className="border border-l-0 border-r-0 px-2 py-1">1</a>
                        <a href="" className="border border-l-0 border-r-0 px-2 py-1">2</a>
                        <a href="" className="border border-l-0 border-r-0 px-2 py-1">3</a>
                        <a href="" className="border border-l-0 rounded-r-lg px-2 py-1">{'>'}</a>
                    </div>
                </div>
            </div>
        </section>
    )
}