export const Header = () => {
    return (
        <header className="flex mx-auto w-full h-[100px] justify-between bg-black">
            <div className="grid grid-cols-3 grid-rows-2 w-full">
                <div className="col-start-1 col-end-3 row-start-1 row-end-3">
                    <div className="w-full h-full flex justify-start items-center">
                        <div className="w-16 h-16 bg-cover bg-center rounded-full ml-4 bg-[url(https://img.freepik.com/free-vector/japanese-samurai-warrior-vector-illustration_43623-953.jpg?t=st=1740492767~exp=1740496367~hmac=965155fba69bff1767057d0a18c410651e56973074247ced079f6b125d7d35cc&w=2000)]"></div>
                        <h1 className="ml-4 uppercase text-white font-bold text-2xl">anime</h1>
                        <h1 className="uppercase text-primary font-bold text-2xl">tube</h1>
                    </div>
                </div>
                <div className="hidden col-start-2 col-end-3 row-start-1 row-end-3 lg:flex">
                    <nav className="flex justify-center items-center w-full h-full">
                        <ul className="flex justify-between w-full uppercase">
                            <a href="" className="border-b-4 border-transparent font-semibold hover:border-b-4 hover:border-primary hover:text-white hover:font-bold">home</a>
                            <a href="" className="border-b-4 border-transparent font-semibold hover:border-b-4 hover:border-primary hover:text-white hover:font-bold">animes</a>
                            <a href="" className="border-b-4 border-transparent font-semibold hover:border-b-4 hover:border-primary hover:text-white hover:font-bold">mangas</a>
                            <a href="" className="border-b-4 border-transparent font-semibold hover:border-b-4 hover:border-primary hover:text-white hover:font-bold">blog</a>
                            <a href="" className="border-b-4 border-transparent font-semibold hover:border-b-4 hover:border-primary hover:text-white hover:font-bold">pages</a>
                        </ul>
                    </nav>
                </div>
                <div className="col-start-3 col-end-4 row-start-1 row-end-3">
                    <div className="w-full h-full flex justify-end items-center">
                        <button className="mr-4 lg:hidden">
                            <svg className="w-10 h-10 text-primary dark:text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
                            </svg>
                        </button>
                        <svg className="hidden w-8 h-8 text-primary dark:text-primary m-2 cursor-pointer lg:inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                        </svg>
                        <svg className="hidden w-8 h-8 text-primary dark:text-primary m-2 cursor-pointer lg:inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z" />
                        </svg>

                        <div className="hidden w-12 h-12 m-2 cursor-pointer border-2 border-primary rounded-full lg:inline bg-center bg-cover bg-[url(https://img.freepik.com/free-vector/cute-ninja-with-shuriken-sword-cartoon-vector-icon-illustration-people-holiday-isolated-flat_138676-9389.jpg?t=st=1740493952~exp=1740497552~hmac=47275e3b533249c0c7e6e8d979c917e13ec696615732293236081011d9cfc4a4&w=2000)]"></div>
                    </div>
                </div>
            </div>
        </header>
    )
}