import Image, { type StaticImageData } from "next/image";
import oftSiteHomepage from "@/oft_site_homepage.png";

type Project = {
  title: string;
  description: string;
  perimeter: string;
  stack: string;
  outcome: string;
  year: string;
  status?: string;
  href?: string;
  visual: "platform" | "image" | "pipeline";
  image?: StaticImageData;
  imageAlt?: string;
  accentClass: string;
};

const projects: Project[] = [
  {
    title: "Orléans Futsal - Solution numérique",
    description:
      "Application complète pour un club sportif : API REST, back-office d'administration et application mobile iOS/Android.",
    perimeter: "Conception et développement du produit, du backend aux interfaces métier.",
    stack: "FastAPI / React Native / PostgreSQL / Docker",
    outcome: "Développement en cours pour un usage quotidien par le club.",
    year: "2026",
    status: "En cours",
    visual: "platform",
    accentClass: "text-forest-light",
  },
  {
    title: "Refonte site Orléans Futsal",
    description:
      "Refonte du site officiel du club avec composants JavaScript modulaires, SEO et déploiement Apache.",
    perimeter: "Refonte front, structure de contenu et mise en ligne.",
    stack: "JavaScript / Vite / Tailwind CSS / PHP",
    outcome: "Un site plus lisible, plus crédible et plus simple à maintenir.",
    year: "2025",
    href: "https://orleansfutsal.fr",
    visual: "image",
    image: oftSiteHomepage,
    imageAlt: "Aperçu de la refonte du site Orléans Futsal",
    accentClass: "text-wine-light",
  },
  {
    title: "SAE Consolidation",
    description:
      "Application web Django multi-modules avec pipeline CI/CD GitHub Actions et documentation MkDocs déployée sur GitHub Pages.",
    perimeter: "Développement applicatif, intégration continue et documentation.",
    stack: "Django 5 / MySQL / Docker / GitHub Actions",
    outcome: "Un projet structuré pour l'équipe, avec une chaîne de livraison claire.",
    year: "2025",
    visual: "pipeline",
    accentClass: "text-forest-light",
  },
];

export function Projects() {
  return (
    <section id="work" className="section-shell bg-surface">
      <div className="section-inner">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.8fr)] lg:items-end">
          <div className="max-w-4xl">
            <h2 className="mt-5 font-display text-4xl leading-[0.98] text-text-primary sm:text-5xl lg:text-6xl xl:text-7xl">
              Projets réalisés
            </h2>
          </div>
          <p className="editorial-body max-w-xl lg:pl-8 xl:pl-12">
            Chaque projet montre ma façon d&apos;accompagner un besoin réel :
            cadrer, développer et livrer un produit clair.
          </p>
        </div>

        <div className="mt-12 space-y-16 sm:mt-16 md:mt-20 md:space-y-24 lg:space-y-32">
          {projects.map((project, index) => {
            const reverse = index % 2 === 1;

            return (
              <article
                key={project.title}
                className="project-row grid gap-7 sm:gap-8 lg:grid-cols-12 lg:items-start"
              >
                <div
                  className={`project-frame relative overflow-hidden lg:col-span-7 ${
                    reverse ? "lg:col-start-6" : ""
                  }`}
                >
                  <ProjectVisual project={project} index={index} />
                </div>

                <div
                  className={`lg:col-span-4 ${
                    reverse
                      ? "lg:col-start-1 lg:row-start-1 lg:pt-12"
                      : "lg:col-start-9 lg:-mt-12"
                  }`}
                >
                  <p className="section-kicker">
                    {String(index + 1).padStart(2, "0")} / {project.year}
                  </p>
                  <h3 className="mt-4 font-display text-3xl leading-[1.02] text-text-primary sm:text-4xl lg:text-5xl">
                    {project.title}
                  </h3>

                  {project.status ? (
                    <p
                      className={`mt-4 font-sans text-xs font-semibold uppercase ${project.accentClass}`}
                    >
                      {project.status}
                    </p>
                  ) : null}

                  <p className="mt-5 font-sans text-sm leading-7 text-text-secondary">
                    {project.description}
                  </p>

                  <dl className="mt-8 space-y-6">
                    <div>
                      <dt className="section-kicker">Périmètre</dt>
                      <dd className="mt-2 font-sans text-sm leading-7 text-text-primary">
                        {project.perimeter}
                      </dd>
                    </div>
                    <div>
                      <dt className="section-kicker">Stack</dt>
                      <dd className="mt-2 font-sans text-sm leading-7 text-text-primary">
                        {project.stack}
                      </dd>
                    </div>
                    <div>
                      <dt className="section-kicker">Impact</dt>
                      <dd className="mt-2 font-sans text-sm leading-7 text-text-secondary">
                        {project.outcome}
                      </dd>
                    </div>
                  </dl>

                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-trace mt-8"
                    >
                      Explorer le projet
                    </a>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const marker = String(index + 1).padStart(2, "0");

  if (project.visual === "image" && project.image && project.imageAlt) {
    return (
      <div className="relative overflow-hidden bg-surface-high p-3 sm:p-4">
        <div className="relative aspect-[4/3] overflow-hidden bg-surface sm:aspect-[16/10]">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            className="object-contain object-center transition-transform duration-700 ease-out"
            placeholder="blur"
            sizes="(min-width: 1024px) 55vw, 100vw"
          />
        </div>
        <span className="pointer-events-none absolute bottom-4 right-5 font-accent text-5xl leading-none text-text-primary/10 sm:text-7xl">
          {marker}
        </span>
      </div>
    );
  }

  if (project.visual === "pipeline") {
    return (
      <div className="noise relative min-h-[21rem] bg-surface-high p-4 sm:min-h-88 sm:p-6 lg:p-8">
        <div className="grid gap-4 md:grid-cols-[0.85fr_1.15fr]">
          <div className="flex min-h-[13rem] flex-col justify-between bg-wine px-5 py-5 sm:min-h-64 sm:px-6 sm:py-6">
            <div>
              <p className="section-kicker section-kicker-wine">Pipeline</p>
              <p className="mt-4 font-display text-4xl leading-none text-text-primary sm:text-6xl">
                CI/CD
              </p>
            </div>
            <p className="font-sans text-xs leading-6 text-text-primary/72">
              Build, documentation et déploiement gérés dans la même chaîne.
            </p>
          </div>

          <div className="grid gap-3">
            {[
              "Application Django multi-modules",
              "Pipeline GitHub Actions",
              "Documentation MkDocs en ligne",
            ].map((item) => (
              <div key={item} className="bg-surface px-5 py-5">
                <p className="font-sans text-sm leading-7 text-text-primary">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <span className="pointer-events-none absolute bottom-4 right-5 font-accent text-5xl leading-none text-text-primary/10 sm:text-7xl">
          {marker}
        </span>
      </div>
    );
  }

  return (
    <div className="noise relative min-h-[21rem] bg-forest p-4 sm:min-h-88 sm:p-6 lg:p-8">
      <div className="grid h-full gap-4 md:grid-cols-[1.1fr_0.9fr]">
        <div className="flex min-h-[13rem] flex-col justify-between bg-surface px-5 py-5 sm:min-h-64 sm:px-6 sm:py-6">
          <div>
            <p className="section-kicker section-kicker-light">API</p>
            <p className="mt-4 font-display text-4xl leading-none text-text-primary sm:text-5xl">
              FastAPI
            </p>
          </div>
          <p className="font-sans text-xs leading-6 text-text-secondary">
            Architecture claire, données fiables et base robuste pour les
            outils métier.
          </p>
        </div>

        <div className="grid gap-4">
          <div className="flex flex-col justify-between bg-surface-high px-5 py-5 sm:px-6 sm:py-6">
            <p className="section-kicker">Admin</p>
            <p className="mt-4 font-display text-3xl leading-none text-text-primary">
              Back-office
            </p>
          </div>
          <div className="flex flex-col justify-between bg-wine px-5 py-5 sm:px-6 sm:py-6">
            <p className="section-kicker section-kicker-wine">Mobile</p>
            <p className="mt-4 font-display text-3xl leading-none text-text-primary">
              iOS / Android
            </p>
          </div>
        </div>
      </div>

      <span className="pointer-events-none absolute bottom-4 right-5 font-accent text-5xl leading-none text-text-primary/10 sm:text-7xl">
        {marker}
      </span>
    </div>
  );
}
