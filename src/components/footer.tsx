export function Footer() {
  return (
    <footer className="bg-surface-lowest px-(--page-gutter) py-6">
      <div className="section-inner flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.26em] text-text-secondary/55">
          Amin EL MELLOUKI / {new Date().getFullYear()}
        </p>
        <p className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.26em] text-text-secondary/35">
          Développement web et mobile
        </p>
      </div>
    </footer>
  );
}
