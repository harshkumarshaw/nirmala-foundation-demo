import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Campus Gallery | Nirmala Foundation Institutes',
  description: 'Explore campus photos from JMN Medical College, IINR Nursing, IIPSR Pharmacy, KGH Hospital and other Nirmala Foundation institutes.',
  openGraph: {
    title: 'Campus Gallery | Nirmala Foundation',
    description: 'Photos from Nirmala Foundation healthcare education institutes across West Bengal.',
    url: 'https://nirmala-foundation-demo.vercel.app/gallery',
    siteName: 'Nirmala Foundation',
    type: 'website',
  }
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
