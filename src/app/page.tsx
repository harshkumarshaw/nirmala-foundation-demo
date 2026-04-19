"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./page.module.css";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { institutesData, strategicRoadmap } from "@/data/institutesData";
import mediaRegistry from "@/data/mediaRegistry.json";

const credentialsData = [
  { icon: "🛡️", label: "NMC Approved" },
  { icon: "🏥", label: "605-Bed Hospital" },
  { icon: "🌍", label: "Germany MoU" },
  { icon: "📜", label: "NAAC Accredited" }
];

const statsData = [
  { end: 4500, suffix: "+", label: "Students Enrolled" },
  { end: 605, suffix: "", label: "Bed Super Specialty Hospital" },
  { end: 7, suffix: "", label: "Institutions" },
  { end: 2017, suffix: "", label: "Established" }
];

const testimonialsData = [
  {
    quote: "The clinical exposure at KGH has been phenomenal. I feel completely ready for my future medical practice.",
    author: "Riya Sen",
    program: "MBBS, JMN Medical College",
    batch: "2021",
    image: "https://images.unsplash.com/photo-1594824432258-29ff844ea7ae?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "The infrastructure and labs here are world-class, making learning practical and enjoyable.",
    author: "Aakash Gupta",
    program: "B.Pharm, IIPSR",
    batch: "2020",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "Direct clinical postings at Institute of Child Health gave me invaluable hands-on pediatric care experience.",
    author: "Sneha Roy",
    program: "B.Sc Nursing, ICHFN",
    batch: "2022",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80"
  }
];

const divisionStruct = [
  {
    id: "medical",
    tag: "Medical Sciences",
    title: "Physicians \nof Tomorrow",
    colorClass: styles.panelMedical,
    image: mediaRegistry.home.panels.medical || "https://images.unsplash.com/photo-1576091160399-112ba9d15819?auto=format&fit=crop&w=1200&q=80",
    institutes: institutesData.filter(i => ["jmn", "kgh"].includes(i.slug))
  },
  {
    id: "nursing",
    tag: "Nursing Excellence",
    title: "Education \nThat Saves Lives",
    colorClass: styles.panelNursing,
    image: mediaRegistry.home.panels.nursing || "https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&w=1200&q=80",
    institutes: institutesData.filter(i => ["iinr", "ichfn", "ccnr"].includes(i.slug))
  },
  {
    id: "management",
    tag: "Healthcare Administration",
    title: "Leaders in \nGovernance",
    colorClass: styles.panelManagement,
    image: mediaRegistry.home.panels.management || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    institutes: institutesData.filter(i => ["iihmahs"].includes(i.slug))
  },
  {
    id: "pharmacy",
    tag: "Pharmaceutical Sciences",
    title: "Pioneering \nMedicines",
    colorClass: styles.panelPharmacy,
    image: mediaRegistry.home.panels.pharmacy || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    institutes: institutesData.filter(i => ["iipsr"].includes(i.slug))
  }
];

// Simple interactive counter component
function Counter({ end, suffix }: { end: number, suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2000;
    
    // Only animate when near view
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const step = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) {
             window.requestAnimationFrame(step);
          } else {
             setCount(end); // ensure it lands exactly
          }
        };
        window.requestAnimationFrame(step);
        observer.disconnect();
      }
    });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

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
      {/* 1. Hero Section */}
      <section ref={heroRef} className={styles.heroSection}>
        <motion.img 
          src={mediaRegistry.home.hero_video || "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=80"}
          alt="Nirmala Foundation campus aerial view, Kalyani, West Bengal"
          className={styles.bgImage}
          style={{ y: videoY, opacity }}
          loading="eager"
        />
        
        <div className={styles.maskOverlay}>
          <div className={styles.heroContent}>
            <motion.h1 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
              className={styles.heroTitle}
            >
              We did not want to build buildings…<br/>We wanted to build a system that serves humanity.
            </motion.h1>
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className={styles.heroActions}
            >
              <Link href="/institutes" className={styles.btnSecondaryHero}>Explore Institutes</Link>
              <Link href="/apply" className={styles.btnPrimaryHero}>Apply Now 2025-26</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Static Credentials Strip */}
      <div className={styles.credentialsStrip}>
        <div className={styles.credentialsContainer}>
          {credentialsData.map((cred, idx) => (
             <React.Fragment key={idx}>
               <div className={styles.credentialItem}>
                 <span className={styles.credentialIcon} aria-hidden="true">{cred.icon}</span>
                 <span className={styles.credentialLabel}>{cred.label}</span>
               </div>
               {idx < credentialsData.length - 1 && <div className={styles.credentialDivider} />}
             </React.Fragment>
          ))}
        </div>
      </div>

      {/* 3. Hero Stats Strip */}
      <section className={styles.statsSection}>
        <div className={styles.statsContainer}>
          {statsData.map((stat, i) => (
            <motion.div 
              key={i} 
              className={styles.statBlock}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={styles.statNumber}>
                <Counter end={stat.end} suffix={stat.suffix} />
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. About Us & Global Collab */}
      <section className={styles.aboutSection}>
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
              Nirmala Foundation is a purpose-driven organization committed to creating meaningful change where it matters most. Rooted in compassion and guided by action, the foundation works to uplift underserved communities through education, healthcare, and sustainable development.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <Link href="/about" className={styles.textLink}>Read Our Full Story →</Link>
            </motion.div>
          </div>
          
          <motion.div 
            className={styles.collabBox}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring" }}
          >
            <div className={styles.collabIcon}>🌍</div>
            <h3>Global Academic Collaboration</h3>
            <p>We possess strong connections with global institutions, including a strategic MoU with <strong>Future Nurses, Germany</strong> signed by Prof. Dirk U. Naumann. This Indo-German academic partnership facilitates robust training, exchange programs, and ensures our students access world-class healthcare resources.</p>
            <Link href="/about#global" className={styles.collabBtn}>View Partnership Details</Link>
          </motion.div>
        </div>
      </section>

      {/* 5. Sticky Overlapping Parallax Divisions */}
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
                <img src={div.image} alt={`${div.tag} — Nirmala Foundation`} loading="lazy" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Accreditations Trust Bar */}
      <section className={styles.accreditationsSection}>
        <div className={styles.accredContainer}>
          <div className={styles.accredHeader}>
            <span className={styles.metaTag}>Excellence</span>
            <h2>Recognized & Accredited</h2>
          </div>
          <div className={styles.accredGrid}>
             <div className={styles.accredBadge}>
               <div className={styles.badgePlaceholder}>NMC</div>
               <p>National Medical Commission</p>
             </div>
             <div className={styles.accredBadge}>
               <div className={styles.badgePlaceholder}>INC</div>
               <p>Indian Nursing Council</p>
             </div>
             <div className={styles.accredBadge}>
               <div className={styles.badgePlaceholder}>PCI</div>
               <p>Pharmacy Council of India</p>
             </div>
             <div className={styles.accredBadge}>
               <div className={styles.badgePlaceholder}>WBUHS</div>
               <p>West Bengal University of Health Sciences</p>
             </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className={styles.testimonialsSection}>
         <div className={styles.testimoContainer}>
           <div className={styles.testimoHeader}>
              <h2>Student Voices</h2>
              <p>Hear from the next generation of healthcare leaders.</p>
           </div>
           <div className={styles.testimoGrid}>
              {testimonialsData.map((test, i) => (
                 <div key={i} className={styles.testimoCard}>
                   <div className={styles.testimoQuote}>"{test.quote}"</div>
                   <div className={styles.testimoAuthorBox}>
                     <img src={test.image} alt={test.author} className={styles.authorImg} />
                     <div>
                       <div className={styles.authorName}>{test.author}</div>
                       <div className={styles.authorMeta}>{test.program} • Class of {test.batch}</div>
                     </div>
                   </div>
                 </div>
              ))}
           </div>
         </div>
      </section>

      {/* 8. Strategic Roadmap */}
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

      {/* 9. Bottom CTA */}
      <section className={styles.bottomCtaSection}>
        <div className={styles.bottomCtaContent}>
           <h2>The future is not something we wait for…<br/>It is something we build.</h2>
           <p>Applications are now open for the 2025–26 academic session across all our premier institutes.</p>
           <Link href="/apply" className={styles.ctaBannerBtn}>Apply Now</Link>
        </div>
      </section>

    </motion.div>
  );
}
