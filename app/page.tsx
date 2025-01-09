import Link from "next/link";
import { Container } from "@/components/UI/Container";
import { Mission } from "@/components/Mission";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <main className="grid gird-cols-1 gap-y-48">
        <Hero />
        <Mission />
      </main>
    </>
  );
}
