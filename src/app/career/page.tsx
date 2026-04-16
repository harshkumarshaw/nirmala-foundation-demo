import styles from './career.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | Nirmala Foundation',
  description: 'Join our team. Nirmala Foundation is hiring for Manager IT, Manager HR, Manager Finance, and Manager Project roles.',
};

const jobs = [
  {
    title: 'Manager - IT',
    type: 'Full Time',
    essential: [
      'Minimum of 5 years of experience in IT management, preferably in healthcare.',
      'Strong knowledge of healthcare IT systems, EMR systems, and data security.',
      'Proficiency in project management methodologies.',
      'Excellent leadership and team management skills.'
    ],
    desirable: [
      'Certifications like HCISPP or ITIL Foundation.',
      'Experience in implementing healthcare software systems.'
    ]
  },
  {
    title: 'Manager - HR',
    type: 'Full Time',
    essential: [
      'Bachelor’s degree in Human Resources or related field.',
      'Minimum of 7 years of HR experience in healthcare or education.',
      'Strong understanding of labor laws and regulations.',
      'Excellent communication and interpersonal skills.'
    ],
    desirable: [
      'Master’s degree in HR or MBA.',
      'HRCI’s Healthcare HR Certification (HHR) or SHRM-CP.'
    ]
  },
  {
    title: 'Manager - Finance',
    type: 'Full Time',
    essential: [
      'Bachelor’s degree in Finance, Accounting, or related.',
      'Minimum of 6 years of finance experience in healthcare.',
      'Proficiency in financial analysis, budgeting, and forecasting.',
      'Strong knowledge of healthcare financial regulations.'
    ],
    desirable: [
      'MBA or Master’s degree in Finance.',
      'HFMA’s Certified Healthcare Financial Professional (CHFP) or CMA.'
    ]
  },
  {
    title: 'Manager - Project',
    type: 'Full Time',
    essential: [
      'Bachelor’s degree in Business, Healthcare Mgmt, or Engineering.',
      'Minimum of 4 years of project management experience.',
      'Proficiency in project management tools.',
      'Strong leadership and decision-making abilities.'
    ],
    desirable: [
      'PMP (Project Management Professional) certification.',
      'Experience with Agile methodologies.'
    ]
  }
];

export default function CareerPage() {
  return (
    <div className="container">
      <div className={styles.pageContainer}>
        <div className={`animate-fade-in ${styles.pageHeader}`}>
          <h1>Join Our Visionary Team</h1>
          <p>We are actively seeking top-tier talent to help govern and expand our healthcare education units across Kalyani, Chakdaha, and Kolkata.</p>
        </div>

        <div className={styles.jobsList}>
          {jobs.map((job, idx) => (
            <div key={idx} className={styles.jobCard}>
              <div className={styles.jobHeader}>
                <h2>{job.title}</h2>
                <span className={styles.jobTag}>{job.type}</span>
              </div>
              
              <div className={styles.reqList}>
                <h4>Essential Criteria:</h4>
                <ul>
                  {job.essential.map((req, rIdx) => (
                    <li key={rIdx}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.reqList}>
                <h4>Desirable Criteria:</h4>
                <ul>
                  {job.desirable.map((req, rIdx) => (
                    <li key={rIdx}>{req}</li>
                  ))}
                </ul>
              </div>

              <button className="btn-primary" style={{marginTop: '1rem'}}>Apply for Position</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
