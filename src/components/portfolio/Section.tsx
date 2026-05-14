import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-silver">
            {eyebrow}
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-silver-gradient">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-muted-foreground">{description}</p>
          )}
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-silver/60 to-transparent" />
        </motion.div>

        <div className="mt-16">{children}</div>
      </div>
    </section>
  );
}
