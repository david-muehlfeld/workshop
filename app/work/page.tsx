"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "../../components/FadeUp";
import { work } from "../../content";

const ALL_FILTERS = ["All", "Product Design", "Brand Design", "AI", "Data", "Growth"];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = work.caseStudies.filter((cs) => {
    if (activeFilter === "All") return true;
    return cs.tags.some((t) => t.toLowerCase().includes(activeFilter.toLowerCase()));
  });

  return (
    <main className="pt-28 pb-20">
      {/* Header */}
      <section className="mx-auto max-w-container px-8 border-t border-border pt-10 mb-16">
        <FadeUp>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-none text-primary mt-8 mb-5">
            {work.headline}
          </h1>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="font-body text-secondary text-lg max-w-xl leading-relaxed">
            {work.subheadline}
          </p>
        </FadeUp>
      </section>

      {/* Filters */}
      <section className="mx-auto max-w-container px-8 mb-12">
        <FadeUp>
          <div className="flex flex-wrap gap-2">
            {ALL_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`font-ui text-xs tracking-widest uppercase px-4 py-2 border transition-colors duration-200 ${
                  activeFilter === f
                    ? "border-accent text-accent bg-accent/5"
                    : "border-border text-secondary hover:border-border-hover hover:text-primary bg-surface"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* Case studies */}
      <section className="mx-auto max-w-container px-8">
        <AnimatePresence mode="popLayout">
          <ul className="divide-y divide-border border-t border-border">
            {filtered.map((cs, i) => (
              <motion.li
                key={cs.index}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <a
                  href={cs.href}
                  className="group flex flex-col md:flex-row md:items-start gap-6 py-10"
                >
                  {/* Left: index + tags */}
                  <div className="md:w-48 shrink-0 flex flex-col gap-3 pt-1">
                    <span className="font-ui text-xs text-secondary tracking-widest">
                      {cs.index}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cs.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-ui text-[10px] tracking-widest uppercase border border-border text-secondary px-2.5 py-1 bg-surface"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Center: teaser image */}
                  <div className="md:w-52 shrink-0">
                    <div className="aspect-[4/3] overflow-hidden bg-surface border border-border relative">
                      <img
                        src={`/work/${cs.index}.jpg`}
                        alt={cs.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = "none";
                        }}
                      />
                      {/* Placeholder number */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="font-display text-6xl font-bold text-primary/[0.07] select-none">
                          {cs.index}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h2 className="font-display text-3xl md:text-[2.25rem] text-primary leading-tight group-hover:text-accent transition-colors duration-200">
                        {cs.title}
                      </h2>
                      <span className="font-ui text-xs text-accent tracking-widest uppercase shrink-0 mt-2">
                        {cs.company}
                      </span>
                    </div>
                    <p className="font-body text-secondary leading-relaxed max-w-2xl mb-5 text-sm">
                      {cs.summary}
                    </p>
                    <span className="font-ui text-xs tracking-widest uppercase text-secondary group-hover:text-accent transition-colors duration-200">
                      View Case Study →
                    </span>
                  </div>
                </a>
              </motion.li>
            ))}
          </ul>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="font-body text-secondary py-16 text-center">
            No projects in this category yet.
          </p>
        )}
      </section>
    </main>
  );
}
