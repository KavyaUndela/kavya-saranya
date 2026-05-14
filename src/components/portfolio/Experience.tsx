import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Section } from "./Section";

export function Experience() {
  const points = [
    "Worked on AI and ML workflows across real-world datasets",
    "Feature engineering and predictive modeling",
    "Real-world dataset preprocessing & cleaning",
    "Improved analytical performance through debugging and experimentation",
  ];

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I’ve Worked"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass-strong gradient-border mx-auto max-w-3xl rounded-3xl p-8 sm:p-10"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-silver/10 text-silver">
              <Briefcase size={20} />
            </span>
            <div>
              <h3 className="font-display text-xl text-silver-bright">
                SmartBridge Educational Services Pvt. Ltd
              </h3>
              <p className="text-sm text-muted-foreground">
                Artificial Intelligence &amp; Machine Learning Intern
              </p>
            </div>
          </div>
          <span className="rounded-full border border-silver/30 bg-silver/5 px-3 py-1 text-xs text-silver">
            Sep 2025 – Mar 2026
          </span>
        </div>

        <ul className="mt-6 space-y-3">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-silver shadow-[0_0_8px_var(--silver)]" />
              {p}
            </li>
          ))}
        </ul>
      </motion.div>
    </Section>
  );
}
