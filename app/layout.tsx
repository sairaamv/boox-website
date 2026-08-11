import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import JsonLd from "@/components/json-ld";

const satoshi = localFont({
  src: [
    { path: "./fonts/satoshi-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/satoshi-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/satoshi-700.woff2", weight: "700", style: "normal" },
    { path: "./fonts/satoshi-900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const spaceGrotesk = localFont({
  src: [
    { path: "./fonts/spacegrotesk-variable.woff2", weight: "500 700", style: "normal" },
  ],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Books & Beyond — Virtual Accounting & Auditing",
    template: "%s | Books & Beyond",
  },
  description:
    "CPA-led bookkeeping backed by proven processes. Faster closes, cleaner books, audit-ready output. Serving businesses in the US, Canada, Australia, Singapore, and UK.",
  metadataBase: new URL("https://booksnb.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "https://booksnb.com/us",
      "en-CA": "https://booksnb.com/ca",
      "en-AU": "https://booksnb.com/au",
      "en-GB": "https://booksnb.com/uk",
      "en-SG": "https://booksnb.com/sg",
      "x-default": "https://booksnb.com",
    },
  },
  openGraph: {
    title: "Books & Beyond — Virtual Accounting & Auditing",
    description:
      "CPA-led bookkeeping backed by proven processes for businesses in the US, Canada, Australia, Singapore, and UK.",
    url: "https://booksnb.com",
    siteName: "Books & Beyond",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Books & Beyond — Virtual Accounting & Auditing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Books & Beyond — Virtual Accounting & Auditing",
    description:
      "CPA-led bookkeeping backed by proven processes for businesses in the US, Canada, Australia, Singapore, and UK.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/booksnb-icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Books & Beyond",
  url: "https://booksnb.com",
  logo: "https://booksnb.com/booksnb-icon.svg",
  description:
    "CPA-led virtual accounting and auditing firm serving businesses in the US, Canada, Australia, Singapore, and UK.",
  email: "hello@booksnb.com",
  areaServed: ["US", "CA", "AU", "SG", "GB"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@booksnb.com",
    availableLanguage: "English",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Books & Beyond",
  url: "https://booksnb.com",
  image: "https://booksnb.com/og-image.png",
  email: "hello@booksnb.com",
  priceRange: "$$",
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "Australia" },
    { "@type": "Country", name: "Singapore" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Accounting Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bookkeeping" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tax Filing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Payroll" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Audit Support" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "CFO Advisory" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${satoshi.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased font-sans bg-background text-foreground min-h-screen flex flex-col">
        <JsonLd schema={organizationSchema} />
        <JsonLd schema={professionalServiceSchema} />
        <Nav />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
