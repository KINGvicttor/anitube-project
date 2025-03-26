import { DataContext } from "@/contexts/DataContext"
import { useContext } from "react"

export const Recommendation = () => {

    const dataCtx = useContext(DataContext);

    return (
        <div className="container mx-auto flex flex-col w-full">
            <div className="w-full h-[100px] flex justify-between items-center px-4 sm:px-0 md:px-0 lg:px-0">
                <p className="font-bold text-4xl">Top Picks According To your Taste</p>
                <a href="" className="font-bold hover:underline">See all {'>'}</a>
            </div>
            <div className="container h-[500px] w-full flex flex-col flex-wrap justify-between px-4 overflow-hidden sm:px-0 md:px-0 lg:px-0 lg:flex-row lg:flex-nowrap lg:h-[250px] lg:mb-[30px]">
                {dataCtx?.animesData.slice(10, 15).map(anime => (
                    <div key={anime.id} className="flex justify-start mb-6 w-56 h-56 rounded-lg lg:w-60 lg:mb-0 cursor-pointer hover:h-60 hover:ease-in-out hover:duration-500 bg-center bg-cover" style={{backgroundImage: `url('${anime.attributes.posterImage.original}')`}}>
                        <div className="w-full h-full flex justify-start items-end rounded-lg pointer-events-none bg-gradient-to-t from-black to-transparent">
                            <p className="font-bold text-xl m-4">{anime.attributes.titles.en_jp}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}