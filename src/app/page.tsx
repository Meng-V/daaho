import { About } from '@/components/About'
import { Mission } from '@/components/Mission'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Upcoming } from '@/components/Upcoming'
import { Primary } from '@/components/Primary'
import { Goals } from '@/components/Goals'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Primary />
        <Goals />
        <Upcoming />
        <About />
        <Mission />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
