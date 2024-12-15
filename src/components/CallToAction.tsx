import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-red-600 py-32"
    >
      <div
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 2347,
          height: 1244
        }}
      ></div>
      <Container className="relative">
        <div className="mx-auto text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Mission Statement
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Our mission is to collect, preserve, study, and promote the voices and contributions of Asian American citizens and diasporic Asians in the nation’s heartland in collaboration with local communities, educators, curators, and scholars nationwide. Making visible what was previously invisible in American history, DAAHO also aims to innovate, inspire, and create sustainable models for integrating the experiences of all minority populations into the mainstream historical narrative.
          </p>
          <Button href="/register" color="white" className="mt-10">
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  )
}
