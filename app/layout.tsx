import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "BooX — Virtual Accounting. Humans + AI.",
  description:
    "Expert accountants backed by AI-powered workflows. Faster closes, cleaner books, audit-ready output. Serving businesses in the US, Canada, and Australia.",
  metadataBase: new URL("https://boox.io"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "BooX — Virtual Accounting. Humans + AI.",
    description:
      "Expert accountants backed by AI-powered workflows for US, Canadian, and Australian businesses.",
    url: "https://boox.io",
    siteName: "BooX",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased font-sans bg-background text-foreground min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
