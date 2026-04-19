"use client";

import React, { useState } from 'react';
import styles from './apply.module.css';

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');

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
            <p>Thank you for applying to Nirmala Foundation. Our admissions team will contact you within 3 working days.</p>
            <button className="btnPrimary" onClick={() => setSubmitted(false)}>Submit Another Application</button>
          </div>
        ) : (
          <form
            action="https://formspree.io/f/xgegqvkd"
            method="POST"
            onSubmit={() => setSubmitted(true)}
            className={styles.applyForm}
          >
            <div className={styles.formGroup}>
              <label htmlFor="fullName">Full Name *</label>
              <input type="text" id="fullName" name="fullName" required placeholder="Enter your full name" />
            </div>

            <div className={styles.formRow}>
               <div className={styles.formGroup}>
                 <label htmlFor="dob">Date of Birth *</label>
                 <input type="date" id="dob" name="dob" required />
               </div>
               <div className={styles.formGroup}>
                 <label htmlFor="contact">Contact Number *</label>
                 <input type="tel" id="contact" name="contact" required placeholder="+91" />
               </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" name="email" required placeholder="name@example.com" />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="program">Program of Interest *</label>
                <select
                  id="program"
                  name="program"
                  required
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                >
                  <option value="">Select a Program</option>
                  <optgroup label="Medical">
                    <option value="mbbs">MBBS</option>
                  </optgroup>
                  <optgroup label="Nursing">
                    <option value="bscn">B.Sc. Nursing</option>
                    <option value="pb-bscn">Post Basic B.Sc. Nursing</option>
                    <option value="mscn">M.Sc. Nursing</option>
                    <option value="gnm">GNM Nursing</option>
                  </optgroup>
                  <optgroup label="Pharmacy">
                    <option value="bpharm">B.Pharm</option>
                    <option value="dpharm">D.Pharm</option>
                  </optgroup>
                  <optgroup label="Administration &amp; Allied Health">
                    <option value="bha">BHA (Hospital Admin)</option>
                    <option value="mha">MHA (Master of Hospital Admin)</option>
                    <option value="msc-nutrition">M.Sc. Applied Nutrition</option>
                  </optgroup>
                  <optgroup label="Special Education (For Children)">
                    <option value="early-intervention">Consultation: Early Intervention</option>
                    <option value="special-schooling">Admission: Special Education Schooling</option>
                    <option value="vocational-training">Enrollment: Pre-vocational & Vocational Training</option>
                  </optgroup>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="campus">Preferred Campus *</label>
                <select id="campus" name="campus" required>
                  <option value="">Select Campus</option>
                  <option value="kalyani">Kalyani</option>
                  <option value="barasat">Barasat</option>
                  <option value="chakdaha">Chakdaha</option>
                  <option value="kolkata">Kolkata (Park Circus)</option>
                </select>
              </div>
            </div>

            {/* Conditional NEET Fields for MBBS */}
            {selectedProgram === 'mbbs' && (
              <div className={styles.neetSection}>
                <p className={styles.neetLabel}>NEET-UG Details (Required for MBBS)</p>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="neetRoll">NEET Roll Number *</label>
                    <input type="text" id="neetRoll" name="neetRoll" required placeholder="e.g. 2025XXXXXXXX" />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="neetScore">NEET Score *</label>
                    <input type="number" id="neetScore" name="neetScore" required placeholder="e.g. 520" min="0" max="720" />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="neetYear">NEET Year *</label>
                    <select id="neetYear" name="neetYear" required>
                      <option value="2025">2025</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            <div className={styles.formRow}>
               <div className={styles.formGroup}>
                 <label htmlFor="marks">10+2 Percentage (%) *</label>
                 <input type="number" id="marks" name="marks" required placeholder="e.g. 85" min="0" max="100" />
               </div>
               <div className={styles.formGroup}>
                 <label htmlFor="board">Board Name *</label>
                 <input type="text" id="board" name="board" required placeholder="CBSE, ICSE, State Board" />
               </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="marksheet">Upload 10+2 Marksheet (PDF)</label>
              <input type="file" id="marksheet" name="marksheet" accept=".pdf" />
              <small className={styles.fileHelp}>Max file size: 5MB. Only PDF accepted.</small>
            </div>

            <div className={styles.checkboxGroup}>
              <input type="checkbox" id="declaration" name="declaration" required />
              <label htmlFor="declaration">I declare that the information provided is true and correct to the best of my knowledge.</label>
            </div>

            <button type="submit" className={`btnPrimary ${styles.submitBtn}`}>Submit Application</button>
          </form>
        )}
      </div>
    </div>
  );
}
