import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { Section } from "./Section";

const contactInfo = [
  { icon: Mail, label: "Email", value: "kavyasaranyaundela@gmail.com", href: "mailto:kavyasaranyaundela@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 77801 47696", href: "tel:+917780147696" },
  { icon: Linkedin, label: "LinkedIn", value: "undelakavya", href: "https://linkedin.com/in/undelakavya" },
  { icon: Github, label: "GitHub", value: "KavyaUndela", href: "https://github.com/KavyaUndela" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:kavyasaranyaundela@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s Build Something"
      description="Have a role, a project, or just a hello? My inbox is open."
    >
      <div className="grid gap-8 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 space-y-3"
        >
          {contactInfo.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="glass group flex items-center gap-4 rounded-xl p-4 transition-all hover:border-silver/30 hover:bg-white/[0.07]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-silver/10 text-silver transition-colors group-hover:text-silver-bright">
                <c.icon size={18} />
              </span>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</p>
                <p className="truncate text-sm font-medium text-silver-bright">{c.value}</p>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-strong gradient-border rounded-2xl p-6 sm:p-8 lg:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Name</span>
              <input
                required
                maxLength={80}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-silver-bright outline-none transition-colors focus:border-silver/50"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Email</span>
              <input
                required
                type="email"
                maxLength={120}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-silver-bright outline-none transition-colors focus:border-silver/50"
                placeholder="you@email.com"
              />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Message</span>
            <textarea
              required
              rows={5}
              maxLength={1000}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-1.5 w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-silver-bright outline-none transition-colors focus:border-silver/50"
              placeholder="Tell me about the opportunity…"
            />
          </label>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-silver-bright px-6 py-2.5 text-sm font-semibold text-background transition-shadow hover:shadow-[0_0_30px_-5px_var(--silver-bright)]"
          >
            <Send size={15} />
            {sent ? "Opening mail…" : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </Section>
  );
}
