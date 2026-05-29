import Link from "next/link";
import { socials } from "../content";

export function Footer() {
  return (
    <footer className="border-t border-border mt-8">
      <div className="mx-auto max-w-container px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <span className="font-ui text-xs text-secondary tracking-widest uppercase">
          David Muehlfeld &mdash; {new Date().getFullYear()}
        </span>

        <ul className="flex flex-wrap items-center gap-6">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="font-ui text-xs text-secondary hover:text-accent tracking-widest uppercase transition-colors duration-200"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
