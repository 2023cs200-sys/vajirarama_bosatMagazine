import { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Settings,
  BookOpen,
  Bookmark,
  Clock,
  Heart,
  BarChart3,
  Flame,
  Award,
  LogOut,
  ChevronRight,
  BookMarked,
} from "lucide-react";
import Container from "@/components/common/Container";
import Divider from "@/components/common/Divider";
import SectionEyebrow from "@/components/common/SectionEyebrow";

const readingHistory = [
  { title: "The Silent Stones of Anuradhapura", author: "Ven. Dhammika Thero", date: "12 Apr 2026", progress: 100, tag: "Heritage" },
  { title: "Vesak: The Threefold Blessing Reconsidered", author: "Bhikkhu Ariyawansa", date: "10 Apr 2026", progress: 100, tag: "Poya" },
  { title: "Reading the Palm Leaves", author: "Prof. Kumari Ranasinghe", date: "28 Mar 2026", progress: 75, tag: "Pali" },
  { title: "Sinhala Poetry After the War", author: "Prof. Kumari Ranasinghe", date: "15 Mar 2026", progress: 40, tag: "Essay" },
  { title: "Pali for Beginners: The Case System", author: "Prof. Nimal de Silva", date: "2 Mar 2026", progress: 100, tag: "Pali" },
];

const bookmarks = [
  { title: "The Wheel Turned Twice", author: "Ven. Dhammika Thero", tag: "Feature", savedAt: "5 Apr 2026" },
  { title: "Twelve Mornings at Gal Vihara", author: "Rohan Perera", tag: "Portfolio", savedAt: "3 Apr 2026" },
  { title: "The First Precept in Daily Life", author: "Bhikkhu Ariyawansa", tag: "Dhamma", savedAt: "28 Mar 2026" },
  { title: "Anuradhapura: A Photographic Essay", author: "Dinesh Silva", tag: "Heritage", savedAt: "15 Mar 2026" },
];

const stats = [
  { icon: BookOpen, label: "Articles Read", value: "47" },
  { icon: Clock, label: "Reading Time", value: "12.5 hrs" },
  { icon: Flame, label: "Day Streak", value: "23" },
  { icon: Award, label: "Completed", value: "34" },
];

const tabs = ["Reading History", "Bookmarks", "Reading Stats"];

export default function Profile() {
  const [activeTab, setActiveTab] = useState("Reading History");

  return (
    <>

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)]">
            <aside className="space-y-6">
              <div className="rounded-2xl border border-border/70 bg-card p-6 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent text-2xl font-semibold text-accent-foreground">
                  JD
                </div>
                <h1 className="mt-4 font-display text-2xl font-medium text-foreground">
                  John Doe
                </h1>
                <p className="mt-1 text-sm text-foreground/60">john@example.com</p>
                <p className="mt-2 text-xs text-foreground/40">Reader since Jan 2024</p>
                <div className="mt-6 flex justify-center gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-medium text-primary">
                    Free Member
                  </span>
                </div>
              </div>

              <nav className="space-y-1">
                {["Reading History", "Bookmarks", "Reading Stats", "Settings"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                      activeTab === tab
                        ? "bg-accent text-accent-foreground"
                        : "text-foreground/70 hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {tab === "Reading History" && <Clock className="h-4 w-4" />}
                    {tab === "Bookmarks" && <Bookmark className="h-4 w-4" />}
                    {tab === "Reading Stats" && <BarChart3 className="h-4 w-4" />}
                    {tab === "Settings" && <Settings className="h-4 w-4" />}
                    {tab}
                  </button>
                ))}
              </nav>

              <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-foreground/50 transition hover:text-red-500">
                <LogOut className="h-4 w-4" /> Sign Out
              </button>
            </aside>

            <div>
              {activeTab === "Reading History" && (
                <div>
                  <SectionEyebrow>Your Reading</SectionEyebrow>
                  <h2 className="font-display text-4xl font-light leading-tight text-foreground sm:text-5xl">
                    Reading History
                  </h2>
                  <p className="mt-4 text-base text-foreground/65">
                    Articles you&apos;ve started or completed.
                  </p>

                  <div className="mt-10 space-y-3">
                    {readingHistory.map((article) => (
                      <Link
                        key={article.title}
                        to="/reader/84-1"
                        className="group flex items-center gap-4 rounded-2xl border border-border/70 bg-card p-4 transition hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-foreground/50">
                            <span className="rounded-full bg-primary/10 px-2 py-0.5 font-semibold text-primary">
                              {article.tag}
                            </span>
                            <span>{article.date}</span>
                          </div>
                          <h3 className="mt-0.5 font-display text-lg font-medium text-foreground">
                            {article.title}
                          </h3>
                          <p className="text-xs text-foreground/50">{article.author}</p>
                          <div className="mt-2 flex items-center gap-3">
                            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                                style={{ width: `${article.progress}%` }}
                              />
                            </div>
                            <span className="text-[10px] text-foreground/40">{article.progress}%</span>
                          </div>
                        </div>
                        <ChevronRight className="h-5 w-5 shrink-0 text-foreground/30 transition group-hover:text-primary group-hover:translate-x-0.5" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "Bookmarks" && (
                <div>
                  <SectionEyebrow>Saved for Later</SectionEyebrow>
                  <h2 className="font-display text-4xl font-light leading-tight text-foreground sm:text-5xl">
                    Bookmarks
                  </h2>
                  <p className="mt-4 text-base text-foreground/65">
                    Articles you&apos;ve saved for later reading.
                  </p>

                  <div className="mt-10 space-y-3">
                    {bookmarks.map((b) => (
                      <Link
                        key={b.title}
                        to="/article/84-1"
                        className="group flex items-center gap-4 rounded-2xl border border-border/70 bg-card p-4 transition hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
                      >
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                          <BookMarked className="h-5 w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest">
                            <span className="rounded-full bg-primary/10 px-2 py-0.5 font-semibold text-primary">
                              {b.tag}
                            </span>
                            <span className="text-foreground/50">Saved {b.savedAt}</span>
                          </div>
                          <h3 className="mt-0.5 font-display text-lg font-medium text-foreground">
                            {b.title}
                          </h3>
                          <p className="text-xs text-foreground/50">{b.author}</p>
                        </div>
                        <ChevronRight className="h-5 w-5 shrink-0 text-foreground/30 transition group-hover:text-primary group-hover:translate-x-0.5" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "Reading Stats" && (
                <div>
                  <SectionEyebrow>Your Activity</SectionEyebrow>
                  <h2 className="font-display text-4xl font-light leading-tight text-foreground sm:text-5xl">
                    Reading Stats
                  </h2>
                  <p className="mt-4 text-base text-foreground/65">
                    A snapshot of your BOSAT reading journey.
                  </p>

                  <div className="mt-10 grid gap-5 sm:grid-cols-2">
                    {stats.map((s) => (
                      <div
                        key={s.label}
                        className="rounded-2xl border border-border/70 bg-card p-6"
                      >
                        <div className="flex items-center gap-4">
                          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                            <s.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-display text-3xl font-light text-foreground">
                              {s.value}
                            </div>
                            <div className="text-xs uppercase tracking-widest text-foreground/50">
                              {s.label}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Divider />

                  <div className="rounded-2xl border border-border/70 bg-card p-6">
                    <h3 className="font-display text-xl font-medium text-foreground">
                      Categories You Read Most
                    </h3>
                    <div className="mt-4 space-y-3">
                      {[
                        { name: "Dhamma", count: 12, color: "bg-primary" },
                        { name: "Heritage", count: 8, color: "bg-secondary" },
                        { name: "Pali", count: 6, color: "bg-accent" },
                        { name: "Essay", count: 5, color: "bg-blue-500" },
                      ].map((c) => (
                        <div key={c.name} className="flex items-center gap-4">
                          <span className="w-20 text-sm text-foreground/70">{c.name}</span>
                          <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                            <div
                              className={`h-full rounded-full ${c.color}`}
                              style={{ width: `${(c.count / 12) * 100}%` }}
                            />
                          </div>
                          <span className="text-xs text-foreground/50">{c.count} articles</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "Settings" && (
                <div>
                  <SectionEyebrow>Preferences</SectionEyebrow>
                  <h2 className="font-display text-4xl font-light leading-tight text-foreground sm:text-5xl">
                    Account Settings
                  </h2>
                  <p className="mt-4 text-base text-foreground/65">
                    Manage your profile, notifications, and preferences.
                  </p>

                  <div className="mt-10 space-y-6">
                    <div className="rounded-2xl border border-border/70 bg-card p-6">
                      <h3 className="font-display text-lg font-medium text-foreground">Profile</h3>
                      <div className="mt-4 space-y-4">
                        <div>
                          <label className="text-sm font-medium text-foreground/70">Display Name</label>
                          <input
                            className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                            defaultValue="John Doe"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground/70">Email</label>
                          <input
                            className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                            defaultValue="john@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-border/70 bg-card p-6">
                      <h3 className="font-display text-lg font-medium text-foreground">Preferences</h3>
                      <div className="mt-4 space-y-4">
                        {[
                          { label: "Email Newsletter", desc: "Receive monthly issue updates" },
                          { label: "Reading Reminders", desc: "Weekly reminders to continue reading" },
                          { label: "Dark Mode", desc: "Enable dark mode by default" },
                        ].map((pref) => (
                          <label key={pref.label} className="flex items-center justify-between">
                            <div>
                              <div className="text-sm font-medium text-foreground">{pref.label}</div>
                              <div className="text-xs text-foreground/50">{pref.desc}</div>
                            </div>
                            <div className="h-6 w-11 rounded-full border-2 border-border bg-muted transition has-[:checked]:border-primary has-[:checked]:bg-primary">
                              <input type="checkbox" className="sr-only" />
                              <span className="block h-5 w-5 translate-x-0.5 rounded-full bg-white transition has-[:checked]:translate-x-5" />
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <button className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:bg-primary">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

    </>
  );
}
