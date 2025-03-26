export const Trending = () => {
    return (
        <div className="container mx-auto flex flex-col w-full">
            <div className="w-full h-[100px] flex justify-between items-center px-4 sm:px-0 md:px-0 lg:px-0">
                <p className="font-bold text-4xl">Trending Shows</p>
                <a href="" className="font-bold hover:underline">See all {'>'}</a>
            </div>
            <div className="container h-[500px] w-full flex flex-col flex-wrap justify-between items-center px-4 overflow-hidden sm:px-0 md:px-0 lg:px-0 lg:flex-row lg:flex-nowrap lg:h-[250px]">
                <div className="flex justify-start w-56 h-56 rounded-lg lg:w-60 hover:h-60 hover:ease-in-out hover:duration-500 bg-center bg-cover bg-[url('https://media.kitsu.app/anime/poster_images/12/original.png')]">
                    <div className="w-full h-full flex justify-start items-end rounded-lg pointer-events-none bg-gradient-to-t from-black to-transparent">
                        <p className="font-bold text-xl m-4">One Piece</p>
                    </div>
                </div>
            </div>
        </div>
    )
}