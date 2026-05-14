import { motion } from "framer-motion";
import { Section } from "./Section";

const groups = [
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { title: "Languages", items: ["Python", "Java", "C", "SQL"] },
  { title: "Databases", items: ["MongoDB", "Firebase", "MySQL"] },
  { title: "AI / ML", items: ["Scikit-learn", "Feature Engineering", "Model Evaluation"] },
  { title: "Tools", items: ["Git", "GitHub", "Postman", "VS Code", "Jupyter Notebook"] },
  { title: "Cloud", items: ["AWS Basics", "Render", "Vercel"] },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools of the Craft"
      description="A curated stack I use to design, build, and ship modern products."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="glass gradient-border group relative overflow-hidden rounded-2xl p-6 transition-shadow hover:shadow-[0_0_40px_-10px_var(--silver)]"
          >
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-silver/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
            <h3 className="font-display text-xl text-silver-bright">{g.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-silver transition-colors hover:border-silver/40 hover:text-silver-bright"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
