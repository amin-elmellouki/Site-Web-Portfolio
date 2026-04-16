const stacks = [
  {
    name: "React",
    role: "Interface",
    note: "Pour construire des interfaces claires et maintenables.",
  },
  {
    name: "Next.js",
    role: "Framework",
    note: "Pour les projets qui demandent performance, structure et SEO.",
  },
  {
    name: "FastAPI",
    role: "Backend",
    note: "Pour développer des API rapides et simples à maintenir.",
  },
  {
    name: "React Native",
    role: "Mobile",
    note: "Pour livrer sur iOS et Android avec une seule base de code.",
  },
  {
    name: "PostgreSQL",
    role: "Data",
    note: "Pour gérer des données fiables et faire évoluer un produit sereinement.",
  },
  {
    name: "Docker",
    role: "Delivery",
    note: "Pour garder un environnement stable jusqu'à la production.",
  },
];

export function Stacks() {
  return (
    <section id="stack" className="section-shell bg-surface">
      <div className="section-inner">
        <div className="section-header">
          <div className="max-w-3xl">
            <h2 className="mt-5 font-display text-4xl leading-[1.02] text-text-primary sm:text-5xl lg:text-6xl">
              Outils que j&apos;aime utiliser
            </h2>
          </div>

          <p className="editorial-body section-header-copy">
            Je choisis des outils fiables, lisibles et adaptés au besoin.
          </p>
        </div>

        <div className="mt-8 space-y-3 sm:mt-10">
          {stacks.map((stack, index) => (
            <div
              key={stack.name}
              className={`grid gap-4 px-4 py-5 sm:px-6 sm:py-6 md:grid-cols-[minmax(12rem,0.72fr)_minmax(0,1fr)] ${
                index % 2 === 0 ? "bg-surface-low" : "bg-surface-high"
              }`}
            >
              <div>
                <p className="font-display text-2xl leading-none text-text-primary sm:text-[2rem]">
                  {stack.name}
                </p>
              </div>

              <p className="max-w-2xl font-sans text-sm leading-7 text-text-secondary">
                {stack.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
