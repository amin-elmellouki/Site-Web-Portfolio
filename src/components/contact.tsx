const contactLinks = [
  {
    label: "Email",
    href: "mailto:amin.elmellouki1@gmail.com",
    text: "amin.elmellouki1@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/amin-elmellouki",
    text: "github.com/amin-elmellouki",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/amin-e-a924012b5/",
    text: "linkedin.com/in/amin-e-a924012b5",
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-shell bg-surface pt-0">
      <div className="section-inner">
        <div className="section-header">
          <div className="max-w-3xl">
            <h2 className="mt-5 font-display text-[clamp(2.6rem,5.4vw,4.8rem)] leading-[0.96] tracking-[-0.04em] text-text-primary">
              Parlons de votre projet.
            </h2>
          </div>

        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]">
          <div className="noise bg-wine section-panel">
            <p className="section-kicker section-kicker-wine">Disponible</p>
            <p className="mt-4 max-w-xl font-display text-[clamp(2.1rem,4vw,3.4rem)] leading-[1.01] tracking-[-0.04em] text-text-primary">
              Web, mobile, front-end et back-end.
            </p>
            <p className="mt-5 max-w-lg font-sans text-sm leading-7 text-text-primary/72">
              Je peux intervenir sur un besoin ciblé ou sur un produit complet,
              jusqu&apos;à la mise en ligne.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:amin.elmellouki1@gmail.com"
                className="press-button"
              >
                <span className="press-button__label">Écrire un message</span>
                <span className="press-button__icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="press-button__icon-svg"
                  >
                    <path
                      d="M17 7L7 17"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 7H17V16"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          <div className="noise bg-forest section-panel">
            <p className="section-kicker section-kicker-light">Coordonnées</p>

            <div className="mt-6 space-y-6">
              {contactLinks.map((link) => (
                <ContactLink key={link.label} {...link} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  label,
  href,
  text,
}: {
  label: string;
  href: string;
  text: string;
}) {
  return (
    <div className="grid gap-2">
      <span className="section-kicker section-kicker-light">{label}</span>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-sans text-sm leading-7 text-text-primary transition-colors hover:text-forest-light"
      >
        {text}
      </a>
    </div>
  );
}
