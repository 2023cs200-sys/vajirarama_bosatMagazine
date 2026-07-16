import { useState } from "react";
import {
  BarChart3,
  Users,
  FileText,
  Download,
  Eye,
  TrendingUp,
  BookOpen,
  MessageSquare,
  Settings,
  MoreHorizontal,
  ChevronDown,
  Plus,
  Search,
} from "lucide-react";
import Container from "@/components/common/Container";
import Divider from "@/components/common/Divider";
import SectionEyebrow from "@/components/common/SectionEyebrow";

const quickStats = [
  { icon: BookOpen, label: "Total Articles", value: "624", change: "+12 this month" },
  { icon: Users, label: "Registered Readers", value: "4,280", change: "+142 this month" },
  { icon: Download, label: "PDF Downloads", value: "18,392", change: "+2.1k this month" },
  { icon: Eye, label: "Page Views", value: "246.8k", change: "+18.3k this month" },
];

const recentIssues = [
  { id: 84, month: "Vesak Special", year: "2026", status: "Published", views: "12.4k", downloads: 342 },
  { id: 83, month: "April", year: "2026", status: "Published", views: "9.8k", downloads: 287 },
  { id: 82, month: "March", year: "2026", status: "Published", views: "8.3k", downloads: 256 },
  { id: 81, month: "February", year: "2026", status: "Published", views: "7.1k", downloads: 198 },
  { id: 80, month: "January", year: "2026", status: "Published", views: "6.5k", downloads: 176 },
];

const recentComments = [
  { user: "Anura P.", article: "The Silent Stones of Anuradhapura", date: "2 hours ago", text: "A beautiful meditation on impermanence. Thank you for this." },
  { user: "Sanduni K.", article: "Vesak: The Threefold Blessing", date: "5 hours ago", text: "This reframed my understanding of Vesak entirely." },
  { user: "Kasun J.", article: "Pali for Beginners", date: "1 day ago", text: "Finally, a grammar guide that doesn't assume I know Sanskrit!" },
];

export default function Admin() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "issues", label: "Issues", icon: FileText },
    { id: "articles", label: "Articles", icon: BookOpen },
    { id: "readers", label: "Readers", icon: Users },
    { id: "comments", label: "Comments", icon: MessageSquare },
  ];

  return (
    <>

      <div className="border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <Container className="flex h-14 items-center gap-6 overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`flex shrink-0 items-center gap-2 whitespace-nowrap border-b-2 px-1 py-3 text-sm font-medium transition ${
                activeTab === t.id
                  ? "border-primary text-primary"
                  : "border-transparent text-foreground/60 hover:text-foreground"
              }`}
            >
              <t.icon className="h-4 w-4" /> {t.label}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-medium text-accent-foreground transition hover:bg-primary">
              <Plus className="h-3.5 w-3.5" /> New Issue
            </button>
            <button className="grid h-8 w-8 place-items-center rounded-full border border-border text-foreground/60 hover:text-primary">
              <Settings className="h-4 w-4" />
            </button>
          </div>
        </Container>
      </div>

      <section className="py-16 md:py-20">
        <Container>
          {activeTab === "overview" && (
            <div>
              <SectionEyebrow>Admin Dashboard</SectionEyebrow>
              <h1 className="font-display text-4xl font-light leading-tight text-foreground sm:text-5xl">
                Welcome back, Editor.
              </h1>
              <p className="mt-3 text-base text-foreground/65">
                Here&apos;s what&apos;s happening at BOSAT this month.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {quickStats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-border/70 bg-card p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                        <s.icon className="h-5 w-5" />
                      </div>
                      <TrendingUp className="h-4 w-4 text-emerald-500" />
                    </div>
                    <div className="mt-4 font-display text-3xl font-light text-foreground">
                      {s.value}
                    </div>
                    <div className="text-xs uppercase tracking-widest text-foreground/50">
                      {s.label}
                    </div>
                    <div className="mt-2 text-[10px] text-emerald-600">{s.change}</div>
                  </div>
                ))}
              </div>

              <div className="mt-12 grid gap-8 lg:grid-cols-2">
                <div className="rounded-2xl border border-border/70 bg-card p-6">
                  <div className="flex items-center justify-between">
                    <h2 className="font-display text-xl font-medium text-foreground">Recent Issues</h2>
                    <button className="text-xs font-medium text-primary hover:underline">View all</button>
                  </div>
                  <div className="mt-6 space-y-3">
                    {recentIssues.slice(0, 4).map((issue) => (
                      <div
                        key={issue.id}
                        className="flex items-center justify-between rounded-xl bg-muted/50 px-4 py-3"
                      >
                        <div>
                          <div className="text-sm font-medium text-foreground">
                            Issue {issue.id} — {issue.month} {issue.year}
                          </div>
                          <div className="text-xs text-foreground/50">
                            {issue.views} views · {issue.downloads} downloads
                          </div>
                        </div>
                        <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-600">
                          {issue.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-border/70 bg-card p-6">
                  <div className="flex items-center justify-between">
                    <h2 className="font-display text-xl font-medium text-foreground">Recent Comments</h2>
                    <button className="text-xs font-medium text-primary hover:underline">View all</button>
                  </div>
                  <div className="mt-6 space-y-4">
                    {recentComments.map((c) => (
                      <div key={c.text} className="border-b border-border/60 pb-3 last:border-0 last:pb-0">
                        <div className="flex items-center justify-between text-xs text-foreground/50">
                          <span className="font-medium text-foreground/80">{c.user}</span>
                          <span>{c.date}</span>
                        </div>
                        <p className="mt-1 text-sm text-foreground/70 line-clamp-1">{c.text}</p>
                        <p className="mt-0.5 text-[10px] text-foreground/40">on &ldquo;{c.article}&rdquo;</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 rounded-2xl border border-border/70 bg-card p-6">
                <h2 className="font-display text-xl font-medium text-foreground">Monthly Views</h2>
                <div className="mt-6 flex items-end gap-2" style={{ height: 120 }}>
                  {[40, 55, 48, 70, 62, 85, 78, 92, 88, 100, 95, 110].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-primary/60 to-primary/30 transition hover:from-primary"
                      style={{ height: `${(h / 110) * 100}%` }}
                      title={`Month ${i + 1}: ${h * 100} views`}
                    />
                  ))}
                </div>
                <div className="mt-3 flex justify-between text-[10px] text-foreground/40">
                  <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span>
                  <span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
                  <span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "issues" && (
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <SectionEyebrow>Content Management</SectionEyebrow>
                  <h2 className="font-display text-4xl font-light leading-tight text-foreground sm:text-5xl">
                    All Issues
                  </h2>
                </div>
                <button className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition hover:bg-primary">
                  <Plus className="h-4 w-4" /> New Issue
                </button>
              </div>

              <div className="mt-10 overflow-hidden rounded-2xl border border-border/70">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted text-xs uppercase tracking-widest text-foreground/50">
                    <tr>
                      <th className="px-5 py-4 font-medium">Issue</th>
                      <th className="px-5 py-4 font-medium">Status</th>
                      <th className="px-5 py-4 font-medium">Views</th>
                      <th className="px-5 py-4 font-medium">Downloads</th>
                      <th className="px-5 py-4 font-medium">Articles</th>
                      <th className="px-5 py-4 font-medium" />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {recentIssues.map((issue) => (
                      <tr key={issue.id} className="bg-card transition hover:bg-muted/50">
                        <td className="px-5 py-4">
                          <div className="font-medium text-foreground">{issue.month} {issue.year}</div>
                          <div className="text-xs text-foreground/50">Issue #{issue.id}</div>
                        </td>
                        <td className="px-5 py-4">
                          <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-600">
                            {issue.status}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-foreground/70">{issue.views}</td>
                        <td className="px-5 py-4 text-foreground/70">{issue.downloads}</td>
                        <td className="px-5 py-4 text-foreground/70">12</td>
                        <td className="px-5 py-4">
                          <button className="grid h-8 w-8 place-items-center rounded-full text-foreground/40 hover:text-foreground">
                            <MoreHorizontal className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "articles" && (
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <SectionEyebrow>Content Management</SectionEyebrow>
                  <h2 className="font-display text-4xl font-light leading-tight text-foreground sm:text-5xl">
                    Articles
                  </h2>
                </div>
                <button className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition hover:bg-primary">
                  <Plus className="h-4 w-4" /> New Article
                </button>
              </div>

              <div className="mt-8 flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 sm:max-w-sm">
                <Search className="h-4 w-4 text-foreground/50" />
                <input
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-foreground/40 focus:outline-none"
                  placeholder="Search articles..."
                  aria-label="Search articles"
                />
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-border/70">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted text-xs uppercase tracking-widest text-foreground/50">
                    <tr>
                      <th className="px-5 py-4 font-medium">Title</th>
                      <th className="px-5 py-4 font-medium">Author</th>
                      <th className="px-5 py-4 font-medium">Issue</th>
                      <th className="px-5 py-4 font-medium">Views</th>
                      <th className="px-5 py-4 font-medium">Status</th>
                      <th className="px-5 py-4 font-medium" />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {[
                      { title: "The Silent Stones of Anuradhapura", author: "Ven. Dhammika Thero", issue: "84", views: "3.2k", status: "Published" },
                      { title: "Vesak: The Threefold Blessing", author: "Bhikkhu Ariyawansa", issue: "84", views: "2.8k", status: "Published" },
                      { title: "Sinhala Poetry After the War", author: "Prof. Kumari Ranasinghe", issue: "84", views: "1.9k", status: "Published" },
                      { title: "Reading the Palm Leaves", author: "Prof. Kumari Ranasinghe", issue: "83", views: "2.1k", status: "Published" },
                    ].map((a) => (
                      <tr key={a.title} className="bg-card transition hover:bg-muted/50">
                        <td className="px-5 py-4 font-medium text-foreground">{a.title}</td>
                        <td className="px-5 py-4 text-foreground/70">{a.author}</td>
                        <td className="px-5 py-4 text-foreground/70">#{a.issue}</td>
                        <td className="px-5 py-4 text-foreground/70">{a.views}</td>
                        <td className="px-5 py-4">
                          <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-600">
                            {a.status}
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          <button className="grid h-8 w-8 place-items-center rounded-full text-foreground/40 hover:text-foreground">
                            <MoreHorizontal className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "readers" && (
            <div>
              <SectionEyebrow>Community</SectionEyebrow>
              <h2 className="font-display text-4xl font-light leading-tight text-foreground sm:text-5xl">
                Readers
              </h2>
              <p className="mt-3 text-base text-foreground/65">
                {quickStats[1].value} registered readers — {quickStats[1].change}.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { name: "Anura Perera", email: "anura.p@example.com", since: "Jan 2024", articles: 34 },
                  { name: "Sanduni Kumari", email: "sanduni.k@example.com", since: "Mar 2024", articles: 28 },
                  { name: "Kasun Jayasuriya", email: "kasun.j@example.com", since: "Jun 2024", articles: 22 },
                  { name: "Nimali Fernando", email: "nimali.f@example.com", since: "Feb 2025", articles: 15 },
                  { name: "Rohan Silva", email: "rohan.s@example.com", since: "Aug 2024", articles: 19 },
                  { name: "Dinesh Wickrama", email: "dinesh.w@example.com", since: "Nov 2024", articles: 11 },
                ].map((r) => (
                  <div
                    key={r.email}
                    className="rounded-2xl border border-border/70 bg-card p-5"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-foreground">
                        {r.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div className="min-w-0">
                        <div className="truncate font-medium text-foreground">{r.name}</div>
                        <div className="text-xs text-foreground/50">{r.email}</div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between text-xs text-foreground/50">
                      <span>Reader since {r.since}</span>
                      <span>{r.articles} articles</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "comments" && (
            <div>
              <SectionEyebrow>Moderation</SectionEyebrow>
              <h2 className="font-display text-4xl font-light leading-tight text-foreground sm:text-5xl">
                Comments
              </h2>
              <p className="mt-3 text-base text-foreground/65">
                Recent reader comments across all issues.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  ...recentComments,
                  { user: "Malini G.", article: "The First Precept in Daily Life", date: "2 days ago", text: "This is exactly what I needed to read today. Thank you, Bhante." },
                  { user: "Priya M.", article: "Anuradhapura: A Photographic Essay", date: "3 days ago", text: "The photographs in this issue are breathtaking." },
                ].map((c) => (
                  <div
                    key={c.text}
                    className="rounded-2xl border border-border/70 bg-card p-5"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                          {c.user.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-foreground">{c.user}</div>
                          <div className="text-xs text-foreground/50">{c.date}</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="rounded-full border border-border px-3 py-1 text-[10px] font-medium text-foreground/60 hover:text-emerald-600">Approve</button>
                        <button className="rounded-full border border-border px-3 py-1 text-[10px] font-medium text-foreground/60 hover:text-red-500">Delete</button>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/75">{c.text}</p>
                    <p className="mt-2 text-[10px] text-foreground/40">
                      on &ldquo;{c.article}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>

    </>
  );
}
