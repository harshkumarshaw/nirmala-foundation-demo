import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import { institutesData } from '@/data/institutesData'
import MobileNav from '@/components/MobileNav'

export const metadata: Metadata = {
  title: 'Nirmala Foundation | Healthcare Education | Kalyani, West Bengal',
  description: 'Nirmala Foundation operates 7 premier healthcare education institutes and a 605-bed super specialty hospital in West Bengal. MBBS, Nursing, Pharmacy admissions open.',
  openGraph: {
    title: 'Nirmala Foundation | Healthcare Education | Kalyani, West Bengal',
    description: 'Premier healthcare education ecosystem — 7 institutes, 605-bed hospital, 4500+ students. Admissions open 2025-26.',
    url: 'https://nirmala-foundation-demo.vercel.app',
    siteName: 'Nirmala Foundation',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nirmala Foundation | Healthcare Education',
    description: 'Premier healthcare education ecosystem in West Bengal.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Nirmala Foundation",
    "url": "https://nirmala-foundation-demo.vercel.app",
    "logo": "https://nirmala-foundation-demo.vercel.app/logo.png",
    "description": "Registered charitable trust uplifting society through quality education across nursing, medicine, pharmacy, and management.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kalyani",
      "addressRegion": "West Bengal",
      "addressCountry": "IN"
    },
    "telephone": "+919831050222",
    "email": "info@nirmalafoundation.co.in"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-nav" aria-label="Skip to main content">Skip to main content</a>
        <nav className="navContainer" aria-label="Main Navigation">
          <Link href="/" className="navLogo" aria-label="Nirmala Foundation Home">
            Nirmala Foundation
          </Link>
          <div className="navLinks desktopLinks">
            {/* 1. Our Institutes */}
            <div className="navItem">
              Our Institutes
              <div className="dropdownMenu">
                {institutesData.map(inst => (
                  <Link key={inst.slug} href={`/institutes/${inst.slug}`} className="dropdownLink">
                    {inst.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* 2. Programs - Grouped by Category */}
            <div className="navItem">
              Programs
              <div className="dropdownMenu">
                <div className="dropdownGrid">
                  <div className="dropdownCol">
                    <span className="colTitle">Medical</span>
                    <Link href="/institutes/jmn" className="dropdownLink">MBBS (Medical)</Link>
                  </div>
                  <div className="dropdownCol">
                    <span className="colTitle">Nursing</span>
                    <div className="navSubGroup">
                      <span className="subTitle">B.Sc. Nursing</span>
                      <Link href="/institutes/iinr" className="dropdownLink">Kalyani Campus (IINR)</Link>
                      <Link href="/institutes/ichfn" className="dropdownLink">Kolkata Campus (ICHFN)</Link>
                    </div>
                    <div className="navSubGroup">
                      <span className="subTitle">GNM Nursing</span>
                      <Link href="/institutes/iinr" className="dropdownLink">Kalyani (IINR)</Link>
                      <Link href="/institutes/ccnr" className="dropdownLink">Barasat (CCNI)</Link>
                      <Link href="/institutes/ichfn" className="dropdownLink">Park Circus (ICHFN)</Link>
                    </div>
                    <Link href="/institutes/iinr" className="dropdownLink">Post Basic B.Sc. Nursing</Link>
                    <Link href="/institutes/iinr" className="dropdownLink">M.Sc. Nursing</Link>
                  </div>
                  <div className="dropdownCol">
                    <span className="colTitle">Pharmacy</span>
                    <Link href="/institutes/iipsr" className="dropdownLink">B.Pharm</Link>
                    <Link href="/institutes/iipsr" className="dropdownLink">D.Pharm</Link>
                  </div>
                  <div className="dropdownCol">
                    <span className="colTitle">Allied Health</span>
                    <Link href="/institutes/iihmahs" className="dropdownLink">BHA (Admin)</Link>
                    <Link href="/institutes/iihmahs" className="dropdownLink">MHA (Admin)</Link>
                    <Link href="/institutes/iihmahs" className="dropdownLink">Applied Nutrition</Link>
                  </div>
                  <div className="dropdownCol">
                    <span className="colTitle">Special Ed</span>
                    <Link href="/institutes/iser" className="dropdownLink">Early Intervention</Link>
                    <Link href="/institutes/iser" className="dropdownLink">Special Education</Link>
                    <Link href="/institutes/iser" className="dropdownLink">Vocational Training</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="navItem">
              About Us
              <div className="dropdownMenu">
                <Link href="/about" className="dropdownLink">Our Story</Link>
                <Link href="/about#leadership" className="dropdownLink">Leadership</Link>
                <Link href="/about#legal" className="dropdownLink">Trust Registration</Link>
                <Link href="/gallery" className="dropdownLink">Gallery</Link>
                <Link href="/career" className="dropdownLink">Careers</Link>
              </div>
            </div>

            {/* 3. Admissions Dropdown */}
            <div className="navItem">
              Admissions
              <div className="dropdownMenu">
                <Link href="/admissions#process" className="dropdownLink">Admission Process</Link>
                <Link href="/admissions#eligibility" className="dropdownLink">Eligibility Criteria</Link>
                <Link href="/admissions#scholarships" className="dropdownLink">Scholarships & Aid</Link>
                <Link href="/admissions#credit-card" className="dropdownLink">Student Credit Card</Link>
              </div>
            </div>

            {/* 4. Contact Us Dropdown */}
            <div className="navItem">
              Contact Us
              <div className="dropdownMenu">
                <Link href="/contact#kolkata" className="dropdownLink">Kolkata Office</Link>
                <Link href="/contact#kalyani" className="dropdownLink">Kalyani Campus</Link>
                <Link href="/contact#barasat" className="dropdownLink">Barasat Campus</Link>
                <Link href="/contact#query" className="dropdownLink">General Inquiry</Link>
              </div>
            </div>

            <Link href="/apply" tabIndex={-1}>
              <button className="btnPrimary" aria-label="Apply Now">Apply Now</button>
            </Link>
          </div>
          <MobileNav />
        </nav>

        <main id="main-content">
          {children}
        </main>

        <footer className="footerMain">
          <div className="footerGrid">
            <div className="footerBrand">
              <h3>Nirmala Foundation</h3>
              <p>Registered charitable trust uplifting society through quality education across nursing, medicine, pharmacy, and management.</p>
              <p style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)', marginTop: '1rem', fontSize: '0.9rem' }}>&ldquo;Care is not a service… It is a promise.&rdquo;</p>
            </div>
            <div className="footerCol">
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/admissions">Admissions</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/sitemap.xml">Sitemap</Link></li>
              </ul>
            </div>
            <div className="footerCol">
              <h4>Institutions</h4>
              <ul>
                <li><Link href="/institutes/jmn">JMN Medical College</Link></li>
                <li><Link href="/institutes/iinr">IINR Nursing</Link></li>
                <li><Link href="/institutes/iipsr">IIPSR Pharmacy</Link></li>
                <li><Link href="/institutes/iihmahs">IIHMAHS Administration</Link></li>
              </ul>
            </div>
            <div className="footerCol">
              <h4>Contact & Legal</h4>
              <ul>
                <li>Kalyani, Nadia, West Bengal</li>
                <li><a href="mailto:info@nirmalafoundation.co.in">info@nirmalafoundation.co.in</a></li>
                <li>
                  <a href="tel:+919831050222">+91 98310 50222</a><br/>
                  <a href="https://wa.me/919831050222" style={{ color: '#25D366', fontSize: '0.9rem' }}>Chat on WhatsApp</a>
                </li>
                <li style={{ fontSize: '0.8rem', opacity: 0.8, marginTop: '1rem' }}>
                  Registered Trust: IV-190300267/2017 (West Bengal)<br/>
                  PAN & Accreditation Verified
                </li>

                <li><Link href="/nirf" style={{ fontSize: '0.8rem' }}>NIRF Disclosure</Link></li>
                <li><Link href="/rti" style={{ fontSize: '0.8rem' }}>RTI Act</Link></li>
                <li><Link href="/grievance" style={{ fontSize: '0.8rem' }}>Grievance Redressal</Link></li>
              </ul>
            </div>
          </div>
        </footer>

        {/* Mobile Sticky CTA */}
        <div className="mobile-cta-bar">
          <a href="tel:+919831050222" className="mobile-cta-phone" aria-label="Call Us">
             <span>📞</span> Call Us
          </a>
          <Link href="/apply" className="mobile-cta-btn" aria-label="Apply Now">
            Apply Now
          </Link>
        </div>
      </body>
    </html>
  )
}
