import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import BosatMark from "@/components/common/BosatMark";
import Container from "@/components/common/Container";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-border/70 bg-accent text-accent-foreground">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <BosatMark />
              <span className="font-display text-2xl font-semibold">BOSAT</span>
            </div>
            <p className="mt-5 max-w-sm text-sm text-accent-foreground/70">
              A monthly digital magazine of Buddhist thought, Sri Lankan
              heritage and everyday practice.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-accent-foreground/80 transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-secondary">Explore</div>
            <ul className="mt-4 space-y-2 text-sm text-accent-foreground/75">
              {["Latest Issue", "Archive", "Categories", "Learning Hub", "About"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-primary">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-secondary">Contact</div>
            <ul className="mt-4 space-y-2 text-sm text-accent-foreground/75">
              <li>editors@bosat.lk</li>
              <li>Colombo, Sri Lanka</li>
              <li className="pt-2">
                <a href="#" className="hover:text-primary">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">Publication License</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-accent-foreground/60 md:flex-row">
          <div>&copy; {new Date().getFullYear()} BOSAT Publication. All rights reserved.</div>
          <div className="font-sinhala">ප්‍රඥාව හා දයාවෙන් · With wisdom & compassion</div>
        </div>
      </Container>
    </footer>
  );
}
