import { useState } from "react";
import { Mail, MapPin, Phone, Send, MessageSquare, User, FileText, ArrowRight, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import Container from "@/components/common/Container";
import Divider from "@/components/common/Divider";
import SectionEyebrow from "@/components/common/SectionEyebrow";

const contactMethods = [
  { icon: Mail, label: "Email", value: "editors@bosat.lk", href: "mailto:editors@bosat.lk" },
  { icon: MapPin, label: "Address", value: "Colombo, Sri Lanka" },
  { icon: Phone, label: "Phone", value: "+94 11 234 5678", href: "tel:+94112345678" },
  { icon: MessageSquare, label: "WhatsApp", value: "+94 77 123 4567" },
];

const faqs = [
  {
    q: "How can I submit an article to BOSAT?",
    a: "We welcome submissions from scholars, monastics, and practitioners. Please email your proposal to editors@bosat.lk with a brief outline and your background.",
  },
  {
    q: "Is BOSAT available in print?",
    a: "BOSAT is primarily a digital publication. A limited print edition is available for supporters and can be delivered within Sri Lanka.",
  },
  {
    q: "Can I republish BOSAT articles?",
    a: "Our articles are published under Creative Commons Attribution-NonCommercial 4.0. You may share with attribution for non-commercial purposes.",
  },
  {
    q: "How do I support BOSAT?",
    a: "You can support us through a monthly or annual supporter subscription, which gives you access to the supporter edition and print copy.",
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>

      <section className="py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-4xl">
            <SectionEyebrow>Get in Touch</SectionEyebrow>
            <h1 className="font-display text-5xl font-light leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl">
              We&apos;d love to hear <span className="bosat-gradient-text">from you</span>.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/70">
              Whether you have a question, a submission, or simply want to say
              hello — the BOSAT editorial team is always glad to hear from
              readers.
            </p>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
            <div className="space-y-6">
              {contactMethods.map((m) => (
                <div
                  key={m.label}
                  className="flex items-center gap-4 rounded-2xl border border-border/70 bg-card p-5"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <m.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-foreground/50">
                      {m.label}
                    </div>
                    {m.href ? (
                      <a href={m.href} className="mt-0.5 font-medium text-foreground hover:text-primary">
                        {m.value}
                      </a>
                    ) : (
                      <div className="mt-0.5 font-medium text-foreground">{m.value}</div>
                    )}
                  </div>
                </div>
              ))}

              <div className="rounded-2xl border border-border/70 bg-card p-6">
                <div className="text-xs uppercase tracking-widest text-foreground/50">Follow us</div>
                <div className="mt-4 flex gap-3">
                  {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground/60 transition hover:border-primary hover:text-primary"
                      aria-label={`Social media ${i}`}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border/70 bg-card p-6">
                <div className="text-xs uppercase tracking-widest text-foreground/50">Response time</div>
                <p className="mt-2 text-sm text-foreground/70">
                  We typically respond within 24–48 hours during weekdays.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="text-sm font-medium text-foreground/70">
                    Your name
                  </label>
                  <div className="mt-1.5 flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 focus-within:border-primary/60">
                    <User className="h-4 w-4 text-foreground/40" />
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-transparent text-sm text-foreground placeholder:text-foreground/40 focus:outline-none"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-sm font-medium text-foreground/70">
                    Email address
                  </label>
                  <div className="mt-1.5 flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 focus-within:border-primary/60">
                    <Mail className="h-4 w-4 text-foreground/40" />
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent text-sm text-foreground placeholder:text-foreground/40 focus:outline-none"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="text-sm font-medium text-foreground/70">
                  Subject
                </label>
                <div className="mt-1.5 flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 focus-within:border-primary/60">
                  <FileText className="h-4 w-4 text-foreground/40" />
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-transparent text-sm text-foreground placeholder:text-foreground/40 focus:outline-none"
                    placeholder="How can we help?"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="text-sm font-medium text-foreground/70">
                  Message
                </label>
                <div className="mt-1.5 flex gap-3 rounded-xl border border-border bg-background px-4 py-3 focus-within:border-primary/60">
                  <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-foreground/40" />
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="min-h-[140px] w-full resize-y bg-transparent text-sm text-foreground placeholder:text-foreground/40 focus:outline-none"
                    placeholder="Write your message here..."
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition hover:bg-primary"
              >
                Send Message <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </Container>
      </section>

      <Divider />

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <SectionEyebrow>Frequently Asked Questions</SectionEyebrow>
              <h2 className="font-display text-4xl font-light leading-tight text-foreground sm:text-5xl">
                Quick answers.
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-border/70 bg-card [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between p-5 font-medium text-foreground">
                    <span>{faq.q}</span>
                    <ArrowRight className="h-4 w-4 text-foreground/40 transition group-open:rotate-90" />
                  </summary>
                  <div className="border-t border-border/60 px-5 pb-5 pt-3">
                    <p className="text-sm leading-relaxed text-foreground/65">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

    </>
  );
}
