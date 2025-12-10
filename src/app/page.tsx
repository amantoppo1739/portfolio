import { BentoGrid } from "@/components/bento-grid";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Stack } from "@/components/stack";
import { Testimonials } from "@/components/testimonials";
import { WhyMe } from "@/components/why";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <BentoGrid />
      <Projects />
      <Testimonials />
      <Stack />
      <WhyMe />
      <Footer />
      </main>
  );
}
