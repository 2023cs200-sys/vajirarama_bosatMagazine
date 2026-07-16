import { Link } from "react-router-dom";
import {
  BookOpen,
  Heart,
  Globe,
  Users,
  Sparkles,
  ArrowRight,
  Quote,
  Target,
  Eye,
} from "lucide-react";
import Container from "@/components/common/Container";
import Divider from "@/components/common/Divider";
import SectionEyebrow from "@/components/common/SectionEyebrow";

const stats = [
  { label: "Issues Published", value: "84" },
  { label: "Articles", value: "620+" },
  { label: "Readers Monthly", value: "12k" },
  { label: "Editorial Team", value: "14" },
  { label: "Languages", value: "2" },
  { label: "Years Active", value: "7" },
];

const team = [
  { name: "Ven. Dhammika Thero", role: "Editor-in-Chief", initials: "VD" },
  { name: "Prof. Kumari Ranasinghe", role: "Deputy Editor", initials: "KR" },
  { name: "Bhikkhu Ariyawansa", role: "Dhamma Editor", initials: "BA" },
  { name: "Rohan Perera", role: "Creative Director", initials: "RP" },
  { name: "Dinesh Silva", role: "Photography Editor", initials: "DS" },
  { name: "Amaya Wickramasinghe", role: "Sinhala Editor", initials: "AW" },
  { name: "Prof. Nimal de Silva", role: "Pali Consultant", initials: "NS" },
  { name: "Samantha Gunawardena", role: "Managing Editor", initials: "SG" },
];

const values = [
  {
    icon: Target,
    title: "Depth over Speed",
    desc: "We publish monthly, not daily. Every article is carefully edited and fact-checked before it reaches our readers.",
  },
  {
    icon: Eye,
    title: "Independent Voice",
    desc: "BOSAT is not affiliated with any monastery, political party, or commercial interest. Our only allegiance is to the Dhamma.",
  },
  {
    icon: Globe,
    title: "Bilingual Commitment",
    desc: "Every issue is published in both Sinhala and English, bridging Sri Lanka's linguistic heritage with the global Buddhist community.",
  },
  {
    icon: Heart,
    title: "Free to All",
    desc: "BOSAT remains free to read online. Our supporter edition helps sustain the work for those who can contribute.",
  },
];

export default function About() {
  return (
    <>

      <section className="py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-4xl">
            <SectionEyebrow>About BOSAT</SectionEyebrow>
            <h1 className="font-display text-5xl font-light leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl">
              A monthly dedicated to wisdom, heritage{" "}
              <span className="bosat-gradient-text">&</span> the human interior.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/70">
              Founded in 2019 by a small editorial circle in Colombo, BOSAT is
              committed to bringing the depth of the Buddhist tradition into
              contemporary Sri Lankan life — without noise, without
              sentimentality, without hurry.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border/70 bg-card p-6 text-center"
              >
                <div className="font-display text-5xl font-light text-foreground">{s.value}</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-foreground/50">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Divider />

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <SectionEyebrow>Our Mission</SectionEyebrow>
              <h2 className="font-display text-4xl font-light leading-tight text-foreground sm:text-5xl">
                Building the nation through wisdom and human development.
              </h2>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/70">
                <p>
                  Every issue is shaped by an editorial committee of monastics,
                  scholars, and lay practitioners who share a conviction: that
                  the Buddhist tradition has something essential to say to the
                  present moment, and that a magazine can be a vehicle for that
                  conversation.
                </p>
                <p>
                  Our pages carry long-form essays, photographic portfolios,
                  poetry, Pali learning resources, and cultural commentary —
                  always with an eye to the classical sources, always with a
                  feel for the contemporary reader.
                </p>
                <p>
                  We publish in both Sinhala and English, and we offer the
                  digital edition freely to all. A supporter edition with
                  additional content is available for those who wish to sustain
                  the work.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-border/70 bg-card p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      <v.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-medium text-foreground">
                        {v.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-foreground/65">{v.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Divider />

      <section className="py-20 md:py-24">
        <Container>
          <SectionEyebrow>Editorial Team</SectionEyebrow>
          <h2 className="font-display text-4xl font-light leading-tight text-foreground sm:text-5xl">
            The people behind BOSAT.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <div
                key={m.name}
                className="rounded-2xl border border-border/70 bg-card p-6 text-center bosat-hover-lift"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-semibold text-accent-foreground">
                  {m.initials}
                </div>
                <h3 className="mt-4 font-display text-lg font-medium text-foreground">
                  {m.name}
                </h3>
                <p className="mt-1 text-sm text-foreground/60">{m.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Divider />

      <section className="py-20 md:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-accent p-10 text-accent-foreground md:p-16">
            <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />
            <div className="relative text-center">
              <Quote className="mx-auto h-10 w-10 text-secondary/60" />
              <blockquote className="mx-auto mt-6 max-w-2xl font-display text-2xl leading-relaxed text-accent-foreground/90 md:text-3xl">
                &ldquo;The Dhamma is not a relic to be preserved, but a living
                current to be entered. A magazine, at its best, is a place where
                that current can be felt.&rdquo;
              </blockquote>
              <div className="mt-8 text-sm text-accent-foreground/70">
                — Editorial statement, Issue No. 1, January 2019
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="text-center">
            <h2 className="font-display text-4xl font-light leading-tight text-foreground sm:text-5xl">
              Want to get involved?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base text-foreground/65">
              Whether you&apos;d like to contribute, subscribe, or simply say
              hello — we&apos;d love to hear from you.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition hover:bg-primary"
              >
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-cream px-6 py-3.5 text-sm font-medium text-accent transition hover:border-accent"
              >
                Subscribe to Newsletter
              </a>
            </div>
          </div>
        </Container>
      </section>

    </>
  );
}
