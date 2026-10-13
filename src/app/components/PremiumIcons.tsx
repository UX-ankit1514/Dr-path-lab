import type { ReactNode } from "react";

/* ─────────────────────────────────────────────
   Premium duotone icon set
   One grid (24×24), one stroke weight, rounded joins.
   Navy line carries the shape; a soft brand accent fills the "mass".
   ───────────────────────────────────────────── */

export const NAVY = "#23408E";
export const GOLD = "#FBC52D";

export type IconProps = {
  size?: number;
  color?: string;
  accent?: string;
  strokeWidth?: number;
};

type IconComponent = (props: IconProps) => JSX.Element;

function makeIcon(render: (c: { color: string; accent: string }) => ReactNode): IconComponent {
  return function Icon({ size = 24, color = NAVY, accent = GOLD, strokeWidth = 1.6 }: IconProps) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        {render({ color, accent })}
      </svg>
    );
  };
}

/* ── Services ── */
export const HomeTestIcon = makeIcon(({ accent }) => (
  <>
    <path d="M5 10.6 12 4.8l7 5.8v8.4a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19z" fill={accent} fillOpacity={0.55} stroke="none" />
    <path d="M3.5 11.8 12 4.6l8.5 7.2" />
    <path d="M5.5 10.4V19a1.5 1.5 0 0 0 1.5 1.5h10a1.5 1.5 0 0 0 1.5-1.5v-8.6" />
    <path d="M12 11.2v5.2M9.4 13.8h5.2" />
  </>
));

export const LabTestIcon = makeIcon(({ accent }) => (
  <>
    <rect x="4" y="8" width="16" height="12.5" rx="1.8" fill={accent} fillOpacity={0.55} stroke="none" />
    <rect x="4" y="8" width="16" height="12.5" rx="1.8" />
    <path d="M8.5 8V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v3" />
    <path d="M12 10.6v4M10 12.6h4" />
    <path d="M10.4 20.5v-2.8h3.2v2.8" />
  </>
));

export const NearestLabIcon = makeIcon(({ accent }) => (
  <>
    <path d="M12 21s-6.5-5.4-6.5-10.8a6.5 6.5 0 0 1 13 0C18.5 15.6 12 21 12 21z" fill={accent} fillOpacity={0.55} stroke="none" />
    <path d="M12 21s-6.5-5.4-6.5-10.8a6.5 6.5 0 0 1 13 0C18.5 15.6 12 21 12 21z" />
    <path d="M12 7.6v5.2M9.4 10.2h5.2" />
  </>
));

export const ReportsIcon = makeIcon(({ accent }) => (
  <>
    <rect x="5" y="4.5" width="14" height="16.5" rx="2.2" />
    <rect x="9" y="3" width="6" height="3.2" rx="1.1" fill={accent} />
    <path d="M8.2 16.2 10.6 13.5l2.2 1.8 3-3.8" />
    <path d="M8.2 18.6h7.6" strokeOpacity={0.35} />
  </>
));

export const OrdersIcon = makeIcon(({ accent }) => (
  <>
    <path d="M12 3.2 19.8 7.6 12 12 4.2 7.6z" fill={accent} fillOpacity={0.7} stroke="none" />
    <path d="M12 3.2 19.8 7.6v8.8L12 20.8l-7.8-4.4V7.6z" />
    <path d="M4.2 7.6 12 12l7.8-4.4M12 12v8.8" />
    <path d="M8.1 5.4 15.9 9.8" strokeOpacity={0.5} />
  </>
));

export const PrescriptionIcon = makeIcon(({ accent }) => (
  <>
    <path d="M14 3.2v4.3a.8.8 0 0 0 .8.8h4.3z" fill={accent} stroke="none" />
    <path d="M14 3.2H7.2A2.2 2.2 0 0 0 5 5.4v13.4A2.2 2.2 0 0 0 7.2 21h9.6a2.2 2.2 0 0 0 2.2-2.2V8.3z" />
    <path d="M14 3.2v4.3a.8.8 0 0 0 .8.8h4.3" />
    <path d="M12 17.6v-6M9.6 13.8 12 11.4l2.4 2.4" />
  </>
));

/* ── Health concerns / tests ── */
export const GridIcon = makeIcon(({ accent }) => (
  <>
    <rect x="4" y="4" width="7" height="7" rx="2" fill={accent} stroke="none" />
    <rect x="4" y="4" width="7" height="7" rx="2" />
    <rect x="13" y="4" width="7" height="7" rx="2" />
    <rect x="4" y="13" width="7" height="7" rx="2" />
    <rect x="13" y="13" width="7" height="7" rx="2" fill={accent} stroke="none" />
    <rect x="13" y="13" width="7" height="7" rx="2" />
  </>
));

export const AllergyIcon = makeIcon(({ accent }) => (
  <>
    <circle cx="12" cy="6.4" r="2.6" />
    <circle cx="15.6" cy="10" r="2.6" />
    <circle cx="12" cy="13.6" r="2.6" />
    <circle cx="8.4" cy="10" r="2.6" />
    <circle cx="12" cy="10" r="2" fill={accent} />
    <path d="M12 16.2V21M12 18.6c1.2-1.4 2.6-1.9 4-1.7" />
  </>
));

export const DropIcon = makeIcon(({ accent }) => (
  <>
    <path d="M12 3.4s6 6.3 6 10.6a6 6 0 0 1-12 0c0-4.3 6-10.6 6-10.6z" fill={accent} fillOpacity={0.6} stroke="none" />
    <path d="M12 3.4s6 6.3 6 10.6a6 6 0 0 1-12 0c0-4.3 6-10.6 6-10.6z" />
    <path d="M9.4 14.4a2.6 2.6 0 0 0 2.6 2.6" />
  </>
));

export const ThermometerIcon = makeIcon(({ accent }) => (
  <>
    <circle cx="12" cy="17.2" r="2.3" fill={accent} stroke="none" />
    <path d="M14 14.4V5.2a2 2 0 0 0-4 0v9.2a4 4 0 1 0 4 0z" />
    <path d="M12 9v6.2" />
    <path d="M16.6 6.5h1.6M16.6 9.5h1.6" strokeOpacity={0.45} />
  </>
));

export const HeartIcon = makeIcon(({ accent }) => (
  <>
    <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.1a4.3 4.3 0 0 1 7.5 2.7C19.5 15.4 12 20 12 20z" fill={accent} fillOpacity={0.55} stroke="none" />
    <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.1a4.3 4.3 0 0 1 7.5 2.7C19.5 15.4 12 20 12 20z" />
    <path d="M7.2 12.4h2.3l1.4-2.3 2 4.4 1.4-2.1h2.5" />
  </>
));

export const ThyroidIcon = makeIcon(({ accent }) => (
  <>
    <path d="M11 9.4C9.6 6.2 4.6 5.6 4.6 10.4c0 4.4 3.3 7.6 5.4 7.6 1 0 1-1 1-2.4zM13 9.4c1.4-3.2 6.4-3.8 6.4 1 0 4.4-3.3 7.6-5.4 7.6-1 0-1-1-1-2.4z" fill={accent} fillOpacity={0.55} stroke="none" />
    <path d="M11 9.4C9.6 6.2 4.6 5.6 4.6 10.4c0 4.4 3.3 7.6 5.4 7.6 1 0 1-1 1-2.4zM13 9.4c1.4-3.2 6.4-3.8 6.4 1 0 4.4-3.3 7.6-5.4 7.6-1 0-1-1-1-2.4z" />
    <path d="M11 12.6h2M12 3.6v3" />
  </>
));

export const SunIcon = makeIcon(({ accent }) => (
  <>
    <circle cx="12" cy="12" r="4" fill={accent} />
    <path d="M12 3v1.8M12 19.2V21M3 12h1.8M19.2 12H21M5.6 5.6l1.3 1.3M17.1 17.1l1.3 1.3M5.6 18.4l1.3-1.3M17.1 6.9l1.3-1.3" />
  </>
));

export const MosquitoIcon = makeIcon(({ accent }) => (
  <>
    <path d="M12 9.6c-2.6-3.6-7-4.2-7.4-2.4-.4 1.9 3.4 3.6 7.4 3.4zM12 9.6c2.6-3.6 7-4.2 7.4-2.4.4 1.9-3.4 3.6-7.4 3.4z" fill={accent} fillOpacity={0.55} />
    <ellipse cx="12" cy="14.6" rx="2" ry="4.4" />
    <circle cx="12" cy="7.8" r="1.4" />
    <path d="M12 6.4V3.4M10.2 13 6.6 14.4l-1 3M13.8 13l3.6 1.4 1 3M10.4 16.8l-2.6 2.6M13.6 16.8l2.6 2.6" />
  </>
));

export const SyringeIcon = makeIcon(({ accent }) => (
  <>
    <path d="m14.4 6.4 3.2 3.2-8 8H6.4v-3.2z" fill={accent} fillOpacity={0.6} stroke="none" />
    <path d="m14.4 6.4 3.2 3.2-8 8H6.4v-3.2z" />
    <path d="m13 4.9 6.1 6.1M17.6 3.8l2.6 2.6M18.9 5.1l-2.8 2.8M6.4 17.6l-2.8 2.8M10.2 10.6l1.4 1.4M8.4 12.4l1.4 1.4" />
  </>
));

export const ShieldIcon = makeIcon(({ accent }) => (
  <>
    <path d="M12 3.2 19 6v5.6c0 4.4-3 7.8-7 9.2-4-1.4-7-4.8-7-9.2V6z" fill={accent} fillOpacity={0.55} stroke="none" />
    <path d="M12 3.2 19 6v5.6c0 4.4-3 7.8-7 9.2-4-1.4-7-4.8-7-9.2V6z" />
    <path d="m9 12 2.1 2.1L15.2 10" />
  </>
));

export const LiverIcon = makeIcon(({ accent }) => (
  <>
    <path d="M3.8 10c0-2.6 2-4.2 5.2-4.2h9c1.8 0 2.7 1.3 2.1 2.9C18.6 12.6 15 17 10.4 18.8 6.8 20.2 3.8 17.6 3.8 13.6z" fill={accent} fillOpacity={0.55} stroke="none" />
    <path d="M3.8 10c0-2.6 2-4.2 5.2-4.2h9c1.8 0 2.7 1.3 2.1 2.9C18.6 12.6 15 17 10.4 18.8 6.8 20.2 3.8 17.6 3.8 13.6z" />
    <path d="M12.6 5.8c0 3.8-2 6.8-5.2 8.2" strokeOpacity={0.55} />
  </>
));

export const KidneyIcon = makeIcon(({ accent }) => (
  <>
    <path d="M9.4 3.8C6 3.8 4 7 4 11.4S6 20.2 9.4 20.2c2.6 0 3.2-2 3.2-3.6 0-1.4-1-2.2-1-4.6s1-3.4 1-4.6c0-2-1-3.6-3.2-3.6z" fill={accent} fillOpacity={0.55} stroke="none" />
    <path d="M9.4 3.8C6 3.8 4 7 4 11.4S6 20.2 9.4 20.2c2.6 0 3.2-2 3.2-3.6 0-1.4-1-2.2-1-4.6s1-3.4 1-4.6c0-2-1-3.6-3.2-3.6z" />
    <path d="M11.6 12h3.2c1.6 0 2.4 1 2.4 2.4V21" />
  </>
));

/* ─────────────────────────────────────────────
   Icon tile — soft gradient chip with a top highlight
   and a two-layer shadow so icons sit, not float.
   ───────────────────────────────────────────── */
export function IconTile({
  children,
  size = 48,
  radius = 14,
  tint = "#FFF3C4",
  className = "",
}: {
  children: ReactNode;
  size?: number;
  radius?: number;
  tint?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        background: `linear-gradient(155deg, #FFFFFF 0%, ${tint} 100%)`,
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.95), inset 0 0 0 1px rgba(35,64,142,0.07), 0 1px 2px rgba(16,24,40,0.05), 0 6px 14px -6px rgba(35,64,142,0.18)",
      }}
    >
      {children}
    </div>
  );
}
