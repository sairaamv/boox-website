import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent monthly plans for US, Canadian, and Australian businesses. Starter from $199/mo. Books & Beyond.",
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
