import styles from './examples.module.css';
import Link from 'next/link';

export default function ExamplesPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Visual Prototyping Lab</h1>
        <p>Isolated examples of the proposed "Out of the Box" animations and aesthetics.</p>
        <Link href="/" className={styles.backBtn}>← Back to Home</Link>
      </div>

      {/* 1. Cinematic Video Background & Masking */}
      <section className={styles.section}>
        <div className={styles.sectionInfo}>
          <h2>1. Video Masking & Blend Modes</h2>
          <p>Text that intersects with massive cinematic video elements, allowing the video to act as the texture for the topography.</p>
        </div>
        <div className={styles.videoMaskContainer}>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className={styles.bgVideo}
          >
            <source src="https://cdn.pixabay.com/video/2021/08/11/84687-586791196_large.mp4" type="video/mp4" />
          </video>
          <div className={styles.maskOverlay}>
            <h1 className={styles.videoMaskText}>NIRMALA</h1>
          </div>
        </div>
      </section>

      {/* 2. Horizontal Marquee */}
      <section className={styles.section}>
        <div className={styles.sectionInfo}>
          <h2>2. Horizontal Kinetic Marquee</h2>
          <p>Infinite scrolling data points that add constant kinetic energy to the screen without requiring user scroll.</p>
        </div>
        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeTrack}>
            <span className={styles.marqueeItem}>• 7 PREMIER INSTITUTIONS</span>
            <span className={styles.marqueeItem}>• 900+ SCHOLARS </span>
            <span className={styles.marqueeItem}>• 100+ HOSPITAL BEDS</span>
            <span className={styles.marqueeItem}>• GLOBAL COLLABORATIONS</span>
            {/* Duplicate for infinite loop */}
            <span className={styles.marqueeItem}>• 7 PREMIER INSTITUTIONS</span>
            <span className={styles.marqueeItem}>• 900+ SCHOLARS </span>
            <span className={styles.marqueeItem}>• 100+ HOSPITAL BEDS</span>
            <span className={styles.marqueeItem}>• GLOBAL COLLABORATIONS</span>
          </div>
        </div>
      </section>

      {/* 3. Dynamic Moving Gradients */}
      <section className={styles.section}>
        <div className={styles.sectionInfo}>
          <h2>3. Dynamic Color Gradients</h2>
          <p>Utilizing the Royal Blue and Orange/Saffron foundation colors as an animated, breathing gradient rather than a flat, boring background.</p>
        </div>
        <div className={styles.gradientContainer}>
          <div className={styles.movingGradient}></div>
          <div className={styles.gradientContent}>
            <h3>Active Color Integration</h3>
            <p>The brand feels alive and energetic.</p>
          </div>
        </div>
      </section>

      {/* 4. Sticky Overlapping Panels */}
      <section className={styles.section} style={{ height: '300vh' }}>
        <div className={styles.sectionInfo}>
          <h2>4. Sticky Overlapping Panels (Scroll down)</h2>
          <p>Instead of normal scrolling, cards lock into place and stack on top of each other, creating a high-end presentation feel.</p>
        </div>
        <div className={styles.stickyContainer}>
          <div className={`${styles.stickyPanel} ${styles.panel1}`}>
            <h3>Panel 1: JMN Medical College</h3>
            <div className={styles.imgPlaceholder}>Medical Imagery</div>
          </div>
          <div className={`${styles.stickyPanel} ${styles.panel2}`}>
            <h3>Panel 2: IINR Nursing</h3>
            <div className={styles.imgPlaceholder}>Nursing Imagery</div>
          </div>
          <div className={`${styles.stickyPanel} ${styles.panel3}`}>
            <h3>Panel 3: Pharmacy</h3>
            <div className={styles.imgPlaceholder}>Laboratory Imagery</div>
          </div>
        </div>
      </section>

    </div>
  );
}
