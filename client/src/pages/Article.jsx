import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  Bookmark,
  Clock,
  User,
  Tag,
  Calendar,
  Share2,
  ArrowRight,
  Heart,
} from "lucide-react";
import Container from "@/components/common/Container";
import Divider from "@/components/common/Divider";
import SectionEyebrow from "@/components/common/SectionEyebrow";

const articles = {
  "84-1": {
    title: "The Wheel Turned Twice",
    author: "Ven. Dhammika Thero",
    avatar: "VD",
    tag: "Feature",
    date: "April 2026",
    readTime: 18,
    issue: "Issue No. 84 — Vesak Special",
    excerpt:
      "A reflection on Dhammacakkappavattana Sutta, the first discourse, and what it means to set the wheel of Dhamma in motion in a distracted age.",
    sections: [
      {
        heading: "The Setting",
        content:
          "The Deer Park at Isipatana lay quiet under the late afternoon sun. Five ascetics sat waiting — not knowing what to expect, yet knowing something had shifted in their old companion. When the Tathagata spoke, he did not speak as a teacher addressing students. He spoke as a physician diagnosing a condition common to every living being.",
      },
      {
        heading: "The Middle Way",
        content:
          "Before the Four Noble Truths, the Buddha offered something more foundation: the Middle Way. Not a compromise between extremes but a radical departure from the very structure of seeking. The ascetics had tried self-mortification; the Buddha had tried indulgence. Both paths had failed — not because of insufficient effort, but because of a fundamental misdirection of that effort.",
      },
      {
        heading: "The Four Truths",
        content:
          "Dukkha is not pessimism. It is the most honest possible assessment of what it means to be alive — not that life is suffering, but that everything we cling to will change, and that very change is the door to freedom. Samudaya, nirodha, magga — origination, cessation, path. Each truth is both a diagnosis and a prognosis.",
      },
      {
        heading: "The Wheel Turns",
        content:
          "When Kondanna understood, the earth trembled — not literally, perhaps, but the universe shuddered at the possibility that suffering could be understood, and therefore ended. The wheel of Dhamma had been set in motion. It has not stopped turning in 2,600 years.",
      },
    ],
  },
};

export default function Article() {
  const { id } = useParams();
  const article = articles["84-1"] || {
    title: "Article Not Found",
    author: "BOSAT Editorial",
    avatar: "BE",
    tag: "Info",
    date: "—",
    readTime: 0,
    issue: "",
    excerpt: "This article has not been published yet.",
    sections: [],
  };

  return (
    <>

      <section className="py-24 md:py-32">
        <Container>
          <Link
            to="/magazine/84"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-foreground/60 transition hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Issue
          </Link>

          <div className="mx-auto max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest">
              <span className="rounded-full bg-primary/15 px-3 py-1 font-semibold text-primary">
                {article.tag}
              </span>
              <span className="inline-flex items-center gap-1.5 text-foreground/50">
                <Calendar className="h-3 w-3" /> {article.date}
              </span>
              <span className="inline-flex items-center gap-1.5 text-foreground/50">
                <Clock className="h-3 w-3" /> {article.readTime} min read
              </span>
            </div>

            <h1 className="mt-6 font-display text-5xl font-light leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl">
              {article.title}
            </h1>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-foreground">
                {article.avatar}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <User className="h-3.5 w-3.5 text-foreground/40" />
                  <span className="text-sm font-medium text-foreground">{article.author}</span>
                </div>
                <p className="text-xs text-foreground/50">{article.issue}</p>
              </div>
            </div>

            <p className="mt-10 border-l-2 border-primary/40 pl-6 text-lg leading-relaxed text-foreground/70 italic">
              {article.excerpt}
            </p>

            <Divider />

            {article.sections.length > 0 ? (
              <div className="space-y-10">
                {article.sections.map((section) => (
                  <div key={section.heading}>
                    <h2 className="font-display text-3xl font-light text-foreground">
                      {section.heading}
                    </h2>
                    <p className="mt-4 text-base leading-[1.8] text-foreground/75">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-foreground/50">{article.excerpt}</p>
            )}

            <Divider />

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to={`/reader/${id}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:bg-primary"
              >
                <BookOpen className="h-4 w-4" /> Open in Reader
              </Link>
              <button className="inline-flex items-center gap-2 rounded-full border border-accent/30 px-6 py-3 text-sm font-medium text-accent transition hover:border-accent hover:bg-accent hover:text-accent-foreground">
                <Bookmark className="h-4 w-4" /> Bookmark
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-accent/30 px-6 py-3 text-sm font-medium text-accent transition hover:border-accent hover:bg-accent hover:text-accent-foreground">
                <Heart className="h-4 w-4" /> Appreciate
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground/70 transition hover:text-primary">
                <Share2 className="h-4 w-4" /> Share
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              <Tag className="h-4 w-4 text-foreground/40" />
              {["Dhamma", "Vesak", "First Sermon", "Four Noble Truths"].map((t) => (
                <Link
                  key={t}
                  to={`/search?tag=${t.toLowerCase()}`}
                  className="rounded-full bg-muted px-3 py-1 text-xs text-foreground/60 transition hover:bg-primary/10 hover:text-primary"
                >
                  {t}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Divider />

      <section className="py-20 md:py-24">
        <Container>
          <SectionEyebrow>Continue Reading</SectionEyebrow>
          <h2 className="font-display text-4xl font-light leading-tight text-foreground sm:text-5xl">
            More from this issue.
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Twelve Mornings at Gal Vihara", tag: "Portfolio", time: 10 },
              { title: "Sinhala Poetry After the War", tag: "Essay", time: 15 },
              { title: "The First Precept in Daily Life", tag: "Dhamma", time: 12 },
            ].map((a) => (
              <Link
                key={a.title}
                to="/article/84-2"
                className="group rounded-2xl border border-border/70 bg-card p-6 bosat-hover-lift"
              >
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-primary">
                  {a.tag}
                </span>
                <h3 className="mt-3 font-display text-xl font-medium text-foreground group-hover:text-primary">
                  {a.title}
                </h3>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-foreground/50">
                  <Clock className="h-3 w-3" /> {a.time} min read
                </div>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary opacity-0 transition group-hover:opacity-100">
                  Read Article <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

    </>
  );
}
