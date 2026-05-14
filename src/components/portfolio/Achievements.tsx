import { motion } from "framer-motion";
import { Trophy, Code, Rocket, Brain } from "lucide-react";
import { Section } from "./Section";

const items = [
  { icon: Code, title: "150+ DSA Problems", desc: "Solved across major coding platforms." },
  { icon: Trophy, title: "Smart India Hackathon", desc: "Participant — collaborative national-level innovation." },
  { icon: Rocket, title: "Scalable Solutions", desc: "Developed AI & full-stack solutions end-to-end." },
  { icon: Brain, title: "Analytical Mindset", desc: "Strong problem-solving and engineering thinking." },
];

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Milestones & Wins">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.07 }}
            whileHover={{ y: -4 }}
            className="glass gradient-border rounded-2xl p-6 text-center"
          >
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-silver/10 text-silver">
              <a.icon size={20} />
            </span>
            <h3 className="mt-4 font-display text-base text-silver-bright">{a.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
