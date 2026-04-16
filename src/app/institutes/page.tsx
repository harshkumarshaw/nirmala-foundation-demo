import { institutesData } from '@/data/institutesData';
import styles from './institutes.module.css';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Institutes | Nirmala Foundation',
  description: 'Explore the 7 premier institutes under the Nirmala Foundation umbrella providing world-class healthcare and medical education.',
};

export default function InstitutesPage() {
  return (
    <div className="container">
      <div className={styles.pageContainer}>
        <div className={`animate-fade-in ${styles.pageHeader}`}>
          <h1>Our Core Institutions</h1>
          <p>The Nirmala Foundation comprises specialized institutions focused on delivering excellence across Medical, Nursing, Paramedical, Pharmacy, and Hospital Administration disciplines in West Bengal.</p>
        </div>

        <div className={styles.institutesGrid}>
          {institutesData.map((inst, idx) => (
            <div 
              key={inst.id} 
              className={styles.instituteRow}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={styles.contentArea}>
                <div className={styles.mainInfo}>
                  <h2>{inst.name}</h2>
                  <div className={styles.tagline}>{inst.tagline}</div>
                  <p className={styles.description}>{inst.description}</p>
                </div>
                <div>
                  <h4 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Key Programs:</h4>
                  <div className={styles.programsList}>
                    {inst.programs.map((prog, pIdx) => (
                      <span key={pIdx} className={styles.programPill}>
                        {prog.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className={styles.actionArea}>
                <div className={styles.location}>
                  <strong>Location:</strong><br/>
                  📍 {inst.location}
                </div>
                <Link href={`/institutes/${inst.id}`} className="btn-primary">
                  View Full Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
