import Link from "next/link";

interface CtaButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

export default function CtaButton({
  href,
  variant = "primary",
  children,
  className = "",
}: CtaButtonProps) {
  const base = "inline-block px-6 py-3 rounded-lg text-sm font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-brand-forest text-white hover:bg-brand-forest-light"
      : "border border-brand-forest text-brand-forest hover:bg-muted";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
