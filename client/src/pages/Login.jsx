import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import BosatMark from "@/components/common/BosatMark";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-background bosat-mandala-bg">
      <Navbar />

      <section className="flex items-center justify-center py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-md">
            <div className="mb-10 text-center">
              <div className="mb-4 flex justify-center">
                <BosatMark />
              </div>
              <h1 className="font-display text-4xl font-light text-foreground">Welcome back</h1>
              <p className="mt-2 text-sm text-foreground/60">
                Sign in to your BOSAT account to continue reading.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="text-sm font-medium text-foreground/70">
                  Email address
                </label>
                <div className="mt-1.5 flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 focus-within:border-primary/60">
                  <Mail className="h-4 w-4 text-foreground/40" />
                  <input
                    id="email"
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
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium text-foreground/70">
                    Password
                  </label>
                  <a href="#" className="text-xs text-primary hover:underline">
                    Forgot?
                  </a>
                </div>
                <div className="mt-1.5 flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 focus-within:border-primary/60">
                  <Lock className="h-4 w-4 text-foreground/40" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-transparent text-sm text-foreground placeholder:text-foreground/40 focus:outline-none"
                    placeholder="••••••••"
                    required
                    autoComplete="current-password"
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
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition hover:bg-primary"
              >
                Sign in <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-foreground/60">
              <span>Don&apos;t have an account? </span>
              <Link to="/register" className="font-medium text-primary hover:underline">
                Create one
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <span className="h-px flex-1 bg-border/70" />
              <span className="text-xs text-foreground/40">or continue with</span>
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

            <p className="mt-8 text-center text-xs text-foreground/40">
              By signing in, you agree to our{" "}
              <a href="#" className="text-primary hover:underline">Terms of Service</a>{" "}
              and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
            </p>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
