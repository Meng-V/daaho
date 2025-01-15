import { Button } from '@/components/UI/Button'
import { Container } from '@/components/UI/Container'

export function Mission() {
  return (
    <section
      id="mission-statement"
      className="bg-radial-[at_25%_25%] from-gray-900 to-blue-900 py-24"
    >
      <Container>
        <div className="md:text-center">
          <h2 className="text-white">
            Mission Statement
          </h2>
          <p className="mt-12 text-xl text-white/80 tracking-tight leading-9 font-light">
            Our mission is to collect, preserve, study, and promote the voices and contributions of Asian American citizens and diasporic Asians in the nation’s heartland in collaboration with local communities, educators, curators, and scholars nationwide. Making visible what was previously invisible in American history, DAAHO also aims to innovate, inspire, and create sustainable models for integrating the experiences of all minority populations into the mainstream historical narrative.
          </p>
        </div>
      </Container>
    </section>
  )
}
