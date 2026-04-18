import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Nirmala Foundation | Healthcare Education Trust | Kalyani, WB',
  description: 'Learn about Nirmala Foundation — a registered charitable trust established in 2017, operating 7 healthcare education institutes and a 605-bed hospital in West Bengal.',
  openGraph: {
    title: 'About Nirmala Foundation',
    description: 'Registered charitable trust operating 7 healthcare education institutes and KGH hospital in West Bengal.',
    url: 'https://nirmala-foundation-demo.vercel.app/about',
    siteName: 'Nirmala Foundation',
    type: 'website',
  }
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
