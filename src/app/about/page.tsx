"use client";

import React from 'react';
import styles from './about.module.css';
import mediaRegistry from '@/data/mediaRegistry.json';

export default function AboutPage() {
  return (
    <div className={styles.wrapper}>
      {/* 1. Header */}
      <section className={styles.header}>
        <h1>About Nirmala Foundation</h1>
        <p>A legacy of healthcare excellence, driven by a vision to uplift society.</p>
      </section>

      {/* 2. Our Story */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid2Col}>
            <div>
              <h2>Our Story</h2>
              <p>Founded in 2017, Nirmala Foundation was established with a singular mission: to democratize access to world-class healthcare education in Eastern India. Recognizing the acute shortage of trained medical professionals, our Trust set out to build institutions that merge academic rigor with compassionate community service.</p>
              <p>Today, the foundation operates a sprawling ecosystem across 6 campuses, encompassing 7 premier institutes and the 605-bed super specialty Kalyani General Hospital, training over 4,500 students annually.</p>
            </div>
            <div className={styles.imagePlaceholder}>
               <div className={styles.placeholderOverlay}>Campus Vision</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Leadership & Trustees */}
      <section className={`${styles.section} ${styles.bgAlt}`}>
        <div className={styles.container}>
           <h2 className={styles.centerHeading}>Leadership & Trustees</h2>
           <div className={styles.grid3Col}>
              <div className={styles.card}>
                 <div className={styles.avatarPlaceholder}><span>HC</span></div>
                 <h3>Hon'ble Chairman</h3>
                 <p className={styles.role}>Founder & Chairman</p>
                 <p className={styles.bio}>Leading the vision of Nirmala Foundation to create a world-class healthcare ecosystem in West Bengal.</p>
              </div>
              <div className={styles.card}>
                 <div className={styles.avatarPlaceholder}><span>MT</span></div>
                 <h3>Managing Trustee</h3>
                 <p className={styles.role}>Director of Operations</p>
                 <p className={styles.bio}>Ensuring academic excellence and state-of-the-art infrastructure across all constituent institutes.</p>
              </div>
              <div className={styles.card}>
                 <div className={styles.avatarPlaceholder}><span>AD</span></div>
                 <h3>Academic Director</h3>
                 <p className={styles.role}>Academic & Research Head</p>
                 <p className={styles.bio}>Driving innovation, international collaborations, and NEP 2020 alignment in healthcare education.</p>
              </div>
           </div>
        </div>
      </section>

      {/* 4. Legal & Governance */}
      <section className={styles.section}>
        <div className={styles.container}>
           <h2>Legal & Governance</h2>
           <div className={styles.legalBox}>
              <ul>
                 <li><strong>Entity Type:</strong> Registered Charitable Trust, West Bengal</li>
                 <li><strong>Registered Address:</strong> Kalyani Industrial Estate, Nadia, West Bengal</li>
                 <li><strong>Governing Body:</strong> Board of Trustees, Nirmala Foundation</li>
                 <li><strong>Regulatory Oversight:</strong> NMC, INC, PCI, WBUHS, Govt. of West Bengal</li>
              </ul>
              <div className={styles.docWrapper}>
                 <p className={styles.docNote}>Official Trust Registration, PAN, and Accreditation documents are verified and available for inspection at the Trust Office.</p>
              </div>
           </div>
        </div>
      </section>

      {/* 5. Milestones */}
      <section className={`${styles.section} ${styles.bgAlt}`}>
        <div className={styles.container}>
           <h2 className={styles.centerHeading}>Our Journey</h2>
           <div className={styles.timeline}>
             <div className={styles.timelineBlock}>
                <span className={styles.year}>2016</span>
                <h4>IINR Established</h4>
                <p>International Institute of Nursing & Research (IINR) established as the first institution in Kalyani.</p>
             </div>
             <div className={styles.timelineBlock}>
                <span className={styles.year}>2017</span>
                <h4>Foundation Registered</h4>
                <p>Nirmala Foundation officially registered as a charitable trust.</p>
             </div>
             <div className={styles.timelineBlock}>
                <span className={styles.year}>2018</span>
                <h4>IIPSR & CCNI Launched</h4>
                <p>International Institute of Pharmaceutical Science & Research (Kalyani) and Care & Cure Nursing Institute (Barasat) established.</p>
             </div>
             <div className={styles.timelineBlock}>
                <span className={styles.year}>2020</span>
                <h4>JMN Medical College</h4>
                <p>Launched the 150-seat flagship medical college in Chakdaha.</p>
             </div>
             <div className={styles.timelineBlock}>
                <span className={styles.year}>2023</span>
                <h4>Hospital Commissioned</h4>
                <p>Kalyani General Hospital (605-bed) inaugurated to serve the region and provide clinical training.</p>
             </div>
           </div>
        </div>
      </section>

      {/* 6. Indo-German Collaboration */}
      <section className={styles.section} id="global">
        <div className={styles.container}>
           <div className={styles.mouBox}>
              <div className={styles.mouContent}>
                 <span className={styles.tag}>International Collaboration</span>
                 <h2>Future Nurses, Germany</h2>
                 <p>In a historic move for global mobility in healthcare, Nirmala Foundation has signed an official Memorandum of Understanding (MoU) with Future Nurses, Germany. The agreement was finalized in collaboration with Prof. Dirk U. Naumann.</p>
                 <p>This partnership opens direct pathways for our nursing graduates to undergo clinical residencies in Munich and Berlin, standardizing their training to European healthcare protocols.</p>
              </div>
              <div className={styles.mouVisual}>
                 <div className={styles.docWrapper}>
                   <p className={styles.docNote}>MoU Signed Collaboration</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
}
