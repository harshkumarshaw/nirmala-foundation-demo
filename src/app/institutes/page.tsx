"use client";

import { institutesData } from '@/data/institutesData';
import mediaRegistry from '@/data/mediaRegistry.json';
import styles from './institutes.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';

// Helper to determine category for the badges
const getCategory = (slug: string) => {
  if (slug === 'jmn' || slug === 'kgh') return 'Medical Sciences';
  if (slug === 'iinr' || slug === 'ichfn' || slug === 'ccnr') return 'Nursing Excellence';
  if (slug === 'iipsr') return 'Pharmacy';
  if (slug === 'iihmahs') return 'Hospital Administration';
  return 'Healthcare Education';
};

export default function InstitutesPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* 1. Immersive Hero Section */}
      <section className={styles.hero}>
        <img 
          src={mediaRegistry.hubs.about_campus_large || "/images/hero-default.jpg"} 
          alt="Nirmala Foundation Hub" 
          className={styles.heroBg} 
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Defining the Benchmarks of Healthcare Education
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nirmala Foundation operates as a purpose-driven ecosystem. Each institution is a pillar of our commitment 
            to creating a future where every individual has access to world-class medical expertise.
          </motion.p>
        </div>
      </section>

      {/* 2. Institutes Grid */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.institutesGrid}>
            {institutesData.map((inst, idx) => (
              <motion.div
                key={inst.slug}
                className={styles.instituteCard}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {/* Image Section */}
                <div className={styles.cardHeader}>
                  <img 
                    src={inst.images[0] || (mediaRegistry.institutes as any)[inst.slug]?.images[0]} 
                    alt={inst.name} 
                    className={styles.cardImage}
                  />
                  <div className={styles.categoryBadge}>
                    {getCategory(inst.slug)}
                  </div>
                  {(inst as any).isNaac && (
                    <div className={styles.naacBadge}>
                      NAAC ACCREDITED
                    </div>
                  )}
                  <div className={styles.estBadge}>
                    ESTD {inst.established}
                  </div>
                </div>

                {/* Content Section */}
                <div className={styles.cardBody}>
                  <h2>{inst.name}</h2>
                  <div className={styles.location}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {inst.location}
                  </div>
                  <p className={styles.description}>
                    {inst.description}
                  </p>

                  <div className={styles.programsList}>
                    {inst.programs.slice(0, 3).map((prog, pidx) => (
                      <span key={pidx} className={styles.programPill}>
                        {typeof prog === 'string' ? prog.split('(')[0] : (prog as any).name}
                      </span>
                    ))}
                    {inst.programs.length > 3 && (
                      <span className={styles.programPill}>+{inst.programs.length - 3} More</span>
                    )}
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <Link href={`/institutes/${inst.slug}`} className={styles.navLink}>
                    Examine Portfolio
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
