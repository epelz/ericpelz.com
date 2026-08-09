// Canonical site identity. The apex domain 308-redirects to www, so www is the
// canonical origin — social scrapers should never see two URLs for one page.
const SITE_URL = "https://www.ericpelz.com";

export const SITE_TITLE = "Eric Pelz";
export const SITE_AUTHOR = "Eric Pelz";
export const SITE_DESCRIPTION = "Eric Pelz is a software engineer";
export const SITE_KEYWORDS =
  "blog, javascript, typescript, react, simplicity, engineering, coding, product";

// og:image must be an absolute URL, and scrapers won't follow redirects for it.
// This is the only image the site ships; it's square, hence twitter:card=summary.
export const DEFAULT_IMAGE = "/images/profile.jpg";
export const DEFAULT_IMAGE_WIDTH = 220;
export const DEFAULT_IMAGE_HEIGHT = 220;

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).href;
}
