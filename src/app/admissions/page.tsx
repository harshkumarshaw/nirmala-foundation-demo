'use client'

import { institutesData } from '@/data/institutesData'
import styles from './admissions.module.css'
import { CheckCircle2, CreditCard, GraduationCap, Info, CalendarDays } from 'lucide-react'
import Link from 'next/link'

export default function AdmissionsPage() {
  return (
    <main className={styles.admissionsWrapper}>
      {/* Static Hero — no video */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>Admissions 2026</h1>
          <p>Your journey towards a premium healthcare career starts here. Join nearly a thousand students across our 7 premier institutions.</p>
          <Link href="/apply" className="btnPrimary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>Apply Now →</Link>
        </div>
      </section>

      {/* Admission Calendar */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}><CalendarDays size={14} style={{ verticalAlign: 'middle', marginRight: 6 }} />Key Dates</span>
            <h2>Admission Calendar 2025-26</h2>
          </div>
          <div className={styles.calendarGrid}>
            {[
              { event: "NEET-UG Examination", date: "May 2025", programs: "MBBS" },
              { event: "JENPAS UG Counseling", date: "June–July 2025", programs: "B.Sc. Nursing" },
              { event: "Application Window Opens", date: "June 2025", programs: "All Programs" },
              { event: "Merit List / Counseling", date: "July–August 2025", programs: "B.Pharm, D.Pharm, BHA, GNM" },
              { event: "Document Verification", date: "August 2025", programs: "All Programs" },
              { event: "Academic Session Begins", date: "September 2025", programs: "All Programs" },
            ].map((item, i) => (
              <div key={i} className={styles.calendarCard}>
                <span className={styles.calendarDate}>{item.date}</span>
                <h4>{item.event}</h4>
                <span className={styles.calendarPrograms}>{item.programs}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section id="process" className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}>How to Join</span>
            <h2>Our Selection Process</h2>
          </div>

          <div className={styles.processGrid}>
            {[
              { step: "01", title: "Inquiry & Counseling", desc: "Visit our campus or connect with our academic counselors to understand the best career path for you." },
              { step: "02", title: "Eligibility Check", desc: "Ensure you meet the academic and entrance criteria (JENPAS, NEET, or Merit-based)." },
              { step: "03", title: "Application Submission", desc: "Fill out the centralized application form for your chosen institute." },
              { step: "04", title: "Verification & Fee", desc: "Document verification followed by seat allotment and enrollment." }
            ].map((item, i) => (
              <div key={i} className={styles.processCard}>
                <span className={styles.stepNum}>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Matrix */}
      <section id="eligibility" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}>Requirements</span>
            <h2>Eligibility Matrix</h2>
          </div>

          <div className={styles.eligibilityGrid}>
            {institutesData.map((inst) => (
              <div key={inst.slug} className={styles.eligibilityCard}>
                <div className={styles.instHeader}>
                  <h3>{inst.shortName}</h3>
                  <span>{inst.location}</span>
                </div>
                <div className={styles.criteria}>
                  <p><strong>Programs:</strong> {inst.programs.join(', ')}</p>
                  <p className={styles.eligibilityText}>
                    <Info size={16} /> {inst.eligibilityCriteria}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure — approximate */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}>Transparency</span>
            <h2>Indicative Fee Structure</h2>
          </div>
          <p className={styles.feeDisclaimer}>Fees shown are approximate annual figures and subject to revision by WBUHS / NMC each academic year. Contact the admissions office for exact fee schedules.</p>
          <div className={styles.feeTableWrapper}>
            <table className={styles.feeTable}>
              <thead>
                <tr>
                  <th>Program</th>
                  <th>Duration</th>
                  <th>Annual Tuition (Approx.)</th>
                  <th>Hostel (Optional)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>MBBS</td><td>5.5 years</td><td>As per NMC / State Govt. norms</td><td>₹60,000 – ₹80,000</td></tr>
                <tr><td>B.Sc. Nursing</td><td>4 years</td><td>₹80,000 – ₹1,20,000</td><td>₹50,000 – ₹70,000</td></tr>
                <tr><td>GNM Nursing</td><td>3.5 years</td><td>₹60,000 – ₹90,000</td><td>₹45,000 – ₹60,000</td></tr>
                <tr><td>B.Pharm</td><td>4 years</td><td>₹80,000 – ₹1,10,000</td><td>₹50,000 – ₹70,000</td></tr>
                <tr><td>D.Pharm</td><td>2 years</td><td>₹60,000 – ₹80,000</td><td>₹45,000 – ₹60,000</td></tr>
                <tr><td>BHA</td><td>3 years</td><td>₹70,000 – ₹1,00,000</td><td>₹50,000 – ₹65,000</td></tr>
                <tr><td>MHA</td><td>2 years</td><td>₹1,00,000 – ₹1,50,000</td><td>₹55,000 – ₹75,000</td></tr>
                <tr><td>M.Sc. Nursing</td><td>2 years</td><td>₹90,000 – ₹1,30,000</td><td>₹50,000 – ₹70,000</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Financial Support */}
      <section id="credit-card" className={styles.scholarshipSection}>
        <div className={styles.container}>
          <div className={styles.scholarshipBox}>
            <div className={styles.scholarshipText}>
              <h2>Financial Support & Scholarships</h2>
              <p>Nirmala Foundation is committed to making healthcare education accessible. We actively participate in government welfare schemes and offer merit-based aid.</p>

              <ul className={styles.benefitsList}>
                <li><CheckCircle2 size={20} color="var(--accent)" /> West Bengal Student Credit Card Scheme support</li>
                <li><CheckCircle2 size={20} color="var(--accent)" /> SC/ST/OBC Scholarship Assistive Program</li>
                <li><CheckCircle2 size={20} color="var(--accent)" /> Merit-based tuition fee waivers for toppers</li>
                <li><CheckCircle2 size={20} color="var(--accent)" /> Flexible installment options for institutional fees</li>
              </ul>

              <div className={styles.aidIcons}>
                <div className={styles.aidItem}>
                  <CreditCard size={32} />
                  <span>Low-Interest Loans</span>
                </div>
                <div className={styles.aidItem}>
                  <GraduationCap size={32} />
                  <span>Merit Aid</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
