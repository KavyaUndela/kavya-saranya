import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Certifications } from "@/components/portfolio/Certifications";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Undela Kavya Saranya — Full Stack Developer & AI/ML Enthusiast" },
      {
        name: "description",
        content:
          "Portfolio of Undela Kavya Saranya — Full Stack Developer and AI/ML Enthusiast building scalable web applications and intelligent systems.",
      },
      { property: "og:title", content: "Undela Kavya Saranya — Portfolio" },
      {
        property: "og:description",
        content:
          "Full Stack Developer & AI/ML Enthusiast. Explore projects, skills, experience, and certifications.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "keywords", content: "Undela Kavya Saranya, Full Stack Developer, React, Node.js, AI, Machine Learning, Portfolio" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Undela Kavya Saranya",
          jobTitle: "Full Stack Developer & AI/ML Enthusiast",
          email: "mailto:kavyasaranyaundela@gmail.com",
          telephone: "+91-7780147696",
          url: "/",
          sameAs: [
            "https://github.com/KavyaUndela",
            "https://linkedin.com/in/undelakavya",
          ],
          alumniOf: "Vishnu Institute of Technology, Bhimavaram",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
