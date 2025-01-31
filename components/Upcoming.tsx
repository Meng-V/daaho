import { Button } from '@/components/customUI/Button'
import { Container } from '@/components/customUI/Container'
import Collapse from './customUI/Collapse'


function Event({
  name,
  date,
  location,
  href,
  description,
}: {
  name: string
  date: string
  location: string
  href: string
  description: string
}) {
  return (
    <div
      className='flex flex-col rounded-3xl px-6 py-8 sm:px-8 border-2 border-amber-100 lg:py-8'
    >
      <div className='lg:h-[220px]'>
        <p className="font-display text-lg font-bold tracking-tight text-amber-300">
          {date}
        </p>
        <h3 className="mt-5 font-display text-2xl text-white">{name}</h3>
        <p className='mt-4 text-base text-slate-400'>
          {location}
        </p>
      </div>

      <ul
        role="list"
        className=
        'order-last flex flex-col gap-y-3'
      >

        {description && (
          <li className="flex">
            <Collapse content={description} />
          </li>
        )}
      </ul>
      <Button
        href={href}
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

export function Upcoming() {
  return (
    <section
      id="upcoming-events"
      className="bg-radial-[at_25%_25%] from-gray-900 to-sky-900 py-24"
    >
      <Container>
        <div className="md:text-center">
          <h2 className="text-white">
            <span className="">Upcoming Events</span>
          </h2>
          <p className="mt-8 text-lg text-slate-300">
            Our event page is your central resource for past and upcoming events dedicated to exploring and preserving the stories of Asian Americans in Ohio. This page serves as a platform to engage communities, scholars, and enthusiasts in meaningful discussions, conferences, and workshops centered on this vital project. Here, you’ll find information about events designed to share knowledge, foster connections, and inspire action, all while deepening awareness of Asian American contributions and histories. Stay informed and involved as we work together to illuminate the rich and diverse heritage of Asian American communities in Ohio.
          </p>
        </div>
        <div className="mt-16 grid max-w-2xl grid-cols-1 gap-y-10 gap-x-8 sm:mx-auto lg:max-w-none lg:grid-cols-2 xl:mx-20 xl:gap-x-16">
          <Event
            name="Documenting Asian American History in Ohio: Make the Invisible Visible"
            date="Spring 2025, Date TBA"
            location="Walter Havighurst Special Collections and University Archives, Miami University"
            href="https://www.lib.miamioh.edu/"
            description='Funded by National Historical Publications & Records Commission, the DAAHO project aims to document and digitize Asian American histories in Ohio since the 19th century. The interdisciplinary research team consists of scholars, librarians and archivists at Miami University, OSU, University of California Irvine and other places, and aims to systematically collect dispersed materials and turn them into a coherent database that allows students, educators, scholars, and community members to access the rich and diverse histories and contributions of Asians in the nation’s heartland. Come to learn more about this significant project and see how you can be part of it.'
          />
          <Event
            name="A Roundtable Discussion – Making the Invisible Visible: Documenting Asian Histories in Ohio through a Collaborative Digital Edition"
            date="March 13-16, 2025"
            location="Columbus, Ohio, Greater Columbus Convention Center"
            href="https://www.asianstudies.org/conference/"
            description="The Association of Asian Studies Conference offers a unique opportunity to engage with Asian Studies and explore the latest research and ideas in the field. DAAHO project members will present on the current status of the project and future plans in an engaging roundtable discussion. Moderated by Dr. Pranav Jani (The Ohio State University), our roundtable will discuss the project’s recent launch, focusing on current engagement and research with community organizations. Dr. Li will discuss the aims and significance of the DAAHO as well as preliminary findings. Co-PI Dr. Yong Chen will discuss research on Asian food culture as an important part of both Asian American community formation and identity expression. Co PIs Alia Levar Wegner and Dr. Ann Marie Davis will share information about relevant archival collections as well as technical aspects in developing a collaborative digital edition. Community leader and public historian James Tecco will discuss his use of oral history and storytelling with Asian & Pacific Islander communities in the Cincinnati region. Making visible what was previously invisible in American history, our project will offer new insights on Asian border crossings in Ohio while inspiring new models for preserving and promoting marginalized histories of all minority populations."
          />
        </div>
      </Container>
    </section>
  )
}
