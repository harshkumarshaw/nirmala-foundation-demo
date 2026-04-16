import { institutesData } from '@/data/institutesData';
import styles from './programs.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Academic Programs | Nirmala Foundation',
  description: 'Explore the diverse medical, nursing, paramedical, and pharmacy programs offered at Nirmala Foundation.',
};

export default function ProgramsPage() {
  // Flatten all programs across all institutes
  const allPrograms = institutesData.flatMap((inst) => 
    inst.programs.map((prog) => ({
      ...prog,
      instituteName: inst.name,
      instituteId: inst.id
    }))
  );

  return (
    <div className="container">
      <div className={styles.pageContainer}>
        <div className={`animate-fade-in ${styles.pageHeader}`}>
          <h1>Academic Programs</h1>
          <p>Discover our meticulously crafted courses spanning from basic nursing care to paramount medical and pharmaceutical sciences. Enrol today to accelerate your healthcare career.</p>
        </div>

        <div className={styles.programsGrid}>
          {allPrograms.map((prog, idx) => (
            <div 
              key={idx} 
              className={styles.programCard}
              style={{ animationDelay: `${(idx % 5) * 0.1}s` }}
            >
              <span className={styles.instituteTag}>{prog.instituteName}</span>
              <h3>{prog.name}</h3>
              <div className={styles.metaInfo}>
                <span><strong>Duration:</strong> {prog.duration}</span>
                <span><strong>Seats:</strong> {prog.seats}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
