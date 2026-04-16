"use client";

import { useState } from "react";

const links = [
  { label: "Projets", href: "#work" },
  { label: "Technologies", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav aria-label="Navigation principale" className="fixed inset-x-0 top-0 z-50">
      <div className="nav-inner px-(--page-gutter) py-3 sm:py-4">
        <div className="flex justify-center">
          <div className="hidden min-w-0 items-center gap-1 border border-text-primary/10 bg-surface/88 p-1.5 backdrop-blur-xl md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-3 font-sans text-xs font-semibold uppercase text-text-primary/82 transition-colors duration-150 hover:text-forest-light lg:px-5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="flex min-h-12 items-center gap-3 border border-text-primary/10 bg-surface/88 px-4 py-3 backdrop-blur-xl md:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span className="font-sans text-xs font-semibold uppercase text-text-primary">
              {open ? "Fermer" : "Menu"}
            </span>
            <span className="grid w-5 gap-1.5" aria-hidden="true">
              <span
                className={`block h-px w-5 bg-text-primary transition-transform duration-200 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-5 bg-text-primary transition-opacity duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-5 bg-text-primary transition-transform duration-200 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`overflow-hidden transition-all duration-200 ease-out md:hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="nav-inner flex justify-center px-(--page-gutter) pb-2">
          <div className="grid w-full max-w-sm gap-2 border border-text-primary/10 bg-surface-low/96 p-2 backdrop-blur-xl">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex justify-center px-5 py-4 font-sans text-xs font-semibold uppercase text-text-primary transition-colors duration-150 hover:text-forest-light"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
