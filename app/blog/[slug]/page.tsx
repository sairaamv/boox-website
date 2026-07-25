import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { articles } from "../data";
import JsonLd from "@/components/json-ld";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `https://booksnb.com/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      authors: ["Books & Beyond"],
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    author: { "@type": "Organization", name: "Books & Beyond", url: "https://booksnb.com" },
    publisher: { "@type": "Organization", name: "Books & Beyond", url: "https://booksnb.com" },
    url: `https://booksnb.com/blog/${article.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://booksnb.com" },
      { "@type": "ListItem", position: 2, name: "Accounting Insights", item: "https://booksnb.com/blog" },
      { "@type": "ListItem", position: 3, name: article.title, item: `https://booksnb.com/blog/${article.slug}` },
    ],
  };

  return (
    <>
      <JsonLd schema={articleSchema} />
      <JsonLd schema={breadcrumbSchema} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        {/* Breadcrumb */}
        <nav className="text-xs font-mono text-muted-foreground mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-foreground transition-colors">Insights</Link>
          <span>/</span>
          <span className="text-foreground">{article.title}</span>
        </nav>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono text-muted-foreground border border-border rounded px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Cover image */}
        <div className="relative w-full aspect-[1200/630] rounded-lg overflow-hidden mb-8 bg-muted">
          <Image
            src={article.coverImage}
            alt={article.coverImageAlt}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{article.title}</h1>

        {/* Meta */}
        <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground mb-10 pb-8 border-b border-border">
          <time dateTime={article.publishedAt}>
            {new Date(article.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span>·</span>
          <span>{article.readingMinutes} min read</span>
          <span>·</span>
          <span>Books &amp; Beyond</span>
        </div>

        {/* Content */}
        <div
          className="prose prose-sm max-w-none text-muted-foreground [&_h2]:text-foreground [&_h2]:font-bold [&_h2]:text-xl [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-foreground [&_h3]:font-semibold [&_h3]:text-base [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1 [&_a]:text-brand-forest [&_a]:underline [&_strong]:text-foreground"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Footer CTA */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">
            Books &amp; Beyond handles bookkeeping, tax filing, and payroll for businesses in the US, Canada, Australia, Singapore, and UK.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-block bg-brand-forest text-white font-medium px-6 py-2.5 rounded-lg hover:bg-brand-forest-deep transition-colors text-sm"
            >
              Book a Call
            </Link>
            <Link
              href="/blog"
              className="inline-block border border-border text-muted-foreground font-medium px-6 py-2.5 rounded-lg hover:bg-muted transition-colors text-sm"
            >
              More Articles
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
