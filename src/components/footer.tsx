export function Footer() {
  return (
    <footer className="bg-surface px-(--page-gutter) py-6">
      <div className="section-inner flex justify-center">
        <p className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.26em] text-text-secondary/55">
          &copy; Amin EL MELLOUKI / {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
