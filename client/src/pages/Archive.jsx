import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Download,
  BookOpen,
  ArrowRight,
  Calendar,
  Filter,
  ChevronDown,
} from "lucide-react";
import Container from "@/components/common/Container";
import Divider from "@/components/common/Divider";
import SectionEyebrow from "@/components/common/SectionEyebrow";

const years = ["All", "2026", "2025", "2024", "2023", "2022", "2021", "2020", "2019"];

const issues = [
  { id: 84, month: "Vesak Special", year: "2026", tag: "Featured", articles: 14, pages: 96 },
  { id: 83, month: "April", year: "2026", articles: 12, pages: 88 },
  { id: 82, month: "March", year: "2026", articles: 13, pages: 92 },
  { id: 81, month: "February", year: "2026", articles: 11, pages: 84 },
  { id: 80, month: "January", year: "2026", articles: 12, pages: 88 },
  { id: 79, month: "December", year: "2025", articles: 14, pages: 96 },
  { id: 78, month: "November", year: "2025", articles: 12, pages: 88 },
  { id: 77, month: "October", year: "2025", articles: 11, pages: 84 },
  { id: 76, month: "September", year: "2025", articles: 13, pages: 92 },
  { id: 75, month: "August", year: "2025", articles: 12, pages: 88 },
  { id: 74, month: "July", year: "2025", articles: 14, pages: 96 },
  { id: 73, month: "June", year: "2025", articles: 11, pages: 84 },
  { id: 72, month: "May", year: "2025", articles: 12, pages: 88 },
  { id: 71, month: "April", year: "2025", articles: 13, pages: 92 },
  { id: 70, month: "March", year: "2025", articles: 12, pages: 88 },
  { id: 69, month: "February", year: "2025", articles: 11, pages: 84 },
  { id: 68, month: "January", year: "2025", articles: 14, pages: 96 },
  { id: 67, month: "December", year: "2024", articles: 12, pages: 88 },
  { id: 66, month: "November", year: "2024", articles: 13, pages: 92 },
  { id: 65, month: "October", year: "2024", articles: 11, pages: 84 },
];

export default function Archive() {
  const [activeYear, setActiveYear] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = issues.filter((i) => {
    const matchYear = activeYear === "All" || i.year === activeYear;
    const matchSearch =
      !searchQuery ||
      i.month.toLowerCase().includes(searchQuery.toLowerCase()) ||
      String(i.year).includes(searchQuery);
    return matchYear && matchSearch;
  });

  return (
    <>

      <section className="py-24 md:py-32">
        <Container>
          <div className="max-w-3xl">
            <SectionEyebrow>Complete Archive</SectionEyebrow>
            <h1 className="font-display text-5xl font-light leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl">
              Seven years of <span className="bosat-gradient-text">BOSAT</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/70">
              Every issue since our founding in 2019 — browse, read online, or
              download as PDF. Filter by year or search by name.
            </p>
          </div>

          <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {years.map((y) => (
                <button
                  key={y}
                  onClick={() => setActiveYear(y)}
                  className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                    activeYear === y
                      ? "bg-accent text-accent-foreground"
                      : "border border-border text-foreground/70 hover:border-primary hover:text-primary"
                  }`}
                >
                  {y}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 rounded-full border border-border bg-background px-5 py-3 sm:max-w-xs">
              <Search className="h-4 w-4 text-foreground/50" />
              <input
                className="w-full bg-transparent text-sm text-foreground placeholder:text-foreground/40 focus:outline-none"
                placeholder="Search issues..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search issues"
              />
            </div>
          </div>

          <div className="mt-2 flex items-center gap-2 text-xs text-foreground/50">
            <Filter className="h-3 w-3" />
            <span>{filtered.length} issue{filtered.length !== 1 ? "s" : ""} found</span>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((issue) => (
              <Link
                key={issue.id}
                to={`/magazine/${issue.id}`}
                className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-6 bosat-hover-lift"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/5 transition group-hover:bg-primary/15" />
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="aspect-[3/4] w-24 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 ring-1 ring-border/60 flex items-center justify-center">
                      <span className="font-display text-3xl font-light text-foreground/40">
                        {issue.id}
                      </span>
                    </div>
                    {issue.tag && (
                      <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-primary">
                        {issue.tag}
                      </span>
                    )}
                  </div>
                  <div className="mt-4 text-xs uppercase tracking-widest text-foreground/50">
                    Issue No. {issue.id} · {issue.year}
                  </div>
                  <h3 className="mt-1 font-display text-2xl font-medium text-foreground">
                    {issue.month}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/60">
                    {issue.articles} articles · {issue.pages} pages
                  </p>
                  <div className="mt-5 flex gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-medium text-primary">
                      <BookOpen className="h-3 w-3" /> Read
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-[10px] font-medium text-accent">
                      <Download className="h-3 w-3" /> PDF
                    </span>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary opacity-0 transition group-hover:opacity-100">
                    View Issue <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-20 text-center">
              <Calendar className="mx-auto h-12 w-12 text-foreground/30" />
              <p className="mt-4 text-lg font-medium text-foreground/60">No issues found</p>
              <p className="mt-2 text-sm text-foreground/50">Try adjusting your search or filter.</p>
            </div>
          )}
        </Container>
      </section>

      <Divider />

      <section className="py-20 md:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-accent p-10 text-accent-foreground md:p-16">
            <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-secondary">
                  <span className="h-px w-8 bg-secondary/60" /> Looking for something specific?
                </div>
                <h2 className="font-display text-4xl font-light leading-tight sm:text-5xl">
                  Search across all issues.
                </h2>
                <p className="mt-5 max-w-md text-base text-accent-foreground/75">
                  Every article, every author, every footnote — searchable in
                  both Sinhala and English.
                </p>
              </div>
              <Link
                to="/search"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground"
              >
                <Search className="h-4 w-4" /> Search Archive
              </Link>
            </div>
          </div>
        </Container>
      </section>

    </>
  );
}
