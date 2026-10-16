import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search as SearchIcon,
  SlidersHorizontal,
  Tag,
  User,
  Calendar,
  Clock,
  ArrowRight,
  X,
  Filter,
} from "lucide-react";
import Container from "@/components/common/Container";
import Divider from "@/components/common/Divider";
import SectionEyebrow from "@/components/common/SectionEyebrow";

const filters = ["Topic", "Author", "Month", "Category", "Language"];

const results = [
  {
    title: "The Silent Stones of Anuradhapura",
    author: "Ven. Dhammika Thero",
    tag: "Heritage",
    date: "April 2026",
    excerpt:
      "Walking the sacred city at dawn, we trace the outlines of a civilisation that measured its greatness in acts of compassion, not conquest.",
    minutes: 8,
  },
  {
    title: "Reading the Palm Leaves: A Beginner's Guide",
    author: "Prof. Kumari Ranasinghe",
    tag: "Pali",
    date: "March 2026",
    excerpt:
      "How ancient scribes preserved the Tipitaka on ola leaves — and what those quiet marks still teach a modern reader.",
    minutes: 6,
  },
  {
    title: "Vesak: The Threefold Blessing Reconsidered",
    author: "Bhikkhu Ariyawansa",
    tag: "Poya",
    date: "May 2026",
    excerpt:
      "Birth, enlightenment, parinibbana — a meditation on why a single full moon carries the weight of an entire path.",
    minutes: 11,
  },
  {
    title: "The Wheel Turned Twice",
    author: "Ven. Dhammika Thero",
    tag: "Feature",
    date: "April 2026",
    excerpt:
      "A reflection on Dhammacakkappavattana Sutta and what it means to set the wheel of Dhamma in motion in a distracted age.",
    minutes: 18,
  },
  {
    title: "Anuradhapura: A Photographic Essay",
    author: "Dinesh Silva",
    tag: "Heritage",
    date: "April 2026",
    excerpt:
      "Twelve images from the sacred city, captured at the hour when the stones hold their deepest silence.",
    minutes: 5,
  },
  {
    title: "Pali for Beginners: The Case System",
    author: "Prof. Nimal de Silva",
    tag: "Pali",
    date: "February 2026",
    excerpt:
      "A clear, step-by-step guide to the grammatical cases that structure the language of the earliest suttas.",
    minutes: 14,
  },
  {
    title: "Sinhala Poetry After the War",
    author: "Prof. Kumari Ranasinghe",
    tag: "Essay",
    date: "April 2026",
    excerpt:
      "How a generation of Sri Lankan poets has turned to the classical forms to speak about reconciliation, memory and the fragile present.",
    minutes: 15,
  },
  {
    title: "The First Precept in Daily Life",
    author: "Bhikkhu Ariyawansa",
    tag: "Dhamma",
    date: "April 2026",
    excerpt:
      "Exploring the practice of ahimsa beyond abstention — what it means to actively cultivate harmlessness in a householder's life.",
    minutes: 12,
  },
];

const allTags = ["All", "Heritage", "Pali", "Poya", "Feature", "Essay", "Dhamma"];

export default function Search() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = results.filter((r) => {
    const matchQuery =
      !query ||
      r.title.toLowerCase().includes(query.toLowerCase()) ||
      r.author.toLowerCase().includes(query.toLowerCase()) ||
      r.tag.toLowerCase().includes(query.toLowerCase());
    const matchTag = activeTag === "All" || r.tag === activeTag;
    return matchQuery && matchTag;
  });

  return (
    <>

      <section className="py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-4xl">
            <SectionEyebrow>Search the Archive</SectionEyebrow>
            <h1 className="font-display text-5xl font-light leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl">
              Find an essay, an author, <span className="bosat-gradient-text">a Poya.</span>
            </h1>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <div className="flex flex-1 items-center gap-3 rounded-full border border-border bg-background px-5 py-3">
                <SearchIcon className="h-4 w-4 text-foreground/50" />
                <input
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-foreground/40 focus:outline-none"
                  placeholder="Search topics, authors, months, Sinhala…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="Search articles"
                />
                {query && (
                  <button onClick={() => setQuery("")} aria-label="Clear search">
                    <X className="h-4 w-4 text-foreground/40 hover:text-foreground" />
                  </button>
                )}
              </div>
              <button className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:brightness-105">
                <SearchIcon className="h-4 w-4" /> Search
              </button>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground/70 transition hover:border-primary hover:text-primary"
                aria-label="Toggle filters"
              >
                <SlidersHorizontal className="h-4 w-4" /> Filters
              </button>
            </div>

            {showFilters && (
              <div className="mt-6 rounded-2xl border border-border/70 bg-card p-6">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-foreground/50">
                  <Filter className="h-3 w-3" /> Filters
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                  {filters.map((f) => (
                    <div key={f}>
                      <label className="text-xs font-medium text-foreground/60">{f}</label>
                      <select className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
                        <option>All</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                      </select>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-end gap-2">
                  <button className="rounded-full border border-border px-4 py-2 text-xs font-medium text-foreground/60 hover:text-primary">
                    Reset
                  </button>
                  <button className="rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground">
                    Apply Filters
                  </button>
                </div>
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                    activeTag === tag
                      ? "bg-accent text-accent-foreground"
                      : "border border-border text-foreground/60 hover:border-primary hover:text-primary"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            <p className="mt-6 text-sm text-foreground/50">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""} found
              {query && <span> for &ldquo;{query}&rdquo;</span>}
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {filtered.map((r) => (
              <Link
                key={r.title}
                to="/article/84-1"
                className="group grid gap-4 overflow-hidden rounded-2xl border border-border/70 bg-card p-5 transition hover:border-primary/40 hover:shadow-[var(--shadow-soft)] md:grid-cols-[1fr_auto]"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-widest">
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 font-semibold text-primary">
                      {r.tag}
                    </span>
                    <span className="inline-flex items-center gap-1 text-foreground/50">
                      <Calendar className="h-3 w-3" /> {r.date}
                    </span>
                    <span className="inline-flex items-center gap-1 text-foreground/50">
                      <Clock className="h-3 w-3" /> {r.minutes} min
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-xl font-medium text-foreground group-hover:text-primary">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/65 line-clamp-2">{r.excerpt}</p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-foreground/50">
                    <User className="h-3 w-3" /> {r.author}
                  </div>
                </div>
                <div className="flex items-center md:self-center">
                  <ArrowRight className="h-5 w-5 text-foreground/30 transition group-hover:text-primary group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-20 text-center">
              <SearchIcon className="mx-auto h-12 w-12 text-foreground/30" />
              <p className="mt-4 text-lg font-medium text-foreground/60">No results found</p>
              <p className="mt-2 text-sm text-foreground/50">
                Try different keywords or remove filters.
              </p>
            </div>
          )}

          {filtered.length > 0 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              {[1, 2, 3].map((p) => (
                <button
                  key={p}
                  className={`grid h-10 w-10 place-items-center rounded-full text-sm font-medium transition ${
                    p === 1
                      ? "bg-accent text-accent-foreground"
                      : "border border-border text-foreground/60 hover:border-primary hover:text-primary"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          )}
        </Container>
      </section>

      <Divider />

      <section className="py-20 md:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary/10 to-secondary/5 p-10 md:p-16">
            <div className="relative text-center">
              <Tag className="mx-auto h-8 w-8 text-primary/60" />
              <h2 className="mt-4 font-display text-3xl font-light text-foreground">
                Browse by category
              </h2>
              <p className="mt-3 text-sm text-foreground/60">
                Every article belongs to one of eight editorial streams.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-2">
                {["Buddhist Teachings", "Poya Day", "Heritage", "History", "Sinhala Language", "Culture", "Inspirational", "Pali Learning"].map(
                  (c) => (
                    <Link
                      key={c}
                      to={`/search?category=${c.toLowerCase().replace(/\s+/g, "-")}`}
                      className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground/70 transition hover:border-primary hover:text-primary"
                    >
                      {c}
                    </Link>
                  ),
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

    </>
  );
}
