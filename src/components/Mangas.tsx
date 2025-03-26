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
            <div className="container h-[500px] w-full flex flex-col flex-wrap justify-between items-center px-4 overflow-hidden sm:px-0 md:px-0 lg:px-0 lg:flex-row lg:flex-nowrap lg:h-[250px] lg:mb-[30px]">
                {dataCtx?.mangasData.slice(15,20).map(manga => (
                    <div key={manga.id} className="flex justify-start w-56 h-56 rounded-lg lg:w-60 cursor-pointer hover:h-60 hover:ease-in-out hover:duration-500 bg-center bg-cover" style={{ backgroundImage: `url('${manga.attributes.posterImage.original}')` }}>
                        <div className="w-full h-full flex justify-start items-end rounded-lg pointer-events-none bg-gradient-to-t from-black to-transparent">
                            <p className="font-bold text-xl m-4">{manga.attributes.titles.en_jp}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full hidden justify-center items-center pb-4 lg:flex">
                <button onClick={() => showMore()} className="flex font-bold hover:underline cursor-pointer">See more
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19V5m0 14-4-4m4 4 4-4" />
                    </svg>
                </button>
            </div>
            <div className="container h-[500px] mt-8 w-full flex flex-col flex-wrap justify-between items-center px-4 overflow-hidden sm:px-0 md:px-0 lg:px-0 lg:flex-row lg:flex-nowrap lg:h-[250px] lg:mb-[30px]" style={{ display: `${show}` }}>
                {dataCtx?.mangasData.slice(5, 10).map(manga => (
                    <div key={manga.id} className="flex justify-start w-56 h-56 rounded-lg lg:w-60 cursor-pointer hover:h-60 hover:ease-in-out hover:duration-500 bg-center bg-cover" style={{backgroundImage: `url('${manga.attributes.posterImage.original}')`}}>
                        <div className="w-full h-full flex justify-start items-end rounded-lg pointer-events-none bg-gradient-to-t from-black to-transparent">
                            <p className="font-bold text-xl m-4">{manga.attributes.titles.en_jp}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}