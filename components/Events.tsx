import { Button } from '@/components/customUI/Button'
import { Container } from '@/components/customUI/Container'
import Collapse from './customUI/Collapse'
import Link from 'next/link'
import Image from 'next/image'
import { FadeIn, FadeInStagger } from './customUI/FadeIn'
import { SectionIntro } from './customUI/SectionIntro'
import { EventsProps } from '@/types/index'
import { UPCOMING_EVENTS } from '@/constant/StaticInfo'

function PastEvents({
  inputEvents
}: {
  inputEvents: EventsProps
}) {
  return (
    <div
      className='flex flex-col rounded-3xl px-6 py-8 sm:px-8 border-2 border-amber-100 lg:py-8'
    >
      <div className='lg:h-[220px]'>
        <p className="font-display text-lg font-bold tracking-tight text-amber-300">
          {inputEvents.date}
        </p>
        <h3 className="mt-5 font-display text-2xl text-white">{inputEvents.name}</h3>
        <p className='mt-4 text-base text-slate-400'>
          {inputEvents.location}
        </p>
      </div>

      <ul
        role="list"
        className=
        'order-last flex flex-col gap-y-3'
      >

        {inputEvents.description && (
          <li className="flex">
            <Collapse content={inputEvents.description} />
          </li>
        )}
      </ul>
      <Button
        href={inputEvents.href}
        target='_blank'
        variant={'outline'}
        color="slate"
        className="mt-8 no-underline bg-amber-100 font-semibold"
      >
        Event Link
      </Button>
    </div>
  )
}

function UpcomingEvents({
  upcomingEvents
}: {
  upcomingEvents: EventsProps
}) {
  return (
    <div
      className='flex flex-col rounded-3xl px-6 py-8 sm:px-8 border-2 border-amber-100 lg:py-8'
    >
      <div className='lg:h-[220px]'>
        <p className="font-display text-lg font-bold tracking-tight text-amber-300">
          {upcomingEvents.date}
        </p>
        <h3 className="mt-5 font-display text-2xl text-white">{upcomingEvents.name}</h3>
        <p className='mt-4 text-base text-slate-400'>
          {upcomingEvents.location}
        </p>
      </div>

      <ul
        role="list"
        className=
        'order-last flex flex-col gap-y-3'
      >

        {upcomingEvents.description && (
          <li className="flex">
            <Collapse content={upcomingEvents.description} />
          </li>
        )}
      </ul>
      <Button
        href={upcomingEvents.href}
        target='_blank'
        variant={'outline'}
        color="slate"
        className="mt-8 no-underline bg-amber-100 font-semibold"
      >
        Event Link
      </Button>
    </div>
  )
}

export default async function Events() {

  return (
    <section
      id="upcoming-events"
      className="bg-radial-[at_25%_25%] from-gray-900 to-sky-900 py-24"
    >
      <Container>
        <div className="md:text-center">
          <h2 className="text-white">
            <span className="">Events</span>
          </h2>
          <p className="mt-8 text-lg text-slate-300">
            Our event page is your central resource for past and upcoming events dedicated to exploring and preserving the stories of Asian Americans in Ohio. This page serves as a platform to engage communities, scholars, and enthusiasts in meaningful discussions, conferences, and workshops centered on this vital project. Here, you’ll find information about events designed to share knowledge, foster connections, and inspire action, all while deepening awareness of Asian American contributions and histories. Stay informed and involved as we work together to illuminate the rich and diverse heritage of Asian American communities in Ohio.
          </p>
        </div>

        <>
          <h3>Upcoming Events</h3>
          <div className="mt-16 grid max-w-2xl grid-cols-1 gap-y-10 gap-x-8 sm:mx-auto lg:max-w-none lg:grid-cols-2 xl:mx-20 xl:gap-x-16">
            {UPCOMING_EVENTS.map((event, index) => (
              <UpcomingEvents key={index} upcomingEvents={event} />
            ))}
          </div>
        </>

        <>
          <h3>Past Events</h3>
        </>
      </Container>
    </section>
  )
}
