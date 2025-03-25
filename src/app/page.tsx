'use client'

import { BannerHeroVideo } from "@/components/BannerHeroVideo";
import { Header } from "@/components/Header";

const Page = () => {
  return(
    <div className="mx-auto font-roboto w-screen">
      <Header/>
      <BannerHeroVideo/>
    </div>
  )
}

export default Page;