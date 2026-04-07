"use client";

import { useState } from "react";

const links = [
  { label: "Projets", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      aria-label="Navigation principale"
      className="fixed inset-x-0 top-0 z-50 bg-surface"
    >
      <div className="nav-inner px-(--page-gutter) py-4">
        <div className="flex items-center justify-between gap-6">
          <a href="#page-top" onClick={() => setOpen(false)} className="grid">
            <span className="section-kicker section-kicker-light">
              Portfolio
            </span>
            <span className="mt-1 font-serif text-2xl leading-none tracking-[-0.04em] text-text-primary">
              Amin EL MELLOUKI
            </span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.24em] text-text-primary transition-colors hover:text-forest-light"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="flex min-h-12 min-w-12 flex-col items-center justify-center gap-1.5 bg-surface-low md:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span
              className={`block h-px w-5 bg-text-primary transition-transform duration-200 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-text-primary transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-text-primary transition-transform duration-200 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`overflow-hidden bg-surface-low transition-all duration-200 ease-out md:hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="nav-inner grid gap-3 px-(--page-gutter) py-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-5 py-4 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
