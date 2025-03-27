export const Footer = () => {
    return (
        <section className="w-full h-[500px] bg-black">
            <div className="container mx-auto w-full h-full flex">
                <div className="w-[50%] h-full">
                    <div className="w-full h-[50%] flex flex-col justify-center pr-4">
                        <p className="text-primary text-2xl">Start Your Entertainment Journey</p>
                        <h1 className="text-4xl font-bold mt-4">Start Your Entertainment Journey</h1>
                        <div className="flex justify-between border-b border-white w-full mt-4">
                            <input
                                className="mb-2 border-none outline-0"
                                placeholder="Your Email:"
                                type="text" />
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16v-5.5A3.5 3.5 0 0 0 7.5 7m3.5 9H4v-5.5A3.5 3.5 0 0 1 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1" />
                            </svg>
                        </div>
                    </div>
                    <div className="w-full h-[50%] flex flex-col justify-center">
                        <div className="flex items-center">
                            <div className="w-20 h-20 bg-cover bg-center rounded-full ml-4 bg-[url(https://img.freepik.com/free-vector/japanese-samurai-warrior-vector-illustration_43623-953.jpg?t=st=1740492767~exp=1740496367~hmac=965155fba69bff1767057d0a18c410651e56973074247ced079f6b125d7d35cc&w=2000)]"></div>
                            <h1 className="ml-4 uppercase text-white font-bold text-3xl">anime</h1>
                            <h1 className="uppercase text-primary font-bold text-3xl">tube</h1>
                        </div>
                        <div className="flex items-center text-start w-72">
                            <p>Lorem ipsum dolor sit amet consectetur. Magna at in nunc viverra. Felis nascetur nulla at viverra egestas.</p>
                        </div>
                    </div>
                </div>
                <div className="w-[50%] h-full">
                    <div className="w-full h-[50%]">
                        <img
                            className="w-full h-full"
                            src="https://uiparadox.co.uk/public/templates/animetube/assets/media/footer/pngwing.com1.png" />
                    </div>
                    <div className="w-full h-[50%] flex justify-center">
                        <ul className="w-[33%] text-gray-400 mt-8">
                            <li className="cursor-pointer first-letter:uppercase hover:text-primary hover:duration-1000">home</li>
                            <li className="cursor-pointer first-letter:uppercase hover:text-primary hover:duration-1000 mt-2">animes</li>
                            <li className="cursor-pointer first-letter:uppercase hover:text-primary hover:duration-1000 mt-2">movies</li>
                            <li className="cursor-pointer first-letter:uppercase hover:text-primary hover:duration-1000 mt-2">blog</li>
                        </ul>
                        <ul className="w-[33%] text-gray-400 mt-8">
                            <li className="cursor-pointer first-letter:uppercase hover:text-primary hover:duration-1000">terms and conditions</li>
                            <li className="cursor-pointer first-letter:uppercase hover:text-primary hover:duration-1000 mt-2">privacy policy</li>
                            <li className="cursor-pointer first-letter:uppercase hover:text-primary hover:duration-1000 mt-2">cookie policy</li>
                        </ul>
                        <ul className="w-[33%] text-gray-400 mt-8">
                            <li className="cursor-pointer first-letter:uppercase hover:text-primary hover:duration-1000">have a chat!</li>
                            <li className="cursor-pointer first-letter:uppercase hover:text-primary hover:duration-1000 mt-2">abc@abc.com</li>
                            <li className="cursor-pointer first-letter:uppercase hover:text-primary hover:duration-1000 mt-2">follow us</li>
                            <li className="cursor-pointer first-letter:uppercase hover:text-primary hover:duration-1000 mt-2">
                                <ul className="flex justify-center w-30">
                                    <li>
                                        <svg className="w-6 h-6 text-white dark:text-white m-1 hover:text-primary hover:duration-1000" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg className="w-6 h-6 text-white dark:text-white m-1 hover:text-primary hover:duration-1000" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg className="w-6 h-6 text-white dark:text-white m-1 hover:text-primary hover:duration-1000" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg className="w-6 h-6 text-white dark:text-white m-1 hover:text-primary hover:duration-1000" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                                        </svg>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}