'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import screenshotExpenses from '@/images/screenshots/expenses.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotReporting from '@/images/screenshots/reporting.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'

const features = [
  {
    title: 'Asian Cuisine',
    caption: "Asian food pictures making me hungry. I'm not sure what they are but I'm sure it's delicious.",
    alt: 'Asian food',
    creditline: "some credit",
    image: screenshotPayroll,
  },
  {
    title: 'Woo Chong Yung 吳仲熊',
    caption:"This hanging scroll in black ink captures a tranquil rural setting with mountains, a modest hut, and sparse trees and bamboo. The minimalist brushwork emphasizes the vastness of the natural environment. Part of the Cincinnati Art Museum's C.Y. Woo Collection, the piece was donated by T.H. Wu in 2015 (accession number 2015.324).",
    alt: "A black ink landscape painting by Woo Chong Yung, featuring a simple, serene scene of mountains, rocky outcroppings, and sparse vegetation. Two tall, leafless trees stand near a small hut nestled among bamboo, with rolling hills and distant peaks fading into the background. A red seal stamp is visible in the bottom left corner.",
    creditline: "Woo Chong Yung 吳仲熊 (1898–1989), Landscape, 1970, hanging scroll, ink on paper, Cincinnati Art Museum, C.Y. Woo Collection, donated by T.H. Wu, 2015.324",
    image: screenshotExpenses,
  },
  {
    title: 'Public Launch Conference',
    caption:'Dr. Hongmei Li discusses the \"Significance of the Project\" during the Public Launch event introducing the mission of addressing the invisibility of Asian American history in U.S. curricula, with a focus on unique dynamics in the Midwest. Participants engage attentively, highlighting a collaborative learning environment.',
    alt: 'Dr. Hongmei Li presents at a podium in a classroom-style conference room. A slide titled \"Significance of the Project\" is projected behind her, listing key points about the project. Attendees sit at long tables, engaged and taking notes, with laptops and drinks in front of them. The room has large windows in the background allowing natural light to enter.',
    creditline: "",
    image: screenshotVatReturns,
  },
  {
    title: 'Wartime Student Rights',
    caption:
      'A 1944 letter from the National Japanese American Student Relocation Council to Miami University President A. H. Upham, advocating for the inclusion of Japanese American students in scientific and technical programs without preferential treatment, while recognizing their contributions during wartime. Courtesy of the Japanese American Archives.',
    alt: "A historical typed letter dated February 21, 1944, from the National Japanese American Student Relocation Council addressed to President A. H. Upham of Miami University. The letter discusses the deferment of Nisei students in scientific fields, emphasizing equal treatment and opportunities. Signed by C.V. Hibbard, National Director.",
    creditline: " ",
    image: screenshotReporting,
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>(
    'horizontal',
  )

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 pb-28 pt-20 sm:py-32"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Exploring Engagement: Project Mission, Resources, Events, and Involvement Opportunities
          </h2>
          <p className="mt-6 text-lg tracking-tight text-white">
            Here, you can learn about the project’s mission, access resources, discover past and upcoming events, and find opportunities to get involved. Designed to engage educators, scholars, students, and community members alike, this site highlights the collaborative efforts that make DAAHO possible.
          </p>
        </div>
        <TabGroup
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <TabList className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5',
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg ui-not-focus-visible:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-blue-600 lg:text-white'
                              : 'text-blue-100 hover:text-white lg:text-white',
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white',
                        )}
                      >
                        {feature.caption}
                      </p>
                      {feature.creditline && (
                        <p
                          className={clsx(
                            'mt-2 hidden text-xs lg:block',
                            selectedIndex === featureIndex
                              ? 'text-white'
                              : 'text-blue-100 group-hover:text-white',
                          )}
                        >
                          {feature.creditline}
                        </p>
                      )
                      }
                    </div>
                  ))}
                </TabList>
              </div>
              <TabPanels className="lg:col-span-7">
                {features.map((feature) => (
                  <TabPanel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.caption}
                      </p>
                      <p className="mt-2 text-sm text-white sm:text-center">
                        {feature.creditline}
                      </p>
                    </div>
                    <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt={feature.alt}
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </>
          )}
        </TabGroup>
      </Container>
    </section>
  )
}
