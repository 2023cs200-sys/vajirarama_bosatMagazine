import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Bookmark,
  BookmarkCheck,
  Play,
  Pause,
  Sun,
  Moon,
  Type,
  Minus,
  Plus,
  Highlighter,
  Languages,
  Share2,
} from "lucide-react";
import Container from "@/components/common/Container";

const fonts = ["sans", "serif", "mono"];

export default function Reader() {
  const { id } = useParams();
  const [fontSize, setFontSize] = useState(16);
  const [isDark, setIsDark] = useState(false);
  const [fontFamily, setFontFamily] = useState("serif");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const article = {
    title: "The Silent Stones of Anuradhapura",
    author: "Ven. Dhammika Thero",
    tag: "Heritage",
    readTime: 8,
    body: [
      "Before dawn the trees hold a stillness older than words. The monks step from their kutis one by one, sweeping the path with a slow, deliberate care — an offering made not to anyone in particular, but to the morning itself.",
      "Anuradhapura rises from the dry zone like a question the earth forgot to answer. These are not ruins in the European sense — no fallen empire to mourn, no shattered ambition. The stones were never meant to last; they were placed here as reminders, each dressed stone a small dharma gate.",
      "At the Ruwanwelisaya, the dome catches the first light before the rest of the city has woken. Pigeons stir in the niches; a novice monk circumambulates with a palm-leaf manuscript tucked under his arm. The air smells of rain on hot granite and night-blooming jasmine.",
      "What survives is not architecture but intention. The ancient chronicles record that King Dutugamunu built not for glory but for the continuation of the sasana — the dispensation of the Buddha's word. Every pillar, every moonstone, every guard stone was a deliberate act of devotion, a bookmark in the long scroll of Dhamma.",
      "Walking the sacred city at dawn, we trace the outlines of a civilisation that measured its greatness in acts of compassion, not conquest. The Brahmins who inscribed the earliest Sinhala on rock, the masons who carved the guard stones with their cobra hoods and dwarf attendants, the generations of monks who kept the Tipitaka alive on ola leaves — all of them understood something we are in danger of forgetting.",
      "That a civilisation is not built by what it takes, but by what it offers.",
      "The Isurumuniya rock shelters face a tank that still holds water after two millennia. Boys swim in it at noon; women wash clothes at the steps. Life continues around the old stones, indifferent to archaeology. A civilisation that remains alive in the daily round of rice and water and prayer is not a ruin at all.",
      "As the sun climbs and the shadows shorten, the stones grow quiet again. The monks have retreated to their kutis. The pilgrims have left their lotus flowers and departed. The great white dagaba glows in the midday heat, a bell that has stopped ringing — but whose silence, if you listen closely, is the truest teaching of all.",
    ],
  };

  const progress = 67;

  return (
    <>
  
      <div className="border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <Container className="flex h-14 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              to="/article/1"
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground/60 transition hover:text-primary"
              aria-label="Back to article"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <span className="hidden text-sm text-foreground/50 sm:inline">
              {article.tag} · {article.readTime} min
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1 rounded-full border border-border px-2 md:flex">
              <button
                onClick={() => setFontSize((s) => Math.max(12, s - 1))}
                className="grid h-8 w-8 place-items-center text-foreground/60 hover:text-primary"
                aria-label="Decrease font size"
              >
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span className="w-8 text-center text-xs text-foreground/70">{fontSize}px</span>
              <button
                onClick={() => setFontSize((s) => Math.min(28, s + 1))}
                className="grid h-8 w-8 place-items-center text-foreground/60 hover:text-primary"
                aria-label="Increase font size"
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="hidden items-center gap-1 rounded-full border border-border px-1 md:flex">
              {fonts.map((f) => (
                <button
                  key={f}
                  onClick={() => setFontFamily(f)}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                    fontFamily === f
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/60 hover:text-primary"
                  }`}
                >
                  {f === "sans" ? "Sans" : f === "serif" ? "Serif" : "Mono"}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsDark(!isDark)}
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground/60 transition hover:text-primary"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground/60 transition hover:text-primary"
              aria-label={isPlaying ? "Pause audio" : "Play audio"}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>

            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground/60 transition hover:text-primary"
              aria-label={isBookmarked ? "Remove bookmark" : "Bookmark this article"}
            >
              {isBookmarked ? (
                <BookmarkCheck className="h-4 w-4 text-primary" />
              ) : (
                <Bookmark className="h-4 w-4" />
              )}
            </button>

            <button
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground/60 transition hover:text-primary"
              aria-label="Share"
            >
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </Container>

        <div className="h-0.5 w-full bg-muted">
          <div
            className="h-full bg-gradient-to-r from-primary to-secondary transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <Container className="py-16">
        <article
          className="mx-auto max-w-2xl"
          style={{
            fontSize: `${fontSize}px`,
            fontFamily:
              fontFamily === "serif"
                ? "Georgia, 'Times New Roman', serif"
                : fontFamily === "mono"
                  ? "'Courier New', monospace"
                  : "system-ui, sans-serif",
          }}
        >
          <div className="mb-10">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary">
              <span className="rounded-full bg-primary/15 px-2.5 py-0.5 font-semibold">{article.tag}</span>
              <span className="text-foreground/40">·</span>
              <span className="text-foreground/50">{article.author}</span>
            </div>
            <h1 className="mt-4 font-display text-4xl font-light leading-tight text-foreground sm:text-5xl">
              {article.title}
            </h1>
          </div>

          <div className="space-y-6 leading-relaxed text-foreground/80">
            {article.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-3 border-t border-border/60 pt-8">
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground/70 transition hover:border-primary hover:text-primary"
            >
              {isBookmarked ? (
                <BookmarkCheck className="h-4 w-4 text-primary" />
              ) : (
                <Bookmark className="h-4 w-4" />
              )}
              {isBookmarked ? "Saved" : "Save"}
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground/70 transition hover:border-primary hover:text-primary">
              <Highlighter className="h-4 w-4" /> Highlight
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground/70 transition hover:border-primary hover:text-primary">
              <Languages className="h-4 w-4" /> සිංහල
            </button>
          </div>
        </article>
      </Container>

    </>
  );
}
