"use client";

import React from 'react';
import styles from './about.module.css';
import mediaRegistry from '../../data/mediaRegistry.json';

export default function AboutPage() {
  return (
    <div className={styles.wrapper}>
      {/* 1. Cinematic Header */}
      <section className={styles.header}>
        <p className={styles.headerTagline}>This is not the story of a person.</p>
        <h1>This is the story of a system…<br/>that kept evolving to serve humanity better.</h1>
        <p className={styles.headerSub}>Nirmala Foundation was not created as an organisation… It was born as a response.</p>
      </section>

      {/* 2. The Calling — Emotional Opening */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.callingBlock}>
            <div className={styles.callingPoetry}>
              <p>In a world moving faster than ever…</p>
              <p>there are still millions… <strong>waiting.</strong></p>
              <p>Waiting… for care.</p>
              <p>Waiting… for opportunity.</p>
              <p>Waiting… for dignity.</p>
              <p className={styles.callingHighlight}>What if… one idea could change this?</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Story — Full Narrative */}
      <section className={`${styles.section} ${styles.bgAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.centerHeading}>Our Story</h2>
          <div className={styles.storyContent}>
            <p>Nirmala Foundation is a purpose-driven organization committed to creating meaningful change where it matters most. Rooted in compassion and guided by action, the foundation works to uplift underserved communities by focusing on education, healthcare, and sustainable development. Its mission is simple but powerful: to build a future where every individual has the opportunity to live with dignity, security, and hope.</p>

            <p>At the heart of Nirmala Foundation&apos;s work is a strong belief in grassroots impact. Rather than offering short-term solutions, the foundation invests in long-term change. It supports children through access to quality education, provides essential healthcare services in areas where resources are limited, and promotes livelihood programs that help families become self-reliant. Each initiative is designed to address real needs, with measurable and lasting results.</p>

            <div className={styles.pullQuote}>
              &ldquo;We did not want to build buildings… We wanted to build a system that serves humanity.&rdquo;
            </div>

            <p>What sets Nirmala Foundation apart is its people-first approach. The organization works closely with local communities, listening before acting. This ensures that every program is relevant, respectful, and effective. Volunteers, partners, and donors are not just supporters — they are part of a shared mission to create positive transformation.</p>

            <p>Transparency and accountability are central to its operations. Every effort is backed by careful planning, responsible use of resources, and a commitment to measurable impact. Whether it is funding a child&apos;s education, organizing medical camps, or supporting women-led initiatives, the foundation ensures that every contribution leads to real change on the ground.</p>

            <p>Nirmala Foundation is more than an organization. It is a growing movement of people who believe that even small actions can create a ripple effect of goodness. With every life it touches, it moves closer to a more inclusive and compassionate society.</p>

            <p className={styles.storyEmphasis}>If you are looking to be part of something meaningful, Nirmala Foundation offers that opportunity. Together, change is not just possible — it is already happening.</p>
          </div>
        </div>
      </section>

      {/* 4. Impact Numbers */}
      <section className={styles.impactSection}>
        <div className={styles.container}>
          <h2 className={styles.centerHeading} style={{ color: 'white' }}>Thousands educated. Thousands healed.<br/>Millions of possibilities created.</h2>
          <div className={styles.impactGrid}>
            <div className={styles.impactCard}>
              <span className={styles.impactNumber}>4,500+</span>
              <span className={styles.impactLabel}>Students Trained Annually</span>
            </div>
            <div className={styles.impactCard}>
              <span className={styles.impactNumber}>605</span>
              <span className={styles.impactLabel}>Bed Super Specialty Hospital</span>
            </div>
            <div className={styles.impactCard}>
              <span className={styles.impactNumber}>7</span>
              <span className={styles.impactLabel}>Premier Institutions</span>
            </div>
            <div className={styles.impactCard}>
              <span className={styles.impactNumber}>6</span>
              <span className={styles.impactLabel}>Campuses Across West Bengal</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Founder Spotlight */}
      <section className={styles.section} id="founder">
        <div className={styles.container}>
          <div className={styles.founderBlock}>
            <div className={styles.founderImageSlot}>
              {mediaRegistry.hubs?.about_founder ? (
                <img src={mediaRegistry.hubs.about_founder} alt="Founder, Nirmala Foundation" />
              ) : (
                <div className={styles.founderPlaceholder}>
                  <span>Founder Portrait</span>
                  <p>Image will appear here</p>
                </div>
              )}
            </div>
            <div className={styles.founderText}>
              <span className={styles.founderTag}>The Visionary</span>
              <h2>Hon&apos;ble Chairman &amp; Founder</h2>
              <blockquote className={styles.founderQuote}>
                &ldquo;I did not choose this mission… I discovered it. And through many trials, many roles… I was shaped to serve within it — among many outstanding individuals of Nirmala.&rdquo;
              </blockquote>
              <p>&ldquo;Great institutions are not created by individuals… They are discovered by those willing to serve them. I did not choose this mission — I was chosen to carry it.&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Leadership & Trustees */}
      <section className={`${styles.section} ${styles.bgAlt}`} id="leadership">
        <div className={styles.container}>
           <h2 className={styles.centerHeading}>Leadership &amp; Trustees</h2>
           <div className={styles.grid3Col}>
              {[
                {
                  initials: 'HC',
                  image: mediaRegistry.hubs?.about_founder,
                  name: "Hon'ble Chairman",
                  role: 'Founder & Chairman',
                  quote: '"I did not choose this mission… I discovered it. And through many trials, many roles… I was shaped to serve within it."'
                },
                {
                  initials: 'MT',
                  image: mediaRegistry.hubs?.about_trustee_1,
                  name: 'Managing Trustee',
                  role: 'Director of Operations',
                  quote: '"Leadership at Nirmala is not assumed. It is shaped through responsibility, tested through service, and earned among a community of excellence."'
                },
                {
                  initials: 'AD',
                  image: mediaRegistry.hubs?.about_trustee_2,
                  name: 'Academic Director',
                  role: 'Academic & Research Head',
                  quote: '"Among many exceptional individuals at Nirmala, I was given the opportunity — not to lead above them, but to fit into a role where I could serve the mission best."'
                },
              ].map((leader, i) => (
                <div key={i} className={styles.card}>
                  {leader.image ? (
                    <img src={leader.image} alt={leader.name} className={styles.leaderPhoto} />
                  ) : (
                    <div className={styles.avatarPlaceholder}><span>{leader.initials}</span></div>
                  )}
                  <h3>{leader.name}</h3>
                  <p className={styles.role}>{leader.role}</p>
                  <p className={styles.bio}>{leader.quote}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 6. Philosophy Quotes Strip */}
      <section className={styles.philosophyStrip}>
        <div className={styles.container}>
          <div className={styles.quoteGrid}>
            <div className={styles.quoteCard}>
              <p>&ldquo;Great institutions are not created by individuals… They are discovered by those willing to serve them.&rdquo;</p>
            </div>
            <div className={styles.quoteCard}>
              <p>&ldquo;The mission existed before us. We are here because it allowed us to serve.&rdquo;</p>
            </div>
            <div className={styles.quoteCard}>
              <p>&ldquo;Nirmala Foundation is not my creation. It is a mission I discovered — and a responsibility I was allowed to carry.&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Legal & Governance */}
      <section className={styles.section} id="legal">
        <div className={styles.container}>
           <h2>Legal &amp; Governance</h2>
           <div className={styles.legalBox}>
              <ul>
                 <li><strong>Entity Type:</strong> Registered Charitable Trust, West Bengal</li>
                 <li><strong>Registered Address:</strong> Kalyani Industrial Estate, Nadia, West Bengal</li>
                 <li><strong>Governing Body:</strong> Board of Trustees, Nirmala Foundation</li>
                 <li><strong>Regulatory Oversight:</strong> NMC, INC, PCI, WBUHS, Govt. of West Bengal</li>
              </ul>
              <div className={styles.legalDocsGrid}>
                {[
                  { key: 'about_trust_deed', label: 'Trust Registration' },
                  { key: 'about_pan_card', label: 'PAN Card' },
                  { key: 'about_registration', label: 'Official Registration' }
                ].map((doc, idx) => {
                  /* @ts-expect-error - Expected dynamic access */
                  const imgUrl = mediaRegistry.hubs?.[doc.key];
                  return imgUrl ? (
                    <div key={idx} className={styles.docImageSlot}>
                      <img src={imgUrl} alt={doc.label} />
                      <span>{doc.label}</span>
                    </div>
                  ) : (
                    <div key={idx} className={styles.docWrapper}>
                      <p className={styles.docNote}>{doc.label} Pending</p>
                    </div>
                  );
                })}
              </div>
           </div>
        </div>
      </section>

      {/* 8. Milestones */}
      <section className={`${styles.section} ${styles.bgAlt}`}>
        <div className={styles.container}>
           <h2 className={styles.centerHeading}>Our Journey</h2>
           <p className={styles.journeySubtitle}>The system continues to evolve… because the need never stops.</p>
           <div className={styles.timeline}>
             <div className={styles.timelineBlock}>
                <span className={styles.year}>2016</span>
                <h4>IINR Established</h4>
                <p>International Institute of Nursing &amp; Research (IINR) established as the first institution in Kalyani.</p>
             </div>
             <div className={styles.timelineBlock}>
                <span className={styles.year}>2017</span>
                <h4>Foundation Registered</h4>
                <p>Nirmala Foundation officially registered as a charitable trust. The mission was not created — it was discovered.</p>
             </div>
             <div className={styles.timelineBlock}>
                <span className={styles.year}>2018</span>
                <h4>IIPSR &amp; CCNI Launched</h4>
                <p>International Institute of Pharmaceutical Science &amp; Research (Kalyani) and Care &amp; Cure Nursing Institute (Barasat) established.</p>
             </div>
             <div className={styles.timelineBlock}>
                <span className={styles.year}>2020</span>
                <h4>JMN Medical College</h4>
                <p>Launched the 150-seat flagship medical college in Chakdaha. True transformation does not follow tradition… it redefines it.</p>
             </div>
             <div className={styles.timelineBlock}>
                <span className={styles.year}>2023</span>
                <h4>Hospital Commissioned</h4>
                <p>Kalyani General Hospital (605-bed) inaugurated to serve the region and provide clinical training.</p>
             </div>
             <div className={styles.timelineBlock}>
                <span className={styles.year}>2024</span>
                <h4>Indo-German MoU</h4>
                <p>From local roots… to global reach. Partnership signed with Future Nurses, Germany.</p>
             </div>
           </div>
        </div>
      </section>

      {/* 9. Indo-German Collaboration */}
      <section className={styles.section} id="global">
        <div className={styles.container}>
           <div className={styles.mouBox}>
              <div className={styles.mouContent}>
                 <span className={styles.tag}>International Collaboration</span>
                 <h2>Future Nurses, Germany</h2>
                 <p className={styles.mouPoetry}>&ldquo;From India to Germany, this gesture carries not just a tradition — but a vision. A vision where education meets opportunity, where healthcare meets humanity, and where institutions build pathways for the future.&rdquo;</p>
                 <p>In a historic move for global mobility in healthcare, Nirmala Foundation has signed an official Memorandum of Understanding (MoU) with Future Nurses, Germany. The agreement was finalized in collaboration with Prof. Dirk U. Naumann.</p>
                 <p>This partnership opens direct pathways for our nursing graduates to undergo clinical residencies in Munich and Berlin, standardizing their training to European healthcare protocols.</p>
                 <p className={styles.mouClosing}>We look forward to a meaningful and lasting collaboration.</p>
              </div>
              <div className={styles.mouVisual}>
                {mediaRegistry.hubs?.about_german_visit ? (
                  <img src={mediaRegistry.hubs.about_german_visit} alt="MoU Signed Collaboration" className={styles.mouImage} />
                ) : (
                  <div className={styles.docWrapper}>
                    <p className={styles.docNote}>MoU Signed Collaboration</p>
                  </div>
                )}
              </div>
           </div>
        </div>
      </section>

      {/* 10. Closing Statement */}
      <section className={styles.closingSection}>
        <div className={styles.container}>
          <div className={styles.closingContent}>
            <h2>Nirmala Foundation</h2>
            <p className={styles.closingPoetry}>
              &ldquo;For those who were…<br/>
              For those who are…<br/>
              And for those yet to come.&rdquo;
            </p>
            <p className={styles.closingVision}>It is building a legacy of learning…</p>
            <p className={styles.closingFinal}>&ldquo;The future is not something we wait for… It is something we build.&rdquo;</p>
          </div>
        </div>
      </section>

    </div>
  );
}
