"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./institute.module.css";
import { institutesData } from "@/data/institutesData";
import { notFound } from "next/navigation";
import Link from "next/link";
import React, { useRef } from "react";

// For Next.js 15 dynamic routing with unwrapped params if needed
export default function InstitutePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params);
  const institute = institutesData.find(i => i.slug === resolvedParams.slug);

  if (!institute) {
    notFound();
  }

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Construct structured data based on institute type
  const isHospital = institute.slug === 'kgh';
  const schema = isHospital ? {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "name": institute.name,
    "description": institute.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": institute.contactDetails.address,
      "addressLocality": institute.location,
      "addressRegion": "West Bengal",
      "addressCountry": "IN"
    },
    "telephone": institute.contactDetails.phone
  } : {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": institute.programs[0] || "Healthcare Course",
    "description": institute.description,
    "provider": {
      "@type": "EducationalOrganization",
      "name": institute.name,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": institute.location,
        "addressRegion": "West Bengal",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      {/* 1. Immersive Media Hero */}
      <section ref={heroRef} className={styles.hero}>
        <motion.img 
          src={institute.images[0]} 
          alt={institute.name}
          className={styles.heroBg}
          style={{ y, opacity }}
        />
        <div className={styles.heroGradient} />
        
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className={styles.establishedTag}>ESTD. {institute.established}</span>
          <h1 className={styles.heroTitle}>{institute.name}</h1>
          <p className={styles.heroLocation}>{institute.location}</p>
        </motion.div>
      </section>

      {/* 2. Main Content Grid */}
      <section className={styles.contentGrid}>
        <div className={styles.mainColumn}>
          {/* Intro description */}
          <motion.h2 
            className={styles.introText}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {institute.description}
          </motion.h2>

          {/* NAAC Achievement Highlight */}
          {(institute as any).isNaac && (
            <motion.div 
              className={styles.naacHighlight}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className={styles.naacBadgeInner}>NAAC ACCREDITED</div>
              <h4>A Legacy of Quality</h4>
              <p>IINR holds the distinction of being the <strong>1st Nursing College in West Bengal</strong> to achieve NAAC Accreditation, setting a benchmark for excellence in the region.</p>
            </motion.div>
          )}

          {/* Deep Story Block */}
          <motion.div 
            className={styles.storyBlock}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.categoryTag}>Institutional History & Philosophy</span>
              <h3>The Full Story</h3>
            </div>
            {institute.fullStory.split('\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </motion.div>

          {/* Infrastructure Section */}
          <div className={styles.featuresSection}>
             <div className={styles.sectionHeader}>
                <span className={styles.categoryTag}>Infrastructure & Impact</span>
                <h3>Campus Excellence</h3>
              </div>
            <div className={styles.featuresGrid}>
              {institute.features.map((feat, i) => (
                <motion.div 
                  key={i} 
                  className={styles.featureCard}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={styles.featureIcon} />
                  <p>{feat}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* New Admissions section */}
          <motion.div 
            className={styles.admissionsBlock}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
             <div className={styles.sectionHeader}>
                <span className={styles.categoryTag}>Enrolment</span>
                <h3>Admissions & Eligibility</h3>
              </div>
            <div className={styles.admissionsContent}>
               <div className={styles.admissionsRow}>
                  <strong>Process:</strong> <span>{institute.admissionsProcess}</span>
               </div>
               <div className={styles.admissionsRow}>
                  <strong>Criteria:</strong> <span>{institute.eligibilityCriteria}</span>
               </div>
            </div>
          </motion.div>

           {/* New Contact section */}
           <motion.div 
            className={styles.contactBlock}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
             <div className={styles.sectionHeader}>
                <span className={styles.categoryTag}>Reach Out</span>
                <h3>Campus Contacts</h3>
              </div>
            <div className={styles.contactCards}>
               <div className={styles.contactCard}>
                  <strong>Main Office:</strong>
                  <p>{institute.contactDetails.address}</p>
               </div>
               <div className={styles.contactCard}>
                  <strong>Direct Lines:</strong>
                  <p>
                    Phone: <a href={`tel:${institute.contactDetails.phone.replace(/\s/g, '')}`}>{institute.contactDetails.phone}</a>
                  </p>
                  <p>Email: <a href={`mailto:${institute.contactDetails.email}`}>{institute.contactDetails.email}</a></p>
               </div>
            </div>
          </motion.div>
        </div>


        {/* 3. Sticky Sidebar Data */}
        <div className={styles.sidebar}>
          <motion.div 
            className={styles.sideBox}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Academic Programs</h3>
            <div className={styles.tagList}>
              {institute.programs.map((prog, i) => <span key={i}>{prog}</span>)}
            </div>
          </motion.div>

          <motion.div 
            className={styles.sideBox}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3>Accreditations & Affiliations</h3>
            <div className={styles.tagList}>
              {institute.affiliations.map((aff, i) => <span key={i}>{aff}</span>)}
            </div>
            <div className={styles.accredDetail}>
               <p>Regulatory Body: <strong>{institute.affiliations[0]}</strong></p>
               <p>Status: <span className={styles.statusGreen}>Approved</span></p>
            </div>
          </motion.div>

          {/* New Image Gallery */}
          <motion.div 
            className={styles.sideBox}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>Campus Gallery</h3>
            <div className={styles.miniGallery}>
               {institute.images.map((img, i) => (
                  <div key={i} className={styles.galleryImage} style={{ background: `url(${img}) center/cover` }} />
               ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
             <Link href="/" className={styles.homeButton}>
              ← Back to Foundation Hub
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
