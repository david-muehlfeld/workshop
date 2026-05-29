"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp } from "../components/FadeUp";
import { home, socials } from "../content";

function HeroLine({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="min-h-screen flex flex-col justify-between pt-28 pb-12 px-8 mx-auto max-w-container">
        {/* Top rule */}
        <div className="flex items-center justify-between border-t border-border pt-5">
          <HeroLine delay={0}>
            <span className="font-ui text-xs tracking-[0.2em] uppercase text-accent">
              {home.hero.label}
            </span>
          </HeroLine>
          <HeroLine delay={0}>
            <span className="font-ui text-xs text-secondary">Est. 2003</span>
          </HeroLine>
        </div>

        {/* Headline + photo */}
        <div className="my-auto py-12 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-10 items-center">
          <HeroLine delay={0.15}>
            <h1 className="font-display text-[clamp(3.5rem,9vw,8.5rem)] leading-[0.9] tracking-tight text-primary">
              {home.hero.headline.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </HeroLine>

          {/* Profile photo */}
          <HeroLine delay={0.3}>
            <div className="aspect-[3/4] overflow-hidden border border-border bg-surface relative group">
              {/* Drop your photo at public/profile.jpg to fill this */}
              <img
                src="/profile.jpg"
                alt="David Muehlfeld"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 pointer-events-none">
                <span className="font-ui text-xs text-secondary/60 tracking-widest uppercase">
                  Add photo
                </span>
                <span className="font-ui text-[10px] text-secondary/40 tracking-wider">
                  public/profile.jpg
                </span>
              </div>
            </div>
          </HeroLine>
        </div>

        {/* Sub + CTA */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <HeroLine delay={0.4}>
            <p className="font-body text-secondary text-lg leading-relaxed max-w-md">
              {home.hero.subheadline}
            </p>
          </HeroLine>
          <HeroLine delay={0.55}>
            <a
              href={home.hero.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-accent text-accent font-ui text-xs tracking-widest uppercase px-7 py-4 hover:bg-accent hover:text-bg transition-all duration-200"
            >
              {home.hero.cta.label}
              <span className="text-base leading-none">↗</span>
            </a>
          </HeroLine>
        </div>
      </section>

      {/* ── About ── */}
      <section className="mx-auto max-w-container px-8 py-section border-t border-border">
        <FadeUp>
          <span className="font-ui text-xs tracking-[0.2em] uppercase text-accent block mb-8">
            {home.about.label}
          </span>
        </FadeUp>
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {home.about.paragraphs.map((p, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <p className="font-body text-secondary text-base leading-relaxed border-l-2 border-accent/30 pl-6">
                {p}
              </p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="mx-auto max-w-container px-8 py-section border-t border-border">
        <FadeUp>
          <span className="font-ui text-xs tracking-[0.2em] uppercase text-accent block mb-8">
            {home.skills.label}
          </span>
        </FadeUp>
        <FadeUp delay={0.1}>
          <ul className="flex flex-wrap gap-3">
            {home.skills.items.map((skill) => (
              <li
                key={skill}
                className="border border-border text-secondary font-ui text-xs tracking-widest uppercase px-5 py-2.5 hover:border-accent hover:text-accent transition-colors duration-200 bg-surface"
              >
                {skill}
              </li>
            ))}
          </ul>
        </FadeUp>
      </section>

      {/* ── Featured Work ── */}
      <section className="mx-auto max-w-container px-8 py-section border-t border-border">
        <FadeUp>
          <div className="flex items-center justify-between mb-10">
            <span className="font-ui text-xs tracking-[0.2em] uppercase text-accent">
              {home.featuredWork.label}
            </span>
            <Link
              href="/work"
              className="font-ui text-xs tracking-widest uppercase text-secondary hover:text-accent transition-colors duration-200"
            >
              All work →
            </Link>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-4">
          {home.featuredWork.items.map((item, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <Link
                href={item.href}
                className="group flex flex-col bg-surface border border-border hover:border-accent transition-all duration-200 hover:-translate-y-1"
              >
                {/* Teaser image */}
                <div className="aspect-[16/9] overflow-hidden bg-bg relative">
                  <img
                    src={`/work/${String(i + 1).padStart(2, "0")}.jpg`}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                  {/* Placeholder background */}
                  <div className="absolute inset-0 flex items-end justify-end p-4 pointer-events-none">
                    <span
                      className="font-display text-[5rem] leading-none font-bold opacity-[0.06] text-primary select-none"
                    >
                      {item.index}
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <span className="font-ui text-[10px] text-secondary tracking-widest">
                      {item.index}
                    </span>
                    <span className="font-ui text-[10px] text-accent tracking-widest uppercase">
                      {item.company}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-primary leading-tight mb-3 group-hover:text-accent transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-secondary leading-relaxed mb-5 flex-1">
                    {item.description}
                  </p>
                  <span className="font-ui text-[10px] tracking-widest uppercase text-secondary group-hover:text-accent transition-colors duration-200">
                    View Case Study →
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── News / Activity ── */}
      <section className="mx-auto max-w-container px-8 py-section border-t border-border">
        <FadeUp>
          <span className="font-ui text-xs tracking-[0.2em] uppercase text-accent block mb-8">
            {home.news.label}
          </span>
        </FadeUp>

        <ul className="divide-y divide-border">
          {home.news.items.map((item, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <li className="py-5 flex flex-col md:flex-row md:items-start gap-3 md:gap-10">
                <span className="font-ui text-xs tracking-widest uppercase text-accent shrink-0 w-20 pt-0.5">
                  {item.marker}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-secondary text-sm leading-relaxed hover:text-primary transition-colors duration-200"
                  >
                    {item.text}
                  </a>
                ) : (
                  <p className="font-body text-secondary text-sm leading-relaxed">
                    {item.text}
                  </p>
                )}
              </li>
            </FadeUp>
          ))}
        </ul>
      </section>

      {/* ── Social links ── */}
      <section className="mx-auto max-w-container px-8 pt-10 pb-6 border-t border-border">
        <FadeUp>
          <ul className="flex flex-wrap gap-6">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="font-ui text-xs tracking-widest uppercase text-secondary hover:text-accent transition-colors duration-200"
                >
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </FadeUp>
      </section>
    </main>
  );
}
