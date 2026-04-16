'use client'

import { institutesData } from '@/data/institutesData'
import mediaRegistry from '@/data/mediaRegistry.json'
import styles from './admissions.module.css'
import { CheckCircle2, CreditCard, GraduationCap, Info } from 'lucide-react'

export default function AdmissionsPage() {
  return (
    <main className={styles.admissionsWrapper}>
      <section className={styles.hero}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className={styles.heroVideo}
        >
          <source src={mediaRegistry.hubs.admissions_hero} type="video/mp4" />
        </video>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>Admissions 2026</h1>
          <p>Your journey towards a premium healthcare career starts here. Join nearly a thousand students across our 7 premier institutions.</p>
        </div>
      </section>

      <section id="process" className={styles.section}>
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

      <section id="eligibility" className={styles.sectionLight}>
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
