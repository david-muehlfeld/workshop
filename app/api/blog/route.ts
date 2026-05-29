import { NextResponse } from "next/server";

export interface Article {
  index: string;
  title: string;
  tag: string;
  description: string;
  href: string;
  image: string | null;
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/&[a-z]+;/gi, " ").trim();
}

function parseRSS(xml: string): Article[] {
  const items: Article[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const item = match[1];

    const titleMatch =
      item.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/) ||
      item.match(/<title>([\s\S]*?)<\/title>/);
    const linkMatch = item.match(/<link>([\s\S]*?)<\/link>/);
    // Medium uses content:encoded for the full HTML body
    const contentMatch =
      item.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]>/) ||
      item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/) ||
      item.match(/<description>([\s\S]*?)<\/description>/);
    const categoryMatch =
      item.match(/<category><!\[CDATA\[([\s\S]*?)\]\]><\/category>/) ||
      item.match(/<category>([\s\S]*?)<\/category>/);

    if (!titleMatch || !linkMatch) continue;

    const title = titleMatch[1].trim();
    const href = linkMatch[1].trim().split("?")[0];
    const htmlBody = contentMatch?.[1] || "";
    const description = stripHtml(htmlBody).slice(0, 160) + (htmlBody.length > 160 ? "…" : "");
    const tag = categoryMatch ? categoryMatch[1].trim() : "Design";

    // Extract first CDN image from content
    const imgMatch = htmlBody.match(/src="(https:\/\/cdn-images[^"\s]+)"/);
    const image = imgMatch ? imgMatch[1].split("&")[0] : null;

    if (title && href) {
      items.push({
        index: String(items.length + 1).padStart(2, "0"),
        title,
        tag,
        description,
        href,
        image,
      });
    }
  }

  return items.slice(0, 4);
}

export async function GET() {
  try {
    const res = await fetch("https://medium.com/feed/@davidmuehlfeld", {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("RSS fetch failed");

    const xml = await res.text();
    const articles = parseRSS(xml);

    if (articles.length === 0) throw new Error("No articles parsed");

    return NextResponse.json({ articles, source: "rss" });
  } catch {
    return NextResponse.json({ articles: null, source: "fallback" });
  }
}
