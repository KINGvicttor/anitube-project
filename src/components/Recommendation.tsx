import { DataContext } from "@/contexts/DataContext"
import { useContext } from "react"

export const Recommendation = () => {

    const dataCtx = useContext(DataContext);

    return (
        <div className="container mx-auto flex flex-col w-full">
            <div className="w-full h-[100px] flex justify-between items-center px-4 sm:px-0 md:px-0 lg:px-0">
                <p className="font-bold text-4xl">Recommendations</p>
                <a href="" className="font-bold hover:underline">See all {'>'}</a>
            </div>
            <div className="w-full h-[500px] px-4 flex justify-between flex-wrap sm:px-0 md:px-0 lg:px-0 md:justify-center md:gap-4 lg:flex-nowrap lg:h-[280px] lg:items-center">
                {dataCtx?.animesData.slice(10, 15).map(anime => (
                    <div className="w-[205px] h-[140px] sm:w-[300px] sm:h-[150px] md:w-[300px] lg:h-[250px] lg:w-[300px]">
                        <div className="w-full h-full overflow-hidden rounded-lg">
                            <img className="w-full h-full bg-center rounded-lg cursor-pointer hover:scale-110 hover:duration-1000" src={anime.attributes.posterImage.medium} />
                        </div>
                        <div className="w-full h-full relative flex justify-start items-end z-10 mt-[-250px] pointer-events-none rounded-lg bg-gradient-to-t from-10% from-black to-transparent">
                            <h1 className="m-4 font-bold">{anime.attributes.titles.en_jp}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}