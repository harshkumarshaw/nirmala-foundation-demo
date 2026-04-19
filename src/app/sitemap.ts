import { MetadataRoute } from 'next'
import { institutesData } from '@/data/institutesData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nirmala-foundation-demo.vercel.app';
  
  const staticRoutes = [
    '',
    '/about',
    '/admissions',
    '/apply',
    '/career',
    '/contact',
    '/gallery',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const instituteRoutes = institutesData.map((inst) => ({
    url: `${baseUrl}/institutes/${inst.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...instituteRoutes];
}
