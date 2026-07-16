export default function SectionEyebrow({ children }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-primary">
      <span className="h-px w-8 bg-primary/60" />
      {children}
    </div>
  );
}
