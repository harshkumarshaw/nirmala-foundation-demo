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
  return (
    <html lang="en">
      <body>
        <nav className="navContainer">
          <Link href="/" className="navLogo">
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

            <button className="btnPrimary">Apply Now</button>
          </div>
        </nav>

        {children}

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
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Admissions</Link></li>
              </ul>
            </div>
            <div className="footerCol">
              <h4>Institutions</h4>
              <ul>
                <li><Link href="/institutes/jmn">JMN Medical College</Link></li>
                <li><Link href="/institutes/iinr">IINR Nursing</Link></li>
                <li><Link href="/institutes/iipsr">IIPSR Pharmacy</Link></li>
              </ul>
            </div>
            <div className="footerCol">
              <h4>Contact</h4>
              <ul>
                <li>Kalyani, Nadia, West Bengal</li>
                <li>info@nirmalafoundation.co.in</li>
                <li>+91 90000 00000</li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
