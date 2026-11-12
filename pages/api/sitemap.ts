import type { NextApiRequest, NextApiResponse } from 'next';

const SITE_URL = 'https://autospatanger.com';

// Bump `lastmod` when a page's content actually changes.
const urls = [
  { path: '/', lastmod: '2026-11-12' },
  { path: '/services/ceramique', lastmod: '2026-11-12' },
  { path: '/services/ppf', lastmod: '2026-11-12' },
  { path: '/packs', lastmod: '2026-11-12' },
  { path: '/galerie', lastmod: '2026-11-12' },
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const body = urls
    .map(({ path, lastmod }) => `  <url>\n    <loc>${SITE_URL}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`)
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800');
  res.status(200).send(sitemap);
}
