// Each word is its own span so `.cf-glow` can light up a single word on hover.
export default function GlowWords({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\s+)/).map((part, i) =>
        /^\s+$/.test(part) || part === "" ? (
          part
        ) : (
          <span key={i} className="cf-word">
            {part}
          </span>
        )
      )}
    </>
  );
}
