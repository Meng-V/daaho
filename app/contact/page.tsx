import { useId } from 'react'
import Link from 'next/link'

import { Border } from '@/components/customUI/Border'
import { Button } from '@/components/customUI/Button'
import { Container } from '@/components/customUI/Container'
import { FadeIn } from '@/components/customUI/FadeIn'
import { Offices } from '@/components/customUI/Offices'
import { PageIntro } from '@/components/customUI/PageIntro'
import { SocialMedia } from '@/components/customUI/SocialMedia'

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}


function ContactForm() {
  return (
    <FadeIn className="lg:order-last p-8">
      <form>
        <h3 className="font-display text-3xl font-semibold text-neutral-950">
          Leave a message
        </h3>
        <div className="isolate mt-6 -space-y-px rounded-2xl">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Organization"
            name="organization"
            autoComplete="organization"
          />
          <TextInput label="Message" name="message" />

        </div>
        <Button type="submit" className="mt-10 bg-gray-300 cursor-not-allowed opacity-50" disabled>
          {`Form under construction`}
        </Button>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <div className='bg-gray-500/10 rounded-3xl p-8'>
      <FadeIn>
        <h3 className="font-display text-3xl font-semibold text-neutral-950">
          Contact Information
        </h3>
        <p className="mt-6 max-w-2xl text-base text-neutral-600">
          Submit a collection
        </p>

        <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

        <Border className="mt-16 pt-16">
          <h3 className="font-display text-3xl font-semibold text-neutral-950">
            Email us
          </h3>
          <dl className="mt-6 grid grid-cols-1 gap-8 text-lg sm:grid-cols-2">
            {[
              ['DAAHO Project Team', 'daaho@miamioh.edu'],
            ].map(([label, email]) => (
              <div key={email}>
                <dt className="font-semibold text-neutral-950">{label}</dt>
                <dd>
                  <Link
                    href={`mailto:${email}`}
                    className="text-red-600 hover:text-red-900"
                  >
                    {email}
                  </Link>
                </dd>
              </div>
            ))}
          </dl>
        </Border>

        <Border className="mt-16 pt-16">
          <h3 className="font-display text-3xl font-semibold text-neutral-950">
            Follow us
          </h3>
          <SocialMedia className="mt-6" />
        </Border>
      </FadeIn>
    </div>
  )
}

export default function Contact() {
  return (
    <section className='mb-24'>
      <PageIntro eyebrow="Get involved" title="Let’s work together">
        <p>Discover ways to support this project through volunteering, attending events, sharing your own stories or artifacts, or collaborating on research initiatives. Your involvement is key to ensuring these important histories are documented, celebrated, and passed down to future generations. Join us in making an impact!
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </section>
  )
}
