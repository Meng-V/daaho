import { Button } from '@/components/customUI/Button'
import { Container } from '@/components/customUI/Container'
import { FadeIn, FadeInStagger } from './customUI/FadeIn'
import { EventsProps } from '@/types/index'
import { UPCOMING_EVENTS } from '@/constant/StaticInfo'
import { PAST_EVENTS } from '@/constant/StaticInfo'
import { Border } from './customUI/Border'
import { PastEvents } from './PastEvents'
import Collapse from './customUI/Collapse'

const EVENT_LIST = [
  {
    title: 'Upcoming Events',
    events: UPCOMING_EVENTS
  },
  {
    title: 'Past Events',
    events: PAST_EVENTS
  },
]

function UpcomingEvents({
  upcomingEvents
}: {
  upcomingEvents: EventsProps
}) {
  return (
    <div
      className='flex flex-col rounded-3xl px-6 py-8 sm:px-8 border-2 border-amber-100 lg:py-8'
    >
      <div className='lg:h-[16rem]'>
        <p className="font-display text-lg font-bold tracking-tight text-amber-300">
          {upcomingEvents.date}
        </p>
        <h3 className="mt-5 font-display text-2xl text-white">{upcomingEvents.name}</h3>
        <p className='mt-4 text-base text-slate-400'>
          {upcomingEvents.location}
        </p>
      </div>

      <ul role="list" className='order-last flex flex-col gap-y-3' >
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
      id="events"
      className="bg-radial-[at_25%_25%] from-gray-900 to-sky-900 py-24"
    >
      <Container>
        <div className="md:text-center">
          <h2 className="text-white">
            <span className="">Events</span>
          </h2>
          <p className="mt-8 text-lg text-slate-300">
            Our event section is your central resource for past and upcoming events dedicated to exploring and preserving the stories of Asian Americans in Ohio.
            This page serves as a platform to engage communities, scholars, and enthusiasts in meaningful discussions, conferences, and workshops centered on this vital project.
            Here, you’ll find information about events designed to share knowledge, foster connections, and inspire action, all while deepening awareness of Asian American contributions and histories.
            Stay informed and involved as we work together to illuminate the rich and diverse heritage of Asian American communities in Ohio.</p>
        </div>

        <div className="mt-24 space-y-24">
          {EVENT_LIST.map((group) => (
            <FadeInStagger key={group.title}>
              <Border as={FadeIn} invert={true} />
              <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
                <FadeIn>
                  <h3 className="font-display text-2xl font-semibold text-neutral-100">
                    {group.title}
                  </h3>
                </FadeIn>
                <div className="lg:col-span-3">
                  <ul
                    role="list"
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-8"
                  >
                    {group.events.map((event) => (
                      <li key={event.name}>
                        <FadeIn>
                          {event.group === 'upcoming' ? (
                            <UpcomingEvents upcomingEvents={event} />
                          )
                            : (
                              <PastEvents pastEvents={event} />
                            )}
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
