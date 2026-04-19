import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us – Nirmala Foundation',
  description: 'Learn about Nirmala Foundation\'s mission and history. We are an education and healthcare NGO in West Bengal.',
  openGraph: {
    title: 'About Nirmala Foundation',
    description: 'Transforming healthcare and education in India.',
    url: 'https://nirmala-foundation-demo.vercel.app/about',
    type: 'website',
  }
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
