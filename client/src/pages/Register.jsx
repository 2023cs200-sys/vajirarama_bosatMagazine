import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import BosatMark from "@/components/common/BosatMark";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-background bosat-mandala-bg">
      <Navbar />

      <section className="flex items-center justify-center py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-md">
            <div className="mb-10 text-center">
              <div className="mb-4 flex justify-center">
                <BosatMark />
              </div>
              <h1 className="font-display text-4xl font-light text-foreground">Join BOSAT</h1>
              <p className="mt-2 text-sm text-foreground/60">
                Create a free account to save articles, track your reading, and more.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-foreground/70">
                  Full name
                </label>
                <div className="mt-1.5 flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 focus-within:border-primary/60">
                  <User className="h-4 w-4 text-foreground/40" />
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-transparent text-sm text-foreground placeholder:text-foreground/40 focus:outline-none"
                    placeholder="Your full name"
                    required
                    autoComplete="name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="reg-email" className="text-sm font-medium text-foreground/70">
                  Email address
                </label>
                <div className="mt-1.5 flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 focus-within:border-primary/60">
                  <Mail className="h-4 w-4 text-foreground/40" />
                  <input
                    id="reg-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent text-sm text-foreground placeholder:text-foreground/40 focus:outline-none"
                    placeholder="you@example.com"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="reg-password" className="text-sm font-medium text-foreground/70">
                  Password
                </label>
                <div className="mt-1.5 flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 focus-within:border-primary/60">
                  <Lock className="h-4 w-4 text-foreground/40" />
                  <input
                    id="reg-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-transparent text-sm text-foreground placeholder:text-foreground/40 focus:outline-none"
                    placeholder="At least 8 characters"
                    required
                    minLength={8}
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-foreground/40" />
                    ) : (
                      <Eye className="h-4 w-4 text-foreground/40" />
                    )}
                  </button>
                </div>
                <p className="mt-1.5 text-xs text-foreground/40">Must be at least 8 characters</p>
              </div>

              <label className="flex items-start gap-3">
                <button
                  type="button"
                  onClick={() => setAgreed(!agreed)}
                  className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded border transition ${
                    agreed
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background"
                  }`}
                  role="checkbox"
                  aria-checked={agreed}
                  aria-label="Agree to terms"
                >
                  {agreed && <Check className="h-3 w-3" />}
                </button>
                <span className="text-sm text-foreground/60">
                  I agree to the{" "}
                  <a href="#" className="text-primary hover:underline">Terms of Service</a>{" "}
                  and{" "}
                  <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                </span>
              </label>

              <button
                type="submit"
                disabled={!agreed}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition hover:bg-primary disabled:cursor-not-allowed disabled:opacity-50"
              >
                Create account <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-foreground/60">
              <span>Already have an account? </span>
              <Link to="/login" className="font-medium text-primary hover:underline">
                Sign in
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <span className="h-px flex-1 bg-border/70" />
              <span className="text-xs text-foreground/40">or sign up with</span>
              <span className="h-px flex-1 bg-border/70" />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground/70 transition hover:border-primary hover:text-primary">
                Google
              </button>
              <button className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground/70 transition hover:border-primary hover:text-primary">
                Apple
              </button>
            </div>

            <p className="mt-8 text-center text-xs leading-relaxed text-foreground/40">
              BOSAT is free to read. Creating an account helps us improve your
              experience and lets you pick up where you left off.
            </p>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
