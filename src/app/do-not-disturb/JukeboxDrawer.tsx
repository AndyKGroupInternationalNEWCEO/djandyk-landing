"use client";

import type { ReactNode } from "react";

export const DRAWER_SLIDE_MS = 520;
const EASE = "cubic-bezier(0.19,1,0.22,1)";

/**
 * A single mechanical glass drawer that slides out from behind the jukebox
 * cabinet on a brass rail. `desktop` mode slides horizontally and is
 * position:absolute so it never affects the cabinet's own layout — the
 * cabinet's screen position never moves regardless of drawer state.
 * `mobile` mode instead slides up as a full-width sheet below the cabinet,
 * in normal document flow.
 */
export default function JukeboxDrawer({
  side,
  label,
  open,
  mode,
  reducedMotion,
  accent,
  onClose,
  children,
}: {
  side: "left" | "right";
  label: string;
  open: boolean;
  mode: "desktop" | "mobile";
  reducedMotion: boolean;
  accent: string;
  onClose: () => void;
  children: ReactNode;
}) {
  const duration = reducedMotion ? 120 : DRAWER_SLIDE_MS;

  const shellStyle: React.CSSProperties =
    mode === "desktop"
      ? {
          position: "absolute",
          top: "50%",
          // Anchor to the edge *touching* the cabinet (the opposite side of
          // its own grid cell) — left drawer's right edge meets the
          // cabinet's left edge, and vice versa — not the cell's outer edge.
          [side === "left" ? "right" : "left"]: 0,
          // Fluid rather than a hard 420px so it never overflows the side
          // gutter at the low end of the "wide" breakpoint — still reaches
          // the full 420px target on genuinely wide screens.
          width: "clamp(320px, 30vw, 420px)",
          maxWidth: "calc(100vw - 48px)",
          transform: `translateY(-50%) translateX(${
            // 112%, not 100% — a small overshoot so the closed drawer is
            // fully swallowed by the cabinet with margin to spare, instead
            // of landing exactly flush with its edge (which at the narrow
            // end of the fluid width can leave a hairline sliver visible).
            open ? "0" : side === "left" ? "112%" : "-112%"
          })`,
          transition: `transform ${duration}ms ${EASE}`,
          // Closed drawers must paint *behind* the cabinet (z-index 10) so
          // they're actually hidden, not just moved partway under it.
          zIndex: open ? 20 : 1,
          pointerEvents: open ? "auto" : "none",
        }
      : {
          position: "relative",
          width: "100%",
          maxHeight: open ? 420 : 0,
          opacity: open ? 1 : 0,
          overflow: "hidden",
          transition: `max-height ${duration}ms ${EASE}, opacity ${duration}ms ${EASE}`,
          pointerEvents: open ? "auto" : "none",
        };

  return (
    <div style={shellStyle} aria-hidden={!open}>
      {/* Brass rail stub connecting the drawer to the cabinet edge */}
      {mode === "desktop" && (
        <div
          className="absolute top-1/2 -translate-y-1/2"
          style={{
            [side === "left" ? "right" : "left"]: -18,
            width: 18,
            height: 6,
            background: "linear-gradient(90deg, #7a5e18, #f0d27a, #7a5e18)",
            boxShadow: "0 0 6px rgba(201,162,39,0.5)",
          }}
        />
      )}

      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: "rgba(10,9,8,0.82)",
          backdropFilter: "blur(10px) saturate(140%)",
          WebkitBackdropFilter: "blur(10px) saturate(140%)",
          border: `1px solid ${accent}55`,
          boxShadow: "0 30px 70px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        {/* Corner rivets */}
        {[
          { top: 10, left: 10 },
          { top: 10, right: 10 },
          { bottom: 10, left: 10 },
          { bottom: 10, right: 10 },
        ].map((pos, i) => (
          <span
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{ ...pos, background: "#7a5e18", boxShadow: "0 0 3px rgba(240,210,122,0.6)" }}
          />
        ))}

        <div className="px-6 sm:px-7 pt-6 pb-3 flex items-center justify-between">
          <p
            className="text-[10px] font-mono uppercase tracking-[0.35em]"
            style={{ color: `${accent}CC` }}
          >
            {label}
          </p>
          <button
            onClick={onClose}
            aria-label={`Close ${label}`}
            className="w-6 h-6 rounded-full flex items-center justify-center transition-opacity hover:opacity-70"
            style={{ color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.15)" }}
          >
            <span style={{ fontSize: 12, lineHeight: 1 }}>×</span>
          </button>
        </div>

        <div className="px-6 sm:px-7 pb-7">{children}</div>
      </div>
    </div>
  );
}
