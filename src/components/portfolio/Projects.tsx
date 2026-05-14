import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    title: "SkillRise – Rural Talent Job-Matching Platform",
    description:
      "Full-stack AI-powered job-matching platform connecting rural talent with recruiters through inclusive, low-bandwidth workflows.",
    features: [
      "Connected 500+ rural users",
      "Reduced hiring response time by 40%",
      "Voice & chat-assisted hiring workflows",
      "Video-based skill demonstrations",
      "Optimized for low-bandwidth users",
    ],
    stack: ["React.js", "Node.js", "MongoDB", "Firebase"],
    github: "#",
    demo: "#",
  },
  {
    title: "Prosperity Prognosticator – Startup Success Prediction",
    description:
      "Machine learning model predicting startup success using funding, market size, and team composition signals.",
    features: [
      "Processed 10,000+ startup records",
      "Random Forest & Logistic Regression",
      "Data visualization & analytics",
      "Improved prediction reliability",
    ],
    stack: ["Python", "Scikit-learn", "Pandas", "ML"],
    github: "#",
    demo: "#",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected Work"
      description="A glimpse into what I’ve built — from inclusive AI products to data-driven prediction systems."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass-strong gradient-border group relative flex flex-col overflow-hidden rounded-3xl p-8 transition-all hover:shadow-[0_0_60px_-15px_var(--silver)]"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-silver/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-silver">
              <span className="h-px w-6 bg-silver/60" />
              Project 0{i + 1}
            </div>

            <h3 className="mt-4 font-display text-2xl text-silver-bright sm:text-3xl">
              {p.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {p.description}
            </p>

            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {p.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-xs text-muted-foreground"
                >
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-silver" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-silver"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-auto flex gap-3 pt-8">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-silver/30 bg-silver/5 px-4 py-2 text-xs font-semibold text-silver-bright transition-colors hover:bg-silver/10"
              >
                <Github size={14} /> GitHub
              </a>
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-silver-bright px-4 py-2 text-xs font-semibold text-background transition-shadow hover:shadow-[0_0_20px_-4px_var(--silver-bright)]"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
