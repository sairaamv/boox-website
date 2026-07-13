import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Books & Beyond team. We respond within 1 business day — no sales scripts.",
  alternates: { canonical: "https://booksnb.com/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
