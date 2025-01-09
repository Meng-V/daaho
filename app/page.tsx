"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { CAROUSEL } from "@/constant/StaticInfo";
import About from "@/components/About";
import Link from "next/link";
import History from "@/components/History";
import RedButton from "@/components/UI/RedButton";
import Image from "next/image";

import H1Documenting from "@/components/UI/H1Documenting";

export default function Home() {
  return (
    <>
     <H1Documenting />
      {/* Hero section */}
      <div className="relative">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 ">
          <Carousel className="slider " infiniteLoop>
            {CAROUSEL.map((imageItem) => (
              <div className="h-[30rem] sm:h-[45rem]" key={imageItem.name}>
                <Image
                  src={imageItem.imageSrc.src}
                  alt={imageItem.imageAlt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-full object-cover object-center"
                />
                <p className="legend italic">
                  <span className="bg-gray-900/50 px-2 py-1 rounded-lg ">{imageItem.caption}</span>
                </p>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="relative max-w-3xl flex flex-col items-center justify-center gap-y-4 sm:gap-y-8 mx-auto text-center h-[30rem] sm:h-[45rem] ">
          <Link
            href="https://digital.lib.miamioh.edu/digital/collection/fstxt/search"
            target="_blank"
          >
            <RedButton
              buttonType="submit"
              buttonName="Explore"
            />
          </Link>
        </div>
      </div>

      <main className="mt-12 sm:mt-16 grid gap-y-32">
        <section className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
          <About />
        </section>


      </main>
    </>
  );
}
