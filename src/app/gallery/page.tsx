"use client";

import React from 'react';
import styles from './gallery.module.css';
import { institutesData } from '@/data/institutesData';

export default function GalleryPage() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.header}>
        <h1>Campus Gallery</h1>
        <p>A glimpse into the vibrant life across Nirmala Foundation's institutions.</p>
      </section>

      <div className={styles.galleryContainer}>
        {institutesData.map(inst => (
          <div key={inst.slug} className={styles.campusSection}>
            <h2>{inst.name}</h2>
            <div className={styles.grid}>
              {inst.images.map((img, idx) => (
                <div key={idx} className={styles.imageCard}>
                  <img src={img} alt={`${inst.name} Campus View ${idx + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
