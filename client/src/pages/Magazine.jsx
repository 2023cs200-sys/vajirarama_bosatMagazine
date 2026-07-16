import { useParams, Link } from "react-router-dom";
import {
  BookOpen,
  Download,
  Bookmark,
  Share2,
  ArrowLeft,
  ChevronRight,
  FileText,
  Image,
  Headphones,
  Globe,
} from "lucide-react";
import Container from "@/components/common/Container";
import Divider from "@/components/common/Divider";
import SectionEyebrow from "@/components/common/SectionEyebrow";

const issues = {
  84: {
    id: 84,
    month: "Vesak Special",
    year: "2026",
    tag: "Featured",
    subtitle: "The Lotus still opens at dawn.",
    desc: "This month we return to the beginning — a slow reading of the first sermon, a photographic journey through the ruins of Polonnaruwa, and a conversation with three young monks on digital silence.",
    editor: "Ven. Dhammika Thero",
    articles: [
      { title: "The Wheel Turned Twice", author: "Ven. Dhammika Thero", tag: "Feature", pages: "12–24", readTime: 18 },
      { title: "Twelve Mornings at Gal Vihara", author: "Rohan Perera", tag: "Portfolio", pages: "25–34", readTime: 10 },
      { title: "Sinhala Poetry After the War", author: "Prof. Kumari Ranasinghe", tag: "Essay", pages: "35–48", readTime: 15 },
      { title: "The First Precept in Daily Life", author: "Bhikkhu Ariyawansa", tag: "Dhamma", pages: "49–58", readTime: 12 },
      { title: "Anuradhapura: A Photographic Essay", author: "Dinesh Silva", tag: "Heritage", pages: "59–70", readTime: 8 },
      { title: "Pali for Beginners: The Case System", author: "Prof. Nimal de Silva", tag: "Pali", pages: "71–80", readTime: 14 },
      { title: " Vesak Across the Island", author: "Editorial Team", tag: "Culture", pages: "81–90", readTime: 9 },
      { title: "Children's Page: The Story of Sujata", author: "Amaya Wickramasinghe", tag: "Kids", pages: "91–96", readTime: 5 },
    ],
  },
};

export default function Magazine() {
  const { id } = useParams();
  const issue = issues[84] || {
    id: id || "—",
    month: "Unknown",
    year: "—",
    tag: "",
    subtitle: "Issue not found.",
    desc: "This issue has not been published yet or the URL is incorrect.",
    editor: "Editorial Team",
    articles: [],
  };

  return (
    <>

      <section className="py-24 md:py-32">
        <Container>
          <Link
            to="/archive"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-foreground/60 transition hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Archive
          </Link>

          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_1.3fr]">
            <div>
              <div className="relative">
                <div className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-primary/10 blur-3xl" />
                <div className="relative mx-auto max-w-sm bosat-hover-lift">
                  <div className="absolute -top-4 left-6 z-10 rounded-full bg-accent px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-accent-foreground">
                    Issue No. {issue.id}
                  </div>
                  <div className="aspect-[3/4] w-full rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/5 ring-1 ring-border/60 flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-display text-7xl font-light text-primary/30">{issue.id}</div>
                      <div className="mt-2 font-display text-2xl font-light text-foreground/50">BOSAT</div>
                      <div className="mt-1 text-xs uppercase tracking-widest text-foreground/40">{issue.month} {issue.year}</div>
                    </div>
                  </div>
                  <div className="absolute inset-x-6 -bottom-4 h-6 rounded-b-2xl bg-accent/20 blur-md" />
                </div>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:bg-primary">
                  <BookOpen className="h-4 w-4" /> Read Online
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-cream px-6 py-3 text-sm font-medium text-accent transition hover:border-accent">
                  <Download className="h-4 w-4" /> Download PDF
                </button>
                <button className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground/70 transition hover:text-primary" aria-label="Bookmark this issue">
                  <Bookmark className="h-4 w-4" />
                </button>
                <button className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground/70 transition hover:text-primary" aria-label="Share this issue">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div>
              <SectionEyebrow>{issue.month} {issue.year}</SectionEyebrow>
              <h1 className="font-display text-5xl font-light leading-[1.02] tracking-tight text-foreground sm:text-6xl">
                {issue.subtitle}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/70">
                {issue.desc}
              </p>

              <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-foreground/50">Editor</dt>
                  <dd className="mt-1 font-medium text-foreground">{issue.editor}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-foreground/50">Articles</dt>
                  <dd className="mt-1 font-medium text-foreground">{issue.articles.length}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-foreground/50">Pages</dt>
                  <dd className="mt-1 font-medium text-foreground">96</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-foreground/50">Languages</dt>
                  <dd className="mt-1 font-medium text-foreground">සිංහල · English</dd>
                </div>
              </dl>

              <Divider />

              <h2 className="font-display text-2xl font-medium text-foreground">Articles in this issue</h2>
              <div className="mt-6 space-y-3">
                {issue.articles.map((a, i) => (
                  <Link
                    key={a.title}
                    to={`/article/${issue.id}-${i + 1}`}
                    className="group flex items-center gap-4 rounded-2xl border border-border/70 bg-card p-4 transition hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-xs font-semibold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-foreground/50">
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 font-semibold text-primary">
                          {a.tag}
                        </span>
                        <span>{a.pages}</span>
                        <span>· {a.readTime} min</span>
                      </div>
                      <h3 className="mt-0.5 font-display text-lg font-medium text-foreground truncate">
                        {a.title}
                      </h3>
                      <p className="text-xs text-foreground/50">{a.author}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 shrink-0 text-foreground/30 transition group-hover:text-primary group-hover:translate-x-0.5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Divider />

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="rounded-2xl border border-border/70 bg-card p-6 text-center">
              <FileText className="mx-auto h-8 w-8 text-primary" />
              <h3 className="mt-4 font-display text-xl font-medium text-foreground">Read Online</h3>
              <p className="mt-2 text-sm text-foreground/60">
                Optimised reading experience with font controls, audio, and bookmarks.
              </p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-card p-6 text-center">
              <Download className="mx-auto h-8 w-8 text-primary" />
              <h3 className="mt-4 font-display text-xl font-medium text-foreground">Download PDF</h3>
              <p className="mt-2 text-sm text-foreground/60">
                Print-ready high-resolution PDF for offline reading and reference.
              </p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-card p-6 text-center">
              <Headphones className="mx-auto h-8 w-8 text-primary" />
              <h3 className="mt-4 font-display text-xl font-medium text-foreground">Audio Edition</h3>
              <p className="mt-2 text-sm text-foreground/60">
                Listen to every article narrated in Sinhala and English.
              </p>
            </div>
          </div>
        </Container>
      </section>

    </>
  );
}
