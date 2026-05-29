import { FadeUp } from "../../components/FadeUp";
import { blog } from "../../content";
import type { Article } from "../api/blog/route";

async function getArticles(): Promise<Article[]> {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

    const res = await fetch(`${baseUrl}/api/blog`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("API error");
    const data = await res.json();
    return data.articles ?? [];
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const rssArticles = await getArticles();
  const articles = rssArticles.length > 0 ? rssArticles : blog.fallbackArticles;

  return (
    <main className="pt-28 pb-20">
      {/* Header */}
      <section className="mx-auto max-w-container px-8 border-t border-border pt-10 mb-16">
        <FadeUp>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-none text-primary mt-8 mb-5">
            {blog.headline}
          </h1>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="font-body text-secondary text-lg max-w-xl leading-relaxed">
            {blog.subheadline}
          </p>
        </FadeUp>
      </section>

      {/* Articles */}
      <section className="mx-auto max-w-container px-8">
        <ul className="divide-y divide-border border-t border-border">
          {articles.map((article, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <li>
                <a
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col md:flex-row md:items-start gap-6 py-10"
                >
                  {/* Index */}
                  <span className="font-ui text-xs text-secondary tracking-widest shrink-0 md:w-12 pt-1">
                    {article.index}
                  </span>

                  {/* Thumbnail */}
                  <div className="md:w-44 shrink-0">
                    <div className="aspect-square overflow-hidden bg-surface border border-border relative">
                      {article.image ? (
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-display text-5xl font-bold text-primary/[0.07] select-none">
                            {article.index}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-3">
                      <span className="font-ui text-[10px] tracking-widest uppercase border border-border text-secondary px-2.5 py-1 bg-surface">
                        {article.tag}
                      </span>
                    </div>
                    <h2 className="font-display text-3xl md:text-[2.25rem] text-primary leading-tight mb-3 group-hover:text-accent transition-colors duration-200">
                      {article.title}
                    </h2>
                    {article.description && (
                      <p className="font-body text-secondary leading-relaxed max-w-2xl mb-5 text-sm">
                        {article.description}
                      </p>
                    )}
                    <span className="font-ui text-xs tracking-widest uppercase text-secondary group-hover:text-accent transition-colors duration-200">
                      Read on Medium →
                    </span>
                  </div>
                </a>
              </li>
            </FadeUp>
          ))}
        </ul>
      </section>

      {/* Profile link */}
      <section className="mx-auto max-w-container px-8 mt-10 pt-8 border-t border-border">
        <FadeUp>
          <a
            href={blog.profileHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-ui text-xs tracking-widest uppercase text-secondary hover:text-accent transition-colors duration-200"
          >
            View all articles on Medium ↗
          </a>
        </FadeUp>
      </section>
    </main>
  );
}
