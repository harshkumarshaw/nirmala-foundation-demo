import type { Metadata } from 'next'
import { institutesData } from '@/data/institutesData'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const institute = institutesData.find(i => i.slug === slug)

  if (!institute) {
    return { title: 'Institute Not Found | Nirmala Foundation' }
  }

  const titleMap: Record<string, string> = {
    jmn: `JMN Medical College Chakdaha | MBBS | Nirmala Foundation`,
    iinr: `IINR | Nursing College Kalyani | B.Sc. Nursing | INC Approved`,
    iipsr: `IIPSR | B.Pharm D.Pharm | Pharmacy College Kalyani | PCI Approved`,
    kgh: `Kalyani General Hospital | 605-Bed Super Specialty | Nadia`,
    iihmahs: `IIHMAHS | Hospital Administration College | BHA MHA | Kalyani`,
    ichfn: `ICHFN | Nursing College Kolkata | B.Sc. GNM Programs`,
    ccnr: `Care & Cure Nursing Institute | GNM Program | Barasat`,
  }

  return {
    title: titleMap[slug] || `${institute.name} | Nirmala Foundation`,
    description: institute.description,
    openGraph: {
      title: institute.name,
      description: institute.description,
      url: `https://nirmala-foundation-demo.vercel.app/institutes/${slug}`,
      siteName: 'Nirmala Foundation',
      type: 'website',
    },
  }
}

export default function InstituteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
