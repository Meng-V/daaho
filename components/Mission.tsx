import { Button } from '@/components/UI/Button'
import { Container } from '@/components/UI/Container'

export function Mission() {
  return (
    <section
      id="mission-statement"
      className="bg-gradient-to-r to-blue-900 from-gray-900 py-24"
    >
      <Container className="">
        <div className="text-center">
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            Mission Statement
          </h2>
          <p className="mt-12 text-2xl text-white/80 leading-9 font-thin">
            Our mission is to collect, preserve, study, and promote the voices and contributions of Asian American citizens and diasporic Asians in the nation’s heartland in collaboration with local communities, educators, curators, and scholars nationwide. Making visible what was previously invisible in American history, DAAHO also aims to innovate, inspire, and create sustainable models for integrating the experiences of all minority populations into the mainstream historical narrative.
          </p>
        </div>
      </Container>
    </section>
  )
}
