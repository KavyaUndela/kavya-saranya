import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Section } from "./Section";

const certs = [
  { title: "HTML & CSS Bootcamp", issuer: "LetsUpgrade" },
  { title: "Python Course", issuer: "GeeksforGeeks" },
  { title: "AI & Machine Learning Internship", issuer: "SmartBridge" },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Verified Knowledge"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="glass gradient-border group relative overflow-hidden rounded-2xl p-6"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-silver/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-silver/10 text-silver">
              <Award size={20} />
            </span>
            <h3 className="mt-5 font-display text-lg text-silver-bright">{c.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
            <a
              href="#"
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-silver transition-colors hover:text-silver-bright"
            >
              View Certificate <ExternalLink size={12} />
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
