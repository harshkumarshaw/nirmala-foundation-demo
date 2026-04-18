import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import { institutesData } from '@/data/institutesData'

export const metadata: Metadata = {
  title: 'Nirmala Foundation | Premium Healthcare Education',
  description: 'Nirmala Foundation operates 7 premier institutes shaping the future of healthcare professions aligned with NEP 2020.',
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
    "telephone": "+918000000000",
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
          <div className="navLinks">
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
                    <Link href="/institutes/iinr" className="dropdownLink">B.Sc. Nursing</Link>
                    <Link href="/institutes/iinr" className="dropdownLink">GNM Nursing</Link>
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
                </div>
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
        </nav>

        <main id="main-content">
          {children}
        </main>

        <footer className="footerMain">
          <div className="footerGrid">
            <div className="footerBrand">
              <h3>Nirmala Foundation</h3>
              <p>Registered charitable trust uplifting society through quality education across nursing, medicine, pharmacy, and management.</p>
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
                  <a href="tel:+918000000000">+91 80000 00000</a><br/>
                  <a href="https://wa.me/918000000000" style={{ color: '#25D366', fontSize: '0.9rem' }}>Chat on WhatsApp</a>
                </li>
                <li style={{ marginTop: '1rem' }}><span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Trust Reg: IV-190300XXX (Placeholder)</span></li>
                <li><Link href="/nirf" style={{ fontSize: '0.8rem' }}>NIRF Disclosure</Link></li>
                <li><Link href="/rti" style={{ fontSize: '0.8rem' }}>RTI Act</Link></li>
                <li><Link href="/grievance" style={{ fontSize: '0.8rem' }}>Grievance Redressal</Link></li>
              </ul>
            </div>
          </div>
        </footer>

        {/* Mobile Sticky CTA */}
        <div className="mobile-cta-bar">
          <a href="tel:+918000000000" className="mobile-cta-phone" aria-label="Call Us">
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
