"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import CtaButton from "@/components/cta-button";

const stats = [
  { label: "Faster month-end close", value: 5, suffix: "x", prefix: "" },
  { label: "Transactions reconciled", value: 2847, suffix: "", prefix: "" },
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
      className="bg-card border border-border rounded-xl px-6 py-4 shadow-sm text-center min-w-[140px]"
    >
      <div className="text-2xl font-bold text-brand-forest font-mono tabular-nums">
        {prefix}{display}{suffix}
      </div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
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
  return (
    <section className="relative overflow-hidden max-w-6xl mx-auto px-4 sm:px-6 py-24 text-center">
      {/* Background blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full opacity-25 blur-3xl animate-blob"
          style={{ background: "var(--brand-gradient)" }}
        />
        <div
          className="absolute -bottom-24 -right-16 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl animate-blob"
          style={{
            background: "var(--brand-gradient)",
            animationDelay: "2.5s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full opacity-10 blur-3xl animate-blob"
          style={{
            background: "var(--brand-gradient)",
            animationDelay: "5s",
          }}
        />
      </div>

      <motion.div variants={container} initial="hidden" animate="show">
        {/* Badge */}
        <motion.div variants={item} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono border border-border rounded-lg px-3 py-1.5 text-muted-foreground bg-card/80 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-forest opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-forest" />
            </span>
            Serving US · Canada · Australia
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl font-bold text-foreground leading-tight mb-6"
        >
          Virtual Accounting.{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: "var(--brand-gradient)" }}
          >
            Done Right.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={item}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Expert accountants backed by proven processes — faster closes,
          cleaner books, audit-ready output. Serving businesses across the US,
          Canada, and Australia.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-14"
        >
          <CtaButton href="/contact" variant="primary">
            Book a Call
          </CtaButton>
          <CtaButton href="/services" variant="secondary">
            Get Started
          </CtaButton>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-16"
        >
          {["IRS-Compliant", "CRA-Certified", "ATO-Registered"].map((b) => (
            <span
              key={b}
              className="text-xs font-mono border border-border rounded-lg px-4 py-2 text-muted-foreground bg-card/80"
            >
              {b}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Animated stats */}
      <div className="flex flex-wrap justify-center gap-4">
        {stats.map((s, i) => (
          <AnimatedStat key={s.label} {...s} delay={0.4 + i * 0.15} />
        ))}
      </div>
    </section>
  );
}
