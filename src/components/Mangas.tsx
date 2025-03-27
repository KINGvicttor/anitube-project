import { DataContext } from "@/contexts/DataContext";
import { useContext, useState } from "react"

export const Manga = () => {

    const dataCtx = useContext(DataContext);
    const [show, setShow] = useState<string>('none')

    const showMore = () => {
        if (show === 'none') {
            setShow('flex');
        } else {
            setShow('none');
        }
    }

    return (
        <div className="container mx-auto flex flex-col w-full">
            <div className="w-full h-[100px] flex justify-between items-center px-4 sm:px-0 md:px-0 lg:px-0">
                <p className="font-bold text-4xl">Manga</p>
                <a href="" className="font-bold hover:underline">See all {'>'}</a>
            </div>
            <div className="w-full h-[500px] px-4 flex justify-between flex-wrap sm:px-0 md:px-0 lg:px-0 md:justify-center md:gap-4 lg:flex-nowrap lg:h-[280px] lg:items-center">
                {dataCtx?.mangasData.slice(0,5).map(manga => (
                    <div key={manga.id} className="w-[205px] h-[140px] sm:w-[300px] sm:h-[150px] md:w-[300px] lg:h-[250px] lg:w-[300px]">
                        <div className="w-full h-full overflow-hidden rounded-lg">
                            <img className="w-full h-full bg-center rounded-lg cursor-pointer hover:scale-110 hover:duration-1000" src={manga.attributes.posterImage.original} />
                        </div>
                        <div className="w-full h-full relative flex justify-start items-end z-10 mt-[-140px] sm:mt-[-140px] md:mt-[-140px] lg:mt-[-250px] pointer-events-none rounded-lg bg-gradient-to-t from-10% from-black to-transparent">
                            <h1 className="m-4 font-bold">{manga.attributes.titles.en_jp}</h1>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full hidden justify-center items-center lg:flex h-20">
                <button onClick={() => showMore()} className="flex font-bold hover:underline cursor-pointer">See more
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19V5m0 14-4-4m4 4 4-4" />
                    </svg>
                </button>
            </div>
            <div className="w-full h-[500px] px-4 flex justify-between flex-wrap sm:px-0 md:px-0 lg:px-0 md:justify-center md:gap-4 lg:flex-nowrap lg:h-[280px] lg:mb-4 lg:items-center" style={{display: `${show}`}}>
                {dataCtx?.mangasData.slice(10,15).map(manga => (
                    <div key={manga.id} className="w-[205px] h-[140px] sm:w-[300px] sm:h-[150px] md:w-[300px] lg:h-[250px] lg:w-[300px]">
                        <div className="w-full h-full overflow-hidden rounded-lg">
                            <img className="w-full h-full bg-center rounded-lg cursor-pointer hover:scale-110 hover:duration-1000" src={manga.attributes.posterImage.original} />
                        </div>
                        <div className="w-full h-full relative flex justify-start items-end z-10 mt-[-140px] sm:mt-[-140px] md:mt-[-140px] lg:mt-[-250px] pointer-events-none rounded-lg bg-gradient-to-t from-10% from-black to-transparent">
                            <h1 className="m-4 font-bold">{manga.attributes.titles.en_jp}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}