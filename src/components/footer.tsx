export function Footer() {
  return (
    <footer className="bg-surface px-(--page-gutter) py-6">
      <div className="section-inner flex justify-center">
        <p className="text-center font-sans text-xs font-semibold uppercase text-text-secondary/55">
          &copy; Amin EL MELLOUKI / {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
