'use client'

import { Trending } from "@/components/Trending";
import { BannerHeroVideo } from "@/components/BannerHeroVideo";
import { Header } from "@/components/Header";
import { Release } from "@/components/Release";
import { Recommendation } from "@/components/Recommendation";
import { BannerSecondary } from "@/components/BannerSecondary";

const Page = () => {
  return (
    <div className="mx-auto font-roboto">
      <Header />
      <BannerHeroVideo />
      <section className="flex flex-col w-full bg-radial from-20% from-primary to-secondary">
        <Trending />
        <Release />
        <Recommendation />
      </section>
      <BannerSecondary />
    </div>
  )
}

export default Page;