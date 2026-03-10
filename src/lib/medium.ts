type MediumFeedItem = {
  title?: string;
  link?: string;
  pubDate?: string;
  description?: string;
  categories?: string[];
};

export type MediumPost = {
  title: string;
  link: string;
  summary: string;
  pubDate: Date;
  categories: string[];
};

const FEED_URL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@viplav.fauzdar";

function stripHtml(value: string) {
  return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function summarize(value: string, maxChars = 220) {
  if (!value) return "";
  const clean = stripHtml(value);
  if (clean.length <= maxChars) return clean;
  return `${clean.slice(0, maxChars - 1).trimEnd()}…`;
}

function matchesTopic(item: MediumFeedItem, topic: string) {
  const normalized = topic.trim().toLowerCase();
  if (!normalized) return true;

  const categories = (item.categories || []).map((c) => c.toLowerCase());
  if (categories.includes(normalized)) return true;

  const title = (item.title || "").toLowerCase();
  const description = stripHtml(item.description || "").toLowerCase();
  return title.includes(normalized) || description.includes(normalized);
}

export async function fetchMediumPosts(topic = "aisecops", limit = 12): Promise<MediumPost[]> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 9000);

  try {
    const res = await fetch(FEED_URL, {
      signal: controller.signal,
      headers: { Accept: "application/json" }
    });
    if (!res.ok) throw new Error(`Medium feed HTTP ${res.status}`);

    const payload = await res.json();
    const items = Array.isArray(payload?.items) ? (payload.items as MediumFeedItem[]) : [];

    return items
      .filter((item) => matchesTopic(item, topic))
      .slice(0, limit)
      .map((item) => ({
        title: item.title || "Untitled",
        link: item.link || "https://medium.com/@viplav.fauzdar",
        summary: summarize(item.description || ""),
        pubDate: item.pubDate ? new Date(item.pubDate) : new Date(),
        categories: (item.categories || []).filter(Boolean)
      }));
  } catch (error) {
    console.warn("Failed to fetch Medium posts:", error);
    return [];
  } finally {
    clearTimeout(timer);
  }
}

