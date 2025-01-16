import Image from 'next/image'
import { Container } from './UI/Container'
import { Border } from './UI/Border'
import { FadeIn, FadeInStagger } from './UI/FadeIn'
import { PROJECT_TEAM, COLLABORATORS } from "@/constant/StaticInfo"
import PersonCard from './UI/PersonCard'


const team = [
  {
    title: 'Project Team',
    people: PROJECT_TEAM
  },
  {
    title: 'Collaborators',
    people: COLLABORATORS
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
          <h2 className="font-display text-3xl text-slate-900 sm:text-4xl">
            About the Team
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">

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
                              title="Software Engineer"
                              description={`${person.description[0]}` + "/n" + `${person.description[1]}`}
                              imageUrl={typeof person.imageTitle === 'string' ? person.imageTitle : person.imageTitle.src}
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
        </div>
      </Container>
    </section>
  )
}
