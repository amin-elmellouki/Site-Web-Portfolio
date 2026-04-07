import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Projects } from "@/components/projects";
import { Stacks } from "@/components/stacks";

export default function Home() {
  return (
    <div id="page-top" className="site-shell">
      <Nav />
      <main id="main-content" className="page-main">
        <Hero />
        <Projects />
        <Stacks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
