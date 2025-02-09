
import Logo from "@/images/logos/logo_n.png"
import Image from 'next/image'



export default function AboutLogo() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
          <Image
              src={Logo.src}
              alt="Logo designed by Lauren Menker"
              width={400}
              height={400}
              className="rounded-full shadow-xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="mb-6">About our Logo</h2>
            <p className="text-gray-700 leading-relaxed">
              This logo is designed by Lauren Menker (Class of 2025), a major in Communication Design & Emerging
              Technology in Business and Design at Miami University. An inward-facing circle of people holding hands
              embodies the mission of embracing diverse histories. This formation conveys unity, mutual support, and a
              shared commitment to making these histories visible.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              The circles represent distinct cultural narratives among Ohio's Asian American communities, showing their
              intersections at the same time. The globe expands this idea, placing these local histories in a global
              context.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              This design reflects the project's mission to document, preserve, and integrate these histories into
              mainstream narratives, while fostering collaboration across communities and institutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

