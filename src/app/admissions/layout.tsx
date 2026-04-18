import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admissions 2026 | MBBS, Nursing, Pharmacy | Nirmala Foundation',
  description: 'Apply for MBBS, B.Sc. Nursing, GNM, B.Pharm programs at Nirmala Foundation institutions. Eligibility criteria, scholarships, and Student Credit Card support.',
  openGraph: {
    title: 'Admissions 2026 | Nirmala Foundation',
    description: 'Apply for MBBS, Nursing, Pharmacy programs. Scholarships and Student Credit Card available.',
    url: 'https://nirmala-foundation-demo.vercel.app/admissions',
    siteName: 'Nirmala Foundation',
    type: 'website',
  }
}

export default function AdmissionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
