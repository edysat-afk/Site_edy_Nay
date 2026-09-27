export function SectionHeading({
  eyebrow,
  titulo,
  intro,
  light = false,
}: {
  eyebrow: string;
  titulo: string;
  intro?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <div className="inline-flex items-center gap-2.5">
        <span
          className={`h-2.5 w-2.5 rounded-full ${
            light ? "bg-text-on-light" : "bg-accent animate-pulse"
          }`}
        />
        <p
          className={`font-mono text-sm uppercase tracking-[0.12em] font-bold ${
            light ? "text-text-on-light/80" : "text-accent"
          }`}
        >
          {eyebrow}
        </p>
      </div>

      <h2
        className={`mt-4 font-display text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl ${
          light ? "text-text-on-light" : "text-text"
        }`}
      >
        {titulo}
      </h2>

      {intro && (
        <p
          className={`mt-5 text-lg leading-relaxed md:text-xl ${
            light ? "text-text-on-light/80" : "text-text-muted"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
