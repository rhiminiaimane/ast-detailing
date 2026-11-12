import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old query-string service URLs -> dedicated, indexable pages
      {
        source: '/services',
        has: [{ type: 'query', key: 'service', value: 'ppf' }],
        destination: '/services/ppf',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/services/ceramique',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [{ source: '/sitemap.xml', destination: '/api/sitemap' }];
  },
};

export default nextConfig;
