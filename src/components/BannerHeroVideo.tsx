import { useRef, useState } from "react"

export const BannerHeroVideo = () => {

    const [mute, setMute] = useState<boolean>(true);
    const videoUrl = "https://uiparadox.co.uk/public/templates/animetube/assets/media/videos/hero_banner.mp4";
    const videoTag = useRef<HTMLVideoElement>(null);

    return (
        <section className="w-full h-[calc(100vh-100px)]">
            <video
                className="w-full h-[calc(100vh-100px)] object-cover"
                src={videoUrl}
                ref={videoTag}
                autoPlay
                loop
                muted={mute}>
            </video>
            <div className="flex flex-col justify-end w-full h-[calc(100vh-100px)] relative mt-[calc(-100vh+100px)] bg-black/50 ">
                <div className="flex flex-col w-full container mx-auto lg:px-10 px-6"> 
                    <div>
                        {!mute &&
                            <button onClick={() => setMute(!mute)}>
                                <svg className="w-8 h-8 mb-2 border border-white rounded-full text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.5 8.43A4.985 4.985 0 0 1 17 12a4.984 4.984 0 0 1-1.43 3.5m2.794 2.864A8.972 8.972 0 0 0 21 12a8.972 8.972 0 0 0-2.636-6.364M12 6.135v11.73a1 1 0 0 1-1.64.768L6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l4.36-3.633a1 1 0 0 1 1.64.768Z" />
                                </svg>
                            </button>
                        }
                        {mute &&
                            <button onClick={() => setMute(!mute)}>
                                <svg className="w-8 h-8 mb-2 border border-white rounded-full text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.5 8.43A4.985 4.985 0 0 1 17 12c0 1.126-.5 2.5-1.5 3.5m2.864-9.864A8.972 8.972 0 0 1 21 12c0 2.023-.5 4.5-2.5 6M7.8 7.5l2.56-2.133a1 1 0 0 1 1.64.768V12m0 4.5v1.365a1 1 0 0 1-1.64.768L6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m1-4 14 14" />
                                </svg>
                            </button>
                        }
                    </div>
                    <div className="flex flex-col w-[280px] text-start lg:w-[500px]">
                        <p className="lg:text-2xl">New Release</p>
                        <h1 className="font-bold text-4xl mt-2 mb-2 lg:text-red-500 md:text-green-500 sm:text-blue-500 lg:text-7xl">Mystic Eyes</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at molestie dui, at sodales dui. Curabitur at purus justo. Mauris et nulla nec leo lacinia lobortis. .</p>
                    </div>
                    <div className="w-[280px] flex mb-20 mt-4 lg:w-full">
                        <button className="flex justify-center items-center mr-6 bg-primary border border-primary rounded-lg w-32 h-10 py-6 cursor-pointer hover:bg-transparent hover:ease-in-out hover:duration-500">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 18V6l8 6-8 6Z" />
                            </svg>
                            Watch Now
                        </button>
                        <button className="flex justify-center items-center bg-transparent border border-primary rounded-lg w-32 h-10 py-6 cursor-pointer hover:bg-primary hover:ease-in-out hover:duration-500">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            More Info
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}