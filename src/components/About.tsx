import Image from 'next/image'
import { Container } from './Container'
import { Border } from './Border'
import { FadeIn, FadeInStagger } from './FadeIn'

import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'


const team = [
    {
        title: 'Leadership',
        people: [
            {
                name: 'Leslie Alexander',
                role: 'Co-Founder / CEO',
                image: { src: imageLeslieAlexander },
            },
            {
                name: 'Michael Foster',
                role: 'Co-Founder / CTO',
                image: { src: imageMichaelFoster },
            },
            {
                name: 'Dries Vincent',
                role: 'Partner & Business Relations',
                image: { src: imageDriesVincent },
            },
        ],
    },
    {
        title: 'Team',
        people: [
            {
                name: 'Chelsea Hagon',
                role: 'Senior Developer',
                image: { src: imageChelseaHagon },
            },
            {
                name: 'Emma Dorsey',
                role: 'Senior Designer',
                image: { src: imageEmmaDorsey },
            },
            {
                name: 'Leonard Krasner',
                role: 'VP, User Experience',
                image: { src: imageLeonardKrasner },
            },
            {
                name: 'Blake Reid',
                role: 'Junior Copywriter',
                image: { src: imageBlakeReid },
            },
            {
                name: 'Kathryn Murphy',
                role: 'VP, Human Resources',
                image: { src: imageKathrynMurphy },
            },
            {
                name: 'Whitney Francis',
                role: 'Content Specialist',
                image: { src: imageWhitneyFrancis },
            },
            {
                name: 'Jeffrey Webb',
                role: 'Account Coordinator',
                image: { src: imageJeffreyWebb },
            },
            {
                name: 'Benjamin Russel',
                role: 'Senior Developer',
                image: { src: imageBenjaminRussel },
            },
            {
                name: 'Angela Fisher',
                role: 'Front-end Developer',
                image: { src: imageAngelaFisher },
            },
        ],
    },
]

export function About() {
    return (

        <section
        id="about-team-project"
        aria-label="About the team and project"
        className="pb-14 sm:pb-20 lg:pb-32"
      >

        <Container className="mt-24 sm:mt-32 lg:mt-40">

            <div className="mx-auto max-w-2xl md:text-center">
                <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                    About Us
                </h2>
                <p className="mt-4 text-lg tracking-tight text-slate-700">
                    Our team
                </p>
            </div>

            <div className="space-y-24">
                {team.map((group) => (
                    <FadeInStagger key={group.title}>
                        <Border as={FadeIn} />
                        <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
                            <FadeIn>
                                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                                    {group.title}
                                </h2>
                            </FadeIn>
                            <div className="lg:col-span-3">
                                <ul
                                    role="list"
                                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                                >
                                    {group.people.map((person) => (
                                        <li key={person.name}>
                                            <FadeIn>
                                                <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                                                    <Image
                                                        alt=""
                                                        {...person.image}
                                                        className="h-96 w-full object-cover transition duration-500 motion-safe:group-hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                                                        <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                                                            {person.name}
                                                        </p>
                                                        <p className="mt-2 text-sm text-white">
                                                            {person.role}
                                                        </p>
                                                    </div>
                                                </div>
                                            </FadeIn>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </FadeInStagger>
                ))}
            </div>
        </Container>
        </section>
    )
}
