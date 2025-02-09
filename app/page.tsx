import { Mission } from "@/components/Mission";
import Hero from "@/components/Hero";
import { Goals } from "@/components/Goals";
import Events from "@/components/Events";
import { About } from "@/components/About";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="grid gird-cols-1 gap-y-40">
        <Mission />
        <Goals />
        <Events />
        <About />
      </main>
    </>
  );
}
