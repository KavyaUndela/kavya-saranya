import { motion } from "framer-motion";
import { GraduationCap, Sparkles, Code2, Brain } from "lucide-react";
import { Section } from "./Section";

const highlights = [
  { icon: Code2, title: "Full Stack Development", desc: "Modern, scalable web apps end-to-end." },
  { icon: Brain, title: "AI / ML", desc: "Predictive models & data-driven solutions." },
  { icon: Sparkles, title: "Problem Solving", desc: "Strong DSA foundation, 150+ problems solved." },
];

const education = [
  {
    school: "Vishnu Institute of Technology, Bhimavaram",
    degree: "B.Tech in Information Technology",
    period: "2023 – 2027",
    score: "CGPA: 8.92 / 10",
  },
  {
    school: "Sri Saraswati Jr College",
    degree: "Intermediate — MPC",
    period: "2021 – 2023",
    score: "Percentage: 94.6%",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="Crafting Code With Purpose"
      description="A short introduction to my journey, focus areas, and the foundation I’m building my career on."
    >
      <div className="grid gap-8 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass gradient-border rounded-2xl p-8 lg:col-span-3"
        >
          <p className="text-base leading-relaxed text-muted-foreground">
            I’m a B.Tech Information Technology student at{" "}
            <span className="text-silver-bright">Vishnu Institute of Technology, Bhimavaram</span>,
            maintaining a CGPA of <span className="text-silver-bright">8.92/10</span>. I’m
            passionate about full stack development, artificial intelligence, and
            building scalable applications that create real impact.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Beyond the classroom, I sharpen my problem-solving and DSA skills daily,
            and love turning complex problems into clean, elegant interfaces and
            intelligent systems.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <h.icon className="text-silver" size={20} />
                <p className="mt-3 text-sm font-semibold text-silver-bright">{h.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{h.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2"
        >
          <div className="flex items-center gap-2 text-silver">
            <GraduationCap size={20} />
            <h3 className="font-display text-2xl">Education</h3>
          </div>
          <ol className="relative mt-6 space-y-6 border-l border-white/10 pl-6">
            {education.map((e) => (
              <li key={e.school} className="relative">
                <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full bg-silver shadow-[0_0_12px_var(--silver)]" />
                <div className="glass rounded-xl p-5">
                  <p className="text-sm text-silver">{e.period}</p>
                  <h4 className="mt-1 text-base font-semibold text-silver-bright">
                    {e.school}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">{e.degree}</p>
                  <p className="mt-2 text-sm font-medium text-silver">{e.score}</p>
                </div>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </Section>
  );
}
