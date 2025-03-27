import { DataContext } from "@/contexts/DataContext";
import { Anime } from "@/types/Anime";
import { getAnime } from "@/utils/api";
import { useContext, useEffect, useState } from "react";

export const Blog = () => {

    const dataCtx = useContext(DataContext);

    return (
        <section className="w-full h-[600px] bg-radial from-20% from-primary to-secondary">
            <div className="container mx-auto w-full h-full">
                <div className="w-full h-[100px] flex justify-between items-center px-4 sm:px-0 md:px-0 lg:px-0">
                    <p className="font-bold text-4xl">Blog</p>
                    <a href="" className="font-bold hover:underline">See all {'>'}</a>
                </div>
                <div className="w-full h-[500px] px-4 flex justify-between flex-wrap sm:px-0 md:px-0 lg:px-0 md:justify-center md:gap-4 lg:flex-nowrap lg:h-[500px] lg:items-center">
                    {dataCtx?.mangasData.slice(0,3).map(manga => (
                            <div key={manga.id} className="w-[205px] h-[140px] sm:w-[300px] sm:h-[150px] md:w-[300px] lg:h-[400px] lg:w-[500px]">
                                <div className="w-full h-full overflow-hidden rounded-lg">
                                    <img className="w-full h-full bg-center rounded-lg cursor-pointer hover:scale-110 hover:duration-1000" src={manga.attributes.posterImage.original} />
                                </div>
                                <div className="w-full h-full relative flex flex-col justify-end items-start z-10 mt-[-140px] sm:mt-[-140px] md:mt-[-140px] lg:mt-[-400px] pointer-events-none rounded-lg bg-gradient-to-t from-10% from-black to-transparent">
                                    <h1 className="m-4 font-bold">{manga.attributes.titles.en_jp}</h1>
                                    <div className="flex justify-between w-full">
                                        <p className="ml-4 mb-4">2 min read</p>
                                        <p className="mr-4 mb-4">1 day ago</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
}