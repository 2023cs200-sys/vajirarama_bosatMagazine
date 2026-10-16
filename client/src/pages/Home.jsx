import {
  BookOpen,
  Download,
  Bookmark,
  Search,
  Moon,
  Sun,
  ArrowRight,
  Sparkles,
  Languages,
  Headphones,
  Type,
  Highlighter,
  Play,
  Mail,
  Send,
  Flame,
  BookMarked,
  Landmark,
  History,
  GraduationCap,
  Palette,
  Heart,
  ScrollText,
} from "lucide-react";
import heroBuddha from "@/assets/images/hero-buddha.jpg";
import issueCover from "@/assets/images/issue-cover.jpg";
import article1 from "@/assets/images/article-1.jpg";
import article2 from "@/assets/images/article-2.jpg";
import article3 from "@/assets/images/article-3.jpg";
import Divider from "@/components/common/Divider";
import Container from "@/components/common/Container";
import SectionEyebrow from "@/components/common/SectionEyebrow";

/* ---------- data ---------- */

const categories = [
  { icon: BookMarked, title: "Buddhist Teachings", si: "බෞද්ධ ධර්මය", desc: "Core Dhamma essays and reflections." },
  { icon: Moon, title: "Poya Day Significance", si: "පොහොය දිනය", desc: "The story behind each full-moon Poya." },
  { icon: Landmark, title: "Sri Lankan Heritage", si: "ශ්‍රී ලාංකේය උරුමය", desc: "Temples, monuments, living traditions." },
  { icon: History, title: "Buddhist History", si: "බෞද්ධ ඉතිහාසය", desc: "From India to the island — 2,500 years." },
  { icon: GraduationCap, title: "Sinhala Language", si: "සිංහල භාෂාව", desc: "Grammar, literature, classical texts." },
  { icon: Palette, title: "Cultural Articles", si: "සංස්කෘතික", desc: "Art, music, cuisine, festivals." },
  { icon: Heart, title: "Inspirational Stories", si: "ආදර්ශ කථා", desc: "Lives touched by mindful practice." },
  { icon: ScrollText, title: "Pali Learning", si: "පාළි ඉගෙනුම", desc: "Language of the earliest suttas." },
];

const articles = [
  {
    img: article1,
    tag: "Heritage",
    title: "The Silent Stones of Anuradhapura",
    author: "Ven. Dhammika Thero",
    preview:
      "Walking the sacred city at dawn, we trace the outlines of a civilisation that measured its greatness in acts of compassion, not conquest.",
    minutes: 8,
  },
  {
    img: article2,
    tag: "Pali",
    title: "Reading the Palm Leaves: A Beginner's Guide",
    author: "Prof. Kumari Ranasinghe",
    preview:
      "How ancient scribes preserved the Tipitaka on ola leaves — and what those quiet marks still teach a modern reader.",
    minutes: 6,
  },
  {
    img: article3,
    tag: "Poya",
    title: "Vesak: The Threefold Blessing Reconsidered",
    author: "Bhikkhu Ariyawansa",
    preview:
      "Birth, enlightenment, parinibbana — a meditation on why a single full moon carries the weight of an entire path.",
    minutes: 11,
  },
];

const archive = [
  { month: "Vesak Special", year: "2026", tag: "Featured" },
  { month: "April", year: "2026" },
  { month: "March", year: "2026" },
  { month: "February", year: "2026" },
  { month: "January", year: "2026" },
  { month: "December", year: "2025" },
];

/* ---------- sections ---------- */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={heroBuddha}
        alt=""
        width={1920}
        height={1280}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-multiply"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      <Container className="relative py-24 md:py-36">
        <div className="max-w-3xl bosat-fade-up">
          <SectionEyebrow>Monthly · Est. 2019 · Colombo</SectionEyebrow>
          <h1 className="font-display text-5xl font-light leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            <span className="block">Wisdom for a</span>
            <span className="block italic bosat-gradient-text">restless age.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/70">
            <span className="font-sinhala text-foreground/90">
              ප්‍රඥාවෙන් හා මානව සංවර්ධනයෙන් ජාතිය ගොඩනැංවීම.
            </span>
            <br />
            Building the nation through wisdom and human development — a monthly
            journal of Buddhist thought, heritage and everyday practice.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#latest-issue"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:brightness-105"
            >
              <BookOpen className="h-4 w-4" />
              Read Latest Issue
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#categories"
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-cream px-6 py-3.5 text-sm font-medium text-accent transition hover:border-accent hover:bg-accent hover:text-accent-foreground"
            >
              Explore Articles
            </a>
            <a
              href="#archive"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-foreground/70 transition hover:text-primary"
            >
              Monthly Publications
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <dl className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {[
              ["84", "Issues"],
              ["620+", "Articles"],
              ["12k", "Readers"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-3xl font-light text-foreground">{n}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-foreground/50">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}

function LatestIssue() {
  return (
    <section id="latest-issue" className="py-24 md:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_1.15fr]">
          <div className="relative">
            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative mx-auto max-w-sm bosat-hover-lift">
              <div className="absolute -top-4 left-6 z-10 rounded-full bg-accent px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-accent-foreground">
                Issue No. 84
              </div>
              <img
                src={issueCover}
                alt="Current BOSAT issue cover"
                width={900}
                height={1200}
                loading="lazy"
                className="aspect-[3/4] w-full rounded-2xl object-cover shadow-[var(--shadow-soft)] ring-1 ring-border/60"
              />
              <div className="absolute inset-x-6 -bottom-4 h-6 rounded-b-2xl bg-accent/20 blur-md" />
            </div>
          </div>

          <div>
            <SectionEyebrow>The Current Issue · April 2026</SectionEyebrow>
            <h2 className="font-display text-4xl font-light leading-tight text-foreground sm:text-5xl md:text-6xl">
              The Lotus <em className="bosat-gradient-text not-italic">still opens</em> at dawn.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/70">
              This month we return to the beginning — a slow reading of the
              first sermon, a photographic journey through the ruins of
              Polonnaruwa, and a conversation with three young monks on
              digital silence.
            </p>

            <ul className="mt-8 space-y-3 text-sm text-foreground/70">
              {[
                "Feature: The Wheel Turned Twice — a reflection on Dhammacakkappavattana",
                "Portfolio: Twelve mornings at the Gal Vihara",
                "Essay: Sinhala poetry after the war",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:bg-primary">
                <BookOpen className="h-4 w-4" /> Read Online
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-cream px-6 py-3 text-sm font-medium text-accent transition hover:border-accent">
                <Download className="h-4 w-4" /> Download PDF
              </button>
              <button className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground/70 transition hover:text-primary">
                <Bookmark className="h-4 w-4" /> Save for Later
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Categories() {
  return (
    <section id="categories" className="py-24 md:py-28">
      <Container>
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <SectionEyebrow>Eight Streams · Aṭṭhaṅgika</SectionEyebrow>
            <h2 className="font-display text-4xl font-light leading-tight sm:text-5xl">
              Reading paths through the tradition.
            </h2>
          </div>
          <p className="max-w-md text-sm text-foreground/60">
            Every article in BOSAT belongs to one of eight editorial streams —
            from the earliest suttas to the streets of modern Colombo.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <a
              key={c.title}
              href="#"
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-6 bosat-hover-lift"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 transition group-hover:bg-primary/15" />
              <div className="relative">
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-accent/5 text-accent ring-1 ring-accent/15 transition group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground">
                  {c.title}
                </h3>
                <p className="mt-1 font-sinhala text-sm text-foreground/60">{c.si}</p>
                <p className="mt-3 text-sm text-foreground/60">{c.desc}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary opacity-0 transition group-hover:opacity-100">
                  Explore <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FeaturedArticles() {
  return (
    <section className="py-24 md:py-28">
      <Container>
        <div className="mb-14 max-w-2xl">
          <SectionEyebrow>Featured Reading</SectionEyebrow>
          <h2 className="font-display text-4xl font-light leading-tight sm:text-5xl">
            Long-form essays for the quiet hour.
          </h2>
        </div>

        <div className="space-y-6">
          {articles.map((a) => (
            <article
              key={a.title}
              className="group grid gap-6 overflow-hidden rounded-3xl border border-border/70 bg-card p-4 transition hover:border-primary/40 hover:shadow-[var(--shadow-soft)] md:grid-cols-[minmax(0,320px)_minmax(0,1fr)] md:p-5"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={a.img}
                  alt={a.title}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="aspect-[4/3] h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-accent backdrop-blur">
                  {a.tag}
                </span>
              </div>
              <div className="flex flex-col justify-center py-2 pr-2 md:py-6">
                <div className="text-xs uppercase tracking-widest text-foreground/50">
                  {a.author} · {a.minutes} min read
                </div>
                <h3 className="mt-3 font-display text-2xl font-medium leading-snug text-foreground sm:text-3xl md:text-[2rem]">
                  {a.title}
                </h3>
                <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-foreground/65">
                  {a.preview}
                </p>
                <div className="mt-6">
                  <button className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Continue reading
                    <ArrowRight className="h-4 w-4 transition group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 rounded-full border border-accent/30 px-6 py-3 text-sm font-medium text-accent transition hover:border-accent hover:bg-accent hover:text-accent-foreground">
            View all articles <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </Container>
    </section>
  );
}

function ReadingExperience() {
  const features = [
    { icon: Sun, label: "Light / Dark" },
    { icon: Type, label: "Font Sizing" },
    { icon: Languages, label: "Sinhala Fonts" },
    { icon: Headphones, label: "Audio Reading" },
    { icon: Highlighter, label: "Highlights" },
    { icon: Bookmark, label: "Bookmarks" },
  ];
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-gradient-to-b from-accent/[0.03] to-transparent" />
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionEyebrow>The Reader</SectionEyebrow>
            <h2 className="font-display text-4xl font-light leading-tight sm:text-5xl">
              A reading room in your pocket.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-foreground/65">
              Every article opens in a considered reading environment —
              typography set with care, ambient dark mode for evening study,
              and audio narration for the road.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-3 rounded-xl border border-border/70 bg-card px-4 py-3"
                >
                  <f.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground/80">{f.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <Sparkles className="h-3 w-3" /> AI Summariser
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/15 px-3 py-1 text-xs font-medium text-accent">
                <Languages className="h-3 w-3" /> Sinhala ⇄ English
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                <Flame className="h-3 w-3" /> Reading Streaks
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/10 blur-2xl" />
            <div className="relative rounded-3xl bosat-glass p-6 shadow-[var(--shadow-soft)]">
              <div className="flex items-center justify-between border-b border-border/60 pb-4">
                <div className="flex items-center gap-2 text-xs text-foreground/60">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Reading · 4 min left
                </div>
                <div className="flex items-center gap-2">
                  <button className="grid h-8 w-8 place-items-center rounded-full border border-border text-foreground/60 hover:text-primary">
                    <Play className="h-3.5 w-3.5" />
                  </button>
                  <button className="grid h-8 w-8 place-items-center rounded-full border border-border text-foreground/60 hover:text-primary">
                    <Type className="h-3.5 w-3.5" />
                  </button>
                  <button className="grid h-8 w-8 place-items-center rounded-full border border-border text-foreground/60 hover:text-primary">
                    <Bookmark className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              <div className="pt-6">
                <div className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                  Dhamma · Feature
                </div>
                <h3 className="mt-3 font-display text-2xl font-medium leading-snug text-foreground sm:text-3xl">
                  On the noble silence of the forest sangha
                </h3>
                <p className="mt-5 text-[15px] leading-[1.8] text-foreground/75">
                  Before dawn the trees hold a stillness older than words. The
                  monks step from their kutis one by one, sweeping the path
                  with a slow, deliberate care —{" "}
                  <mark className="bg-secondary/25 px-1 text-accent">
                    an offering made not to anyone in particular
                  </mark>
                  , but to the morning itself.
                </p>
                <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-primary to-secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Archive() {
  return (
    <section id="archive" className="py-24 md:py-28">
      <Container>
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionEyebrow>Monthly Archive</SectionEyebrow>
            <h2 className="font-display text-4xl font-light leading-tight sm:text-5xl">
              Seven years, unbroken.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {["All", "2026", "2025", "2024", "Vesak"].map((y, i) => (
              <button
                key={y}
                className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                  i === 0
                    ? "bg-accent text-accent-foreground"
                    : "border border-border text-foreground/70 hover:border-primary hover:text-primary"
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-primary/40 via-border to-transparent md:block" />
          <div className="space-y-4">
            {archive.map((a) => (
              <div
                key={a.month + a.year}
                className="group relative grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 rounded-2xl border border-border/70 bg-card p-6 pl-6 transition hover:border-primary/40 hover:bg-cream md:pl-14"
              >
                <div className="pointer-events-none absolute left-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rounded-full border-2 border-primary bg-background md:block" />
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-foreground/50">
                    {a.year}
                  </div>
                  <div className="mt-1 flex items-center gap-3">
                    <h3 className="font-display text-2xl font-medium text-foreground">
                      {a.month}
                    </h3>
                    {a.tag && (
                      <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-primary">
                        {a.tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 max-w-md text-sm text-foreground/60">
                    12 essays · 3 features · Portfolio
                  </p>
                </div>
                <button className="shrink-0 rounded-full border border-accent/30 px-4 py-2 text-xs font-medium text-accent transition group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                  Read
                </button>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function SearchSection() {
  return (
    <section className="py-16">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card p-8 md:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
            <div>
              <SectionEyebrow>Search the archive</SectionEyebrow>
              <h2 className="font-display text-3xl font-light leading-tight sm:text-4xl">
                Find an essay, an author, a Poya.
              </h2>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <div className="flex flex-1 items-center gap-3 rounded-full border border-border bg-background px-5 py-3">
                  <Search className="h-4 w-4 text-foreground/50" />
                  <input
                    className="w-full bg-transparent text-sm text-foreground placeholder:text-foreground/40 focus:outline-none"
                    placeholder="Search topics, authors, months, Sinhala…"
                  />
                </div>
                <button className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">
                  Search
                </button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-foreground/60">
                <span className="uppercase tracking-widest">Filters:</span>
                {["Topic", "Author", "Month", "Category", "Language"].map((f) => (
                  <span key={f} className="rounded-full bg-muted px-2.5 py-1">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function LearningHub() {
  const cards = [
    { icon: ScrollText, title: "Pali Alphabet", desc: "Learn the 41 letters used in the earliest suttas.", tag: "Beginner" },
    { icon: BookMarked, title: "Buddhist Vocabulary", desc: "Key terms — dukkha, sīla, samādhi, paññā.", tag: "Glossary" },
    { icon: Sparkles, title: "Knowledge Quiz", desc: "Fifteen-minute weekly quiz on this month's issue.", tag: "Interactive" },
    { icon: Languages, title: "Learn Sinhala", desc: "From alphabet to poetry, week by week.", tag: "Course" },
  ];
  return (
    <section id="learning" className="py-24 md:py-28">
      <Container>
        <div className="mb-14 max-w-2xl">
          <SectionEyebrow>Learning Hub</SectionEyebrow>
          <h2 className="font-display text-4xl font-light leading-tight sm:text-5xl">
            Study alongside the reading.
          </h2>
          <p className="mt-5 text-base text-foreground/65">
            Small, interactive lessons that turn a monthly magazine into a
            quiet, lifelong classroom.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div
              key={c.title}
              className="relative overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-br from-card to-cream p-6 bosat-hover-lift"
            >
              <div className="mb-6 inline-grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-foreground/50">
                {c.tag}
              </div>
              <h3 className="mt-2 font-display text-xl font-medium">{c.title}</h3>
              <p className="mt-2 text-sm text-foreground/65">{c.desc}</p>
              <button className="mt-6 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-primary">
                Begin <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Community() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-accent p-10 text-accent-foreground md:p-16">
          <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-end">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-secondary">
                <span className="h-px w-8 bg-secondary/60" /> The Sangha of Readers
              </div>
              <h2 className="font-display text-4xl font-light leading-tight sm:text-5xl">
                A quieter kind of newsletter.
              </h2>
              <p className="mt-5 max-w-md text-base text-accent-foreground/75">
                One email at the start of each new moon. The new issue,
                editors' notes, and an invitation to join the conversation.
              </p>
            </div>

            <form className="flex flex-col gap-3">
              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 backdrop-blur">
                <Mail className="h-4 w-4 text-secondary" />
                <input
                  className="w-full bg-transparent text-sm text-accent-foreground placeholder:text-accent-foreground/50 focus:outline-none"
                  placeholder="your@email.com"
                  type="email"
                />
                <button className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground">
                  Subscribe <Send className="h-3 w-3" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-accent-foreground/60">
                <button className="rounded-full border border-white/15 px-3 py-1 hover:border-white/40">
                  Suggest a topic
                </button>
                <button className="rounded-full border border-white/15 px-3 py-1 hover:border-white/40">
                  Contact editors
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_1.3fr]">
          <div>
            <SectionEyebrow>About BOSAT</SectionEyebrow>
            <h2 className="font-display text-4xl font-light leading-tight sm:text-5xl">
              A monthly dedicated to wisdom, heritage & the human interior.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-foreground/70">
            <p>
              BOSAT was founded in 2019 by a small editorial circle in Colombo
              committed to bringing the depth of the Buddhist tradition into
              contemporary Sri Lankan life — without noise, without
              sentimentality, without hurry.
            </p>
            <p>
              Every issue is shaped by an editorial committee of monastics,
              scholars and lay practitioners, published in both Sinhala and
              English, and offered freely alongside a supporter edition.
            </p>

            <dl className="grid grid-cols-2 gap-6 border-t border-border pt-8">
              {[
                ["Founded", "2019"],
                ["Editorial team", "14"],
                ["Language", "සිංහල · English"],
                ["Frequency", "Monthly"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs uppercase tracking-widest text-foreground/50">
                    {k}
                  </dt>
                  <dd className="mt-1 font-display text-xl text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- page ---------- */

export default function Home() {
  return (
    <>
      <Hero />
      <LatestIssue />
      <Divider />
      <Categories />
      <Divider />
      <FeaturedArticles />
      <ReadingExperience />
      <Divider />
      <Archive />
      <SearchSection />
      <Divider />
      <LearningHub />
      <Community />
      <About />
    </>
  );
}
