'use client'

import { institutesData } from '@/data/institutesData'
import mediaRegistry from '@/data/mediaRegistry.json'
import styles from './contact.module.css'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className={styles.contactWrapper}>
      <section className={styles.hero}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className={styles.heroVideo}
        >
          <source src={mediaRegistry.hubs.contact_hero} type="video/mp4" />
        </video>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>Connect With Us</h1>
          <p>Whether you are a prospective student, a parent, or a global partner, our dedicated administrative teams across West Bengal are here to assist you.</p>
        </div>
      </section>

      <section id="query" className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.formCol}>
              <div className={styles.header}>
                <span className={styles.tag}>Inquiry</span>
                <h2>Send a Message</h2>
                <p>Have a specific question about a program or admission? Drop us a line and our counselors will get back to you within 24 hours.</p>
              </div>

              <form className={styles.form}>
                <div className={styles.formInput}>
                  <label>Full Name</label>
                  <input type="text" placeholder="e.g. Rahul Sharma" />
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formInput}>
                    <label>Email Address</label>
                    <input type="email" placeholder="rahul@example.com" />
                  </div>
                  <div className={styles.formInput}>
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+91 00000 00000" />
                  </div>
                </div>
                <div className={styles.formInput}>
                  <label>Institute of Interest</label>
                  <select>
                    <option>General Inquiry</option>
                    {institutesData.map(i => (
                      <option key={i.slug}>{i.name}</option>
                    ))}
                  </select>
                </div>
                <div className={styles.formInput}>
                  <label>Your Message</label>
                  <textarea rows={5} placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="btnPrimary">
                  Submit Inquiry <Send size={18} />
                </button>
              </form>
            </div>

            <div className={styles.infoCol}>
              <div className={styles.officeCard}>
                <div className={styles.officeHeader}>
                  <MapPin className={styles.icon} />
                  <h3>Kalyani Administrative Hub</h3>
                </div>
                <p>Nirmala Foundation Campus, Phase-II, Kalyani Industrial Estate, Nadia, West Bengal - 741235</p>
                <div className={styles.officeDetails}>
                  <span><Phone size={16} /> +91 98310 50222</span>
                  <span><Mail size={16} /> info@nirmalafoundation.co.in</span>
                </div>
              </div>

              <div className={styles.officeCard}>
                <div className={styles.officeHeader}>
                  <MapPin className={styles.icon} />
                  <h3>Kolkata Corporate Office</h3>
                </div>
                <p>11, Dr. Biresh Guha Street, Park Circus, Kolkata, West Bengal - 700017</p>
                <div className={styles.officeDetails}>
                  <span><Phone size={16} /> +033 4004 0555</span>
                  <span><Mail size={16} /> kolkata@nirmalafoundation.co.in</span>
                </div>
              </div>

              <div className={styles.officeCard}>
                <div className={styles.officeHeader}>
                  <MapPin className={styles.icon} />
                  <h3>Barasat Regional Office</h3>
                </div>
                <p>Nabapally, Barasat, North 24 Parganas, Kolkata - 700126</p>
                <div className={styles.officeDetails}>
                  <span><Phone size={16} /> +91 98310 50223</span>
                  <span><Mail size={16} /> barasat@nirmalafoundation.co.in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.institutesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}>Direct Reach</span>
            <h2>Departmental Contacts</h2>
          </div>

          <div className={styles.institutesGrid}>
            {institutesData.map((inst) => (
              <div key={inst.slug} className={styles.instCard}>
                <h4>{inst.shortName}</h4>
                <p>{inst.contactDetails.office}</p>
                <div className={styles.instLinks}>
                  <a href={`tel:${inst.contactDetails.phone}`}><Phone size={14} /> {inst.contactDetails.phone}</a>
                  <a href={`mailto:${inst.contactDetails.email}`}><Mail size={14} /> {inst.contactDetails.email}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
