"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./page.module.css";
import React, { useRef } from "react";
import Link from "next/link";
import { institutesData, strategicRoadmap } from "@/data/institutesData";
import mediaRegistry from "@/data/mediaRegistry.json";

// Organize data into the massive panels
const divisionStruct = [
  {
    id: "medical",
    tag: "Medical Sciences",
    title: "Physicians \nof Tomorrow",
    colorClass: styles.panelMedical,
    video: mediaRegistry.home.panels.medical,
    institutes: institutesData.filter(i => ["jmn", "kgh"].includes(i.slug))
  },
  {
    id: "nursing",
    tag: "Nursing Excellence",
    title: "Education \nThat Saves Lives",
    colorClass: styles.panelNursing,
    video: mediaRegistry.home.panels.nursing,
    institutes: institutesData.filter(i => ["iinr", "ichfn", "ccnr"].includes(i.slug))
  },
  {
    id: "management",
    tag: "Healthcare Administration",
    title: "Leaders in \nGovernance",
    colorClass: styles.panelManagement,
    video: mediaRegistry.home.panels.management,
    institutes: institutesData.filter(i => ["iihmahs"].includes(i.slug))
  },
  {
    id: "pharmacy",
    tag: "Pharmaceutical Sciences",
    title: "Pioneering \nMedicines",
    colorClass: styles.panelPharmacy,
    video: mediaRegistry.home.panels.pharmacy,
    institutes: institutesData.filter(i => ["iipsr"].includes(i.slug))
  }
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className={styles.mainWrapper}
    >
      {/* 1. Cinematic Video Mask Hero */}
      <section ref={heroRef} className={styles.heroSection}>
        {mediaRegistry.home.hero_video.includes("youtube.com") || mediaRegistry.home.hero_video.includes("youtu.be") ? (
          <motion.div 
            className={styles.bgVideo}
            style={{ y: videoY, opacity }}
          >
            <iframe 
              src={`https://www.youtube.com/embed/${mediaRegistry.home.hero_video.split('v=')[1]?.split('&')[0]}?autoplay=1&mute=1&controls=0&loop=1&playlist=${mediaRegistry.home.hero_video.split('v=')[1]?.split('&')[0]}&showinfo=0&rel=0&modestbranding=1`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none', transform: 'scale(1.5)' }} // Scale to hide borders
            />
          </motion.div>
        ) : (
          <motion.video 
            autoPlay 
            loop 
            muted 
            playsInline
            className={styles.bgVideo}
            style={{ y: videoY, opacity }}
          >
            <source src={mediaRegistry.home.hero_video} type="video/mp4" />
          </motion.video>
        )}
        
        <div className={styles.maskOverlay}>
          <div className={styles.heroContent}>
            <motion.h1 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
              className={styles.heroTitle}
            >
              NIRMALA
            </motion.h1>
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className={styles.heroSubtitle}
            >
              Transforming Healthcare Education
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Kinetic Marquee Tape */}
      <div className={styles.marqueeSection}>
        <div className={styles.marqueeTrack}>
          {Array(4).fill(0).map((_, i) => (
            <React.Fragment key={i}>
              <span className={styles.marqueeItem}><span>✦</span> 6 PREMIER INSTITUTIONS & 1 HOSPITAL</span>
              <span className={styles.marqueeItem}><span>✦</span> NMC & INC APPROVED</span>
              <span className={styles.marqueeItem}><span>✦</span> 605+ BEDDED HOSPITAL</span>
              <span className={styles.marqueeItem}><span>✦</span> GERMANY COLLABORATION</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 3. About Us & Global Collab (Animated Background) */}
      <section className={styles.aboutSection}>
        <div className={styles.movingGradientBg} />
        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >Visionary <br/>Commitment</motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Established in 2017, Nirmala Foundation is a registered charitable trust founded to uplift society through quality education. In just a few years, it has grown into a comprehensive healthcare education ecosystem comprising 6 institutes and a 605-bedded super specialty hospital, serving over 4,500+ students across 6 cities.
            </motion.p>
          </div>
          
          <motion.div 
            className={styles.collabBox}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring" }}
          >
            <h3>Global Academic Collaboration</h3>
            <p>We possess strong connections with global institutions, including a strategic MoU with <strong>Future Nurses, Germany</strong> signed by Prof. Dirk U. Naumann. This Indo-German academic partnership facilitates robust training, exchange programs, and ensures our students access world-class healthcare resources.</p>
          </motion.div>
        </div>
      </section>

      {/* 4. Sticky Overlapping Parallax Divisions with Real Data Routes */}
      <section className={styles.divisionsSection}>
        <div className={styles.stickyParent}>
          {divisionStruct.map((div, i) => (
            <motion.div 
              key={div.id} 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className={`${styles.stickyPanel} ${div.colorClass}`}
            >
              <div className={styles.panelContent}>
                <span className={styles.panelTag}>{div.tag}</span>
                <h2>{div.title.split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>{line}<br/></React.Fragment>
                ))}</h2>
                
                <div className={styles.institutesList}>
                  {div.institutes.map((inst, idx) => (
                    <div key={idx} className={styles.instituteRow}>
                      <div className={styles.rowHeader}>
                        <h4>{inst.name}</h4>
                        <Link href={`/institutes/${inst.slug}`} className={styles.navButton}>
                          Read Full Profile
                        </Link>
                      </div>
                      <div className={styles.programTags}>
                        <span className={styles.pTag}>{inst.location}</span>
                        {inst.programs.map((p, pidx) => (
                          <span key={pidx} className={styles.pTag}>{p}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.panelImage}>
                <div className={styles.panelImageOverlay} />
                <video autoPlay loop muted playsInline src={div.video} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Strategic Roadmap (NEP 2020 & University Transition) */}
      <section className={styles.roadmapSection}>
        <div className={styles.roadmapHeader}>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >Strategic Expansion</motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >Building A Health Sciences University</motion.h2>
        </div>
        
        <div className={styles.roadmapGrid}>
          {strategicRoadmap.map((item, idx) => (
            <motion.div 
              key={idx}
              className={styles.roadCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <span className={styles.roadPhase}>{item.phase}</span>
              <h3>{item.goal}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </motion.div>
  );
}
