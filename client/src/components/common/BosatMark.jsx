export default function BosatMark() {
  return (
    <svg viewBox="0 0 40 40" className="h-8 w-8" aria-hidden>
      <defs>
        <linearGradient id="bg1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="var(--saffron)" />
          <stop offset="1" stopColor="var(--gold)" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="18" fill="none" stroke="url(#bg1)" strokeWidth="1.2" />
      <path
        d="M20 8c3 4 6 7 6 12a6 6 0 1 1-12 0c0-5 3-8 6-12z"
        fill="url(#bg1)"
      />
      <circle cx="20" cy="30" r="1.5" fill="var(--cocoa)" />
    </svg>
  );
}
