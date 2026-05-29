"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "../content";

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/95 backdrop-blur-sm"
      style={{ backdropFilter: "blur(8px)" }}
    >
      <div className="mx-auto flex max-w-container items-center justify-between px-8 py-5">
        {/* Logo */}
        <Link
          href="/"
          className="font-ui text-xs tracking-[0.2em] uppercase text-primary hover:text-accent transition-colors duration-200"
        >
          {nav.name}
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {nav.links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative font-ui text-xs tracking-[0.15em] uppercase transition-colors duration-200 group ${
                    isActive
                      ? "text-accent"
                      : "text-secondary hover:text-primary"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ease-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden font-ui text-xs tracking-widest uppercase text-secondary hover:text-primary transition-colors"
          aria-label="Toggle navigation"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-surface">
          <ul className="flex flex-col px-8 py-6 gap-6">
            {nav.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-ui text-xs tracking-[0.15em] uppercase transition-colors ${
                    pathname === link.href ? "text-accent" : "text-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
