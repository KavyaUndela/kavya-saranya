import { motion } from "framer-motion";
import { Github, Linkedin, Download, Mail } from "lucide-react";
import portrait from "@/assets/hero-portrait.jpg";
import { Particles } from "./Particles";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-hero pt-32 pb-20"
    >
      {/* Glow blobs */}
      <div className="pointer-events-none absolute -left-32 top-32 h-96 w-96 rounded-full bg-silver/10 blur-3xl animate-pulse-glow" />
      <div
        className="pointer-events-none absolute -right-32 bottom-20 h-[28rem] w-[28rem] rounded-full bg-silver/5 blur-3xl animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />
      <Particles count={50} />

      <div className="container relative mx-auto grid grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-silver/20 bg-silver/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-silver">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </span>

          <h1 className="mt-6 whitespace-nowrap font-display text-3xl leading-[1.05] sm:text-5xl lg:text-6xl">
            <span className="text-silver-gradient">Undela Kavya Saranya</span>
          </h1>

          <p className="mt-5 text-lg font-medium text-silver">
            Full Stack Developer{" "}
            <span className="mx-2 text-muted-foreground">|</span> AI &amp; ML
            Enthusiast
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Passionate Information Technology student focused on building
            scalable web applications, AI-powered solutions, and modern user
            experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="https://github.com/KavyaUndela"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-silver-bright px-5 py-2.5 text-sm font-semibold text-background transition-shadow hover:shadow-[0_0_30px_-5px_var(--silver-bright)]"
            >
              <Github size={16} /> GitHub
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="https://linkedin.com/in/undelakavya"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-silver/30 bg-silver/5 px-5 py-2.5 text-sm font-semibold text-silver-bright transition-all hover:bg-silver/10"
            >
              <Linkedin size={16} /> LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-silver/30 bg-silver/5 px-5 py-2.5 text-sm font-semibold text-silver-bright transition-all hover:bg-silver/10"
            >
              <Download size={16} /> Resume
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-silver/30 bg-silver/5 px-5 py-2.5 text-sm font-semibold text-silver-bright transition-all hover:bg-silver/10"
            >
              <Mail size={16} /> Contact Me
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-silver/30 via-transparent to-silver/20 blur-2xl animate-pulse-glow" />
            <div className="absolute -inset-2 rounded-full bg-silver/10 blur-xl" />
            <div className="relative h-72 w-72 overflow-hidden rounded-full border border-silver/30 elegant-shadow sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <img
                src={portrait}
                alt="Undela Kavya Saranya — Full Stack Developer"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
            </div>
            <div className="absolute -bottom-4 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-silver to-transparent shimmer" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
