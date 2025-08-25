"use client";

export function WavyPattern() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="w-full h-full"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: "hsl(var(--accent))", stopOpacity: 0.6 }} />
        </linearGradient>
      </defs>
      <path
        fill="url(#wave-gradient)"
        fillOpacity="1"
        d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,176C672,171,768,181,864,192C960,203,1056,213,1152,202.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
      <path
        fill="url(#wave-gradient)"
        fillOpacity="0.5"
        d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,229.3C672,245,768,235,864,208C960,181,1056,139,1152,128C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  );
}
