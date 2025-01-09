"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from 'react'
import Link from 'next/link'

import { Carousel } from 'react-responsive-carousel'
import { CAROUSEL } from '@/constant/StaticInfo'

import logoMUL from '@/images/logos/mul.png'
import logoNHPRC from '@/images/logos/nhprc.png'
import H1Documenting from './UI/H1Documenting'
import RedButton from './UI/RedButton'
import Image from "next/image";

const Hero = () => {
    return (
        <section id="hero">
            <H1Documenting className="my-24" />
            {/* Hero section */}
            <div className="relative">
                {/* Decorative image and overlay */}
                <div aria-hidden="true" className="absolute inset-0 ">
                    <Carousel className="slider " infiniteLoop>
                        {CAROUSEL.map(({ name, url, imageAlt, caption }) => (
                            <div className="h-[30rem] sm:h-[45rem]" key={name}>
                                <img
                                    src={url.src}
                                    alt={imageAlt}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="h-full object-cover object-center"
                                />
                                <p className="legend italic">
                                    <span className="bg-gray-900/50 px-2 py-1 rounded-lg ">{caption}</span>
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
                            buttonName="Upcoming Events"
                        />
                    </Link>
                </div>
            </div>

            <div className="relative mt-36 p-12">
                <p className="text-3xl text-center text-slate-900">
                    Sponsored by
                </p>
                <ul
                    role="list"
                    className="mt-8 flex justify-center gap-x-8 flex-row xl:gap-x-12 xl:gap-y-0"
                >
                    {[
                        { name: 'MUL', logo: logoMUL },
                        { name: "NHPRC", logo: logoNHPRC }
                    ].map((group, groupIndex) => (
                        <li key={groupIndex} className="flex">
                            <Image src={group.logo.src} alt={group.name} height={200} width={200} />
                        </li>
                    ))}
                </ul>
            </div>

        </section>
    )
}

export default Hero