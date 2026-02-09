import Image from 'next/image'
import { Container } from '@/components/customUI/Container'
import { Border } from '@/components/customUI/Border'
import { FadeIn, FadeInStagger } from '@/components/customUI/FadeIn'
import { PROJECT_TEAM, PARTNERS, COMMITTEE, PREVIOUS_STUDENT_ASSISTANTS } from "@/constant/Personnel"
import PersonCard from '@/components/customUI/PersonCard'
import AboutLogo from './AboutLogo'
import SwirlyDoodle from './customUI/SwirlyDoodle'


const team = [
  {
    title: "Project Team",
    people: PROJECT_TEAM
  },
  {
    title: 'Partners',
    people: PARTNERS
  },
  {
    title: 'Archives and Content Committee',
    people: COMMITTEE
  },
  {
    title: 'Previous Student Assistants',
    people: PREVIOUS_STUDENT_ASSISTANTS
  },
]

export function About() {
  return (
    <section
      id="about-us"
      aria-label="About the team and project"
      className="pb-14 sm:pb-20 lg:pb-32"
    >

      <Container >
        <div className="mx-auto max-w-2xl md:text-center">
          <h2>
            <span className="relative whitespace-nowrap">
              <SwirlyDoodle className="absolute left-0 top-2/3 h-[0.8em] w-full fill-red-400/80" />
              <span className="relative">About Us</span>
            </span>
          </h2>

          <p className="my-8 text-lg tracking-tight text-slate-700">
            Meet our fantastic team.
          </p>
        </div>

        <div className="space-y-24">
          {team.map((group) => (
            <FadeInStagger key={group.title}>
              <Border as={FadeIn} />
              <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
                <FadeIn>
                  <h3 className="font-display text-2xl font-semibold text-neutral-950">
                    {group.title}
                  </h3>
                </FadeIn>
                <div className="lg:col-span-3">
                  <ul
                    role="list"
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                  >
                    {group.people.map((person) => (
                      <li key={person.name}>
                        <FadeIn>
                          <div className="group relative overflow-hidden rounded-3xl">
                            <PersonCard
                              name={person.name}
                              title={person.title}
                              description={person.biography}
                              imageUrl={person.imageTitle.src}
                            />
                          </div>
                        </FadeIn>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInStagger>
          ))}
          <FadeInStagger>
            <Border as={FadeIn} />
            <FadeIn>
              <AboutLogo />
            </FadeIn>
          </FadeInStagger>
        </div>
      </Container>
    </section >
  )
}
