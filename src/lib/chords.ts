// Spells the notes of simple triads ("B", "F#m", "Ebm", …) from a chord
// progression string like "B – F#m – G#m – E". Used by the song sheets to
// draw keyboard diagrams; anything that isn't a plain major/minor triad is
// returned without notes rather than guessed.

const LETTERS = ["C", "D", "E", "F", "G", "A", "B"];
const NATURAL_PC = [0, 2, 4, 5, 7, 9, 11];

export interface ChordNotes {
  name: string;
  notes: string[];
  /** Pitch classes (0 = C) of the chord tones, root first. */
  pitchClasses: number[];
}

function spell(letterIndex: number, pc: number) {
  const letter = LETTERS[letterIndex % 7];
  let diff = (pc - NATURAL_PC[letterIndex % 7] + 12) % 12;
  if (diff > 6) diff -= 12;
  const acc = diff === 0 ? "" : diff > 0 ? "#".repeat(diff) : "b".repeat(-diff);
  return letter + acc;
}

export function parseChord(name: string): ChordNotes {
  const m = /^([A-G])([#b]?)(m?)$/.exec(name.trim());
  if (!m) return { name, notes: [], pitchClasses: [] };
  const li = LETTERS.indexOf(m[1]);
  const root = (NATURAL_PC[li] + (m[2] === "#" ? 1 : m[2] === "b" ? -1 : 0) + 12) % 12;
  const third = (root + (m[3] ? 3 : 4)) % 12;
  const fifth = (root + 7) % 12;
  return {
    name,
    notes: [m[1] + m[2], spell(li + 2, third), spell(li + 4, fifth)],
    pitchClasses: [root, third, fifth],
  };
}

export function parseProgression(chords: string): ChordNotes[] {
  return chords
    .split(/\s*[–—-]\s*/)
    .filter(Boolean)
    .map(parseChord);
}
