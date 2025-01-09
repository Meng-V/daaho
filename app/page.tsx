import Link from "next/link";
import { Container } from "@/components/UI/Container";
import { Mission } from "@/components/Mission";
import Hero from "@/components/Hero";
import { Goals } from "@/components/Goals";
import { Upcoming } from "@/components/Upcoming";
import { About } from "@/components/About";

export default function Home() {
  return (
    <>
      <main className="grid gird-cols-1 gap-y-40">
        <Hero />
        <Mission />
        <Goals />
        <Upcoming />
        <About />
      </main>
    </>
  );
}
