import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Books & Beyond — Virtual Accounting & Auditing",
    template: "%s | Books & Beyond",
  },
  description:
    "Expert accountants backed by AI-powered workflows. Faster closes, cleaner books, audit-ready output. Serving businesses in the US, Canada, and Australia.",
  metadataBase: new URL("https://booksnb.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Books & Beyond — Virtual Accounting & Auditing",
    description:
      "Expert accountants backed by AI-powered workflows for US, Canadian, and Australian businesses.",
    url: "https://booksnb.com",
    siteName: "Books & Beyond",
    type: "website",
    images: [{ url: "/booksnb-icon.svg", width: 512, height: 512, alt: "Books & Beyond" }],
  },
  twitter: {
    card: "summary",
    title: "Books & Beyond — Virtual Accounting & Auditing",
    description:
      "Expert accountants backed by AI-powered workflows for US, Canadian, and Australian businesses.",
    images: ["/booksnb-icon.svg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/booksnb-icon.svg", type: "image/svg+xml" },
    ],
    apple: "/booksnb-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistMono.variable}>
      <body className="antialiased font-sans bg-background text-foreground min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
