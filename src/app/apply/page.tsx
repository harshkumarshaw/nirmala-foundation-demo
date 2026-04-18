"use client";

import React, { useState } from 'react';
import styles from './apply.module.css';

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Integration with Formspree / Netlify would go here.
    setSubmitted(true);
  };

  return (
    <div className={styles.applyWrapper}>
      <div className={styles.applyHeader}>
        <h1>Application for Admission 2025-26</h1>
        <p>Take the first step towards a rewarding healthcare career.</p>
      </div>

      <div className={styles.formContainer}>
        {submitted ? (
          <div className={styles.successMessage}>
            <h2>Application Submitted Successfully!</h2>
            <p>Thank you for applying to Nirmala Foundation. An auto-confirmation email has been sent to you. Our admissions team will contact you shortly.</p>
            <button className="btnPrimary" onClick={() => setSubmitted(false)}>Submit Another Application</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.applyForm}>
            <div className={styles.formGroup}>
              <label htmlFor="fullName">Full Name *</label>
              <input type="text" id="fullName" required placeholder="Enter your full name" />
            </div>

            <div className={styles.formRow}>
               <div className={styles.formGroup}>
                 <label htmlFor="dob">Date of Birth *</label>
                 <input type="date" id="dob" required />
               </div>
               <div className={styles.formGroup}>
                 <label htmlFor="contact">Contact Number *</label>
                 <input type="tel" id="contact" required placeholder="+91" />
               </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" required placeholder="name@example.com" />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="program">Program of Interest *</label>
                <select id="program" required>
                  <option value="">Select a Program</option>
                  <option value="mbbs">MBBS</option>
                  <option value="bscn">B.Sc. Nursing</option>
                  <option value="gnm">GNM Nursing</option>
                  <option value="bpharm">B.Pharm</option>
                  <option value="dpharm">D.Pharm</option>
                  <option value="bha">BHA (Hospital Admin)</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="campus">Preferred Campus *</label>
                <select id="campus" required>
                  <option value="">Select Campus</option>
                  <option value="kalyani">Kalyani</option>
                  <option value="barasat">Barasat</option>
                  <option value="chakdaha">Chakdaha</option>
                </select>
              </div>
            </div>

            <div className={styles.formRow}>
               <div className={styles.formGroup}>
                 <label htmlFor="marks">10+2 Percentage (%) *</label>
                 <input type="number" id="marks" required placeholder="e.g. 85" min="0" max="100" />
               </div>
               <div className={styles.formGroup}>
                 <label htmlFor="board">Board Name *</label>
                 <input type="text" id="board" required placeholder="CBSE, ICSE, State Board" />
               </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="marksheet">Upload 10+2 Marksheet (PDF)</label>
              <input type="file" id="marksheet" accept=".pdf" />
              <small className={styles.fileHelp}>Max file size: 5MB. Only PDF accepted.</small>
            </div>

            <div className={styles.checkboxGroup}>
              <input type="checkbox" id="declaration" required />
              <label htmlFor="declaration">I declare that the information provided is true and correct to the best of my knowledge.</label>
            </div>

            <button type="submit" className={`btnPrimary ${styles.submitBtn}`}>Submit Application</button>
          </form>
        )}
      </div>
    </div>
  );
}
