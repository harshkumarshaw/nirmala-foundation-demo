import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apply Now 2025-26 | Admissions | Nirmala Foundation',
  description: 'Submit your application for MBBS, B.Sc. Nursing, GNM, B.Pharm, MHA and other healthcare programs at Nirmala Foundation institutes.',
  openGraph: {
    title: 'Apply Now | Nirmala Foundation Admissions 2025-26',
    description: 'Submit your application for healthcare programs across Nirmala Foundation institutes.',
    url: 'https://nirmala-foundation-demo.vercel.app/apply',
    siteName: 'Nirmala Foundation',
    type: 'website',
  }
}

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
