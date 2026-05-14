import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-background/60 py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          Designed &amp; Developed by{" "}
          <span className="text-silver-gradient font-semibold">Undela Kavya Saranya</span>
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/KavyaUndela"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-white/10 p-2 text-silver transition-colors hover:border-silver/40 hover:text-silver-bright"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/in/undelakavya"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-white/10 p-2 text-silver transition-colors hover:border-silver/40 hover:text-silver-bright"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:kavyasaranyaundela@gmail.com"
            aria-label="Email"
            className="rounded-full border border-white/10 p-2 text-silver transition-colors hover:border-silver/40 hover:text-silver-bright"
          >
            <Mail size={16} />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Kavya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
