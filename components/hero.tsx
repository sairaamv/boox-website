"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import Link from "next/link";

const stats = [
  { label: "Faster month-end close", value: 5, suffix: "x", prefix: "" },
  { label: "Credentialed accountants", value: 20, suffix: "+", prefix: "" },
  { label: "Filing accuracy", value: 99.8, suffix: "%", prefix: "" },
];

function AnimatedStat({
  value,
  suffix,
  prefix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  prefix: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const isDecimal = value % 1 !== 0;
    const controls = animate(0, value, {
      duration: 1.6,
      delay,
      ease: "easeOut",
      onUpdate(v) {
        setDisplay(isDecimal ? v.toFixed(1) : Math.round(v).toLocaleString());
      },
    });
    return () => controls.stop();
  }, [inView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay + 0.1 }}
      className="bg-white/[0.06] border border-white/10 rounded-xl px-6 py-4 text-center min-w-[140px] backdrop-blur-sm"
    >
      <div className="text-2xl font-bold text-brand-forest-light font-mono tabular-nums">
        {prefix}
        {display}
        {suffix}
      </div>
      <div className="text-xs text-white/60 mt-1">{label}</div>
    </motion.div>
  );
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Hero() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative overflow-hidden text-center bg-ink -mt-16 pt-16">
      {/* Background: dot grid + single brand glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 60% 55% at 50% 30%, black 0%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 55% at 50% 30%, black 0%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-0 top-0 left-1/2 -translate-x-1/2 w-[640px] h-[420px] rounded-full opacity-20 blur-3xl bg-brand-gradient"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Badge */}
          <motion.div variants={item} className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-mono border border-white/15 rounded-full px-3 py-1.5 text-white/70 bg-white/[0.06] backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-forest-light opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-forest-light" />
              </span>
              AI Agents, live now · US · Canada · Australia · Singapore · UK
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.05] mb-6 tracking-tight"
          >
            Your books.{" "}
            <span className="text-brand-forest-light">Run by AI Agents.</span>
            <br />
            Backed by real CPAs.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={item}
            className="text-lg text-white/70 max-w-2xl mx-auto mb-10"
          >
            Bookkeeping, tax, and payroll — closed by AI Agents, reviewed by a
            dedicated accountant. No black box. No excuses. Every month, on time,
            in every country you operate.
          </motion.p>

          {/* Email capture */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-2 justify-center max-w-md mx-auto mb-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter work email"
              className="flex-1 rounded-lg bg-white/[0.07] border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-brand-forest-light transition-colors"
            />
            <Link
              href={`/contact${email ? `?email=${encodeURIComponent(email)}` : ""}`}
              className="inline-flex items-center justify-center rounded-lg text-sm font-semibold px-6 py-3 text-ink bg-brand-forest-light whitespace-nowrap transition-transform hover:scale-[1.02]"
            >
              Get a Demo
            </Link>
          </motion.div>
          <motion.div variants={item} className="mb-14">
            <Link href="/contact" className="text-sm text-white/60 hover:text-white underline underline-offset-4">
              or book a call with an accountant →
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-3 justify-center mb-16"
          >
            {["CPA-Led", "IRS-Compliant", "CRA-Certified", "ATO-Registered", "IRAS-Compliant", "HMRC-Registered"].map(
              (b) => (
                <span
                  key={b}
                  className="text-xs font-mono border border-white/15 rounded-lg px-4 py-2 text-white/60 bg-white/[0.04]"
                >
                  {b}
                </span>
              )
            )}
          </motion.div>
        </motion.div>

        {/* Animated stats */}
        <div className="flex flex-wrap justify-center gap-4">
          {stats.map((s, i) => (
            <AnimatedStat key={s.label} {...s} delay={0.4 + i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}
