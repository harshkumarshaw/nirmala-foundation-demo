"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { institutesData } from "@/data/institutesData";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenSection(null);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
      >
        <span className={`hamburgerLine ${isOpen ? "hamburgerOpen" : ""}`} />
        <span className={`hamburgerLine ${isOpen ? "hamburgerOpen" : ""}`} />
        <span className={`hamburgerLine ${isOpen ? "hamburgerOpen" : ""}`} />
      </button>

      {/* Overlay */}
      {isOpen && <div className="mobileNavOverlay" onClick={closeMenu} />}

      {/* Slide-out Drawer */}
      <div className={`mobileDrawer ${isOpen ? "mobileDrawerOpen" : ""}`}>
        <div className="mobileDrawerHeader">
          <Link href="/" className="navLogo" onClick={closeMenu}>
            Nirmala Foundation
          </Link>
        </div>

        <nav className="mobileDrawerNav" aria-label="Mobile Navigation">
          {/* Institutes */}
          <div className="mobileSection">
            <button
              className="mobileSectionTitle"
              onClick={() => toggleSection("institutes")}
              aria-expanded={openSection === "institutes"}
            >
              Our Institutes
              <span className={`mobileChevron ${openSection === "institutes" ? "mobileChevronOpen" : ""}`}>▸</span>
            </button>
            {openSection === "institutes" && (
              <div className="mobileSectionLinks">
                {institutesData.map(inst => (
                  <Link key={inst.slug} href={`/institutes/${inst.slug}`} onClick={closeMenu}>
                    {inst.shortName} — {inst.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Programs */}
          <div className="mobileSection">
            <button
              className="mobileSectionTitle"
              onClick={() => toggleSection("programs")}
              aria-expanded={openSection === "programs"}
            >
              Programs
              <span className={`mobileChevron ${openSection === "programs" ? "mobileChevronOpen" : ""}`}>▸</span>
            </button>
            {openSection === "programs" && (
              <div className="mobileSectionLinks">
                <Link href="/institutes/jmn" onClick={closeMenu}>MBBS — Chakdaha Campus</Link>
                
                <div className="mobileSubGroup">
                  <span className="mobileSubTitle">B.Sc. Nursing</span>
                  <Link href="/institutes/iinr" onClick={closeMenu}>Kalyani (IINR)</Link>
                  <Link href="/institutes/ichfn" onClick={closeMenu}>Park Circus (ICHFN)</Link>
                </div>

                <div className="mobileSubGroup">
                  <span className="mobileSubTitle">GNM Nursing</span>
                  <Link href="/institutes/iinr" onClick={closeMenu}>Kalyani (IINR)</Link>
                  <Link href="/institutes/ccnr" onClick={closeMenu}>Barasat (CCNI)</Link>
                  <Link href="/institutes/ichfn" onClick={closeMenu}>Park Circus (ICHFN)</Link>
                </div>

                <Link href="/institutes/iinr" onClick={closeMenu}>Post Basic B.Sc. Nursing</Link>
                <Link href="/institutes/iinr" onClick={closeMenu}>M.Sc. Nursing</Link>
                <Link href="/institutes/iipsr" onClick={closeMenu}>B.Pharm / D.Pharm (Kalyani)</Link>
                <Link href="/institutes/iihmahs" onClick={closeMenu}>BHA / MHA (Kalyani)</Link>
                <div className="mobileSubGroup">
                  <span className="mobileSubTitle">Special Ed (For Children)</span>
                  <Link href="/institutes/iser" onClick={closeMenu}>Early Intervention</Link>
                  <Link href="/institutes/iser" onClick={closeMenu}>Special Education</Link>
                  <Link href="/institutes/iser" onClick={closeMenu}>Vocational Training</Link>
                </div>
              </div>
            )}
          </div>

          {/* Direct links */}
          <Link href="/admissions" className="mobileSectionTitle" onClick={closeMenu}>Admissions</Link>
          <Link href="/about" className="mobileSectionTitle" onClick={closeMenu}>About Us</Link>
          <Link href="/gallery" className="mobileSectionTitle" onClick={closeMenu}>Gallery</Link>
          <Link href="/contact" className="mobileSectionTitle" onClick={closeMenu}>Contact Us</Link>
        </nav>

        <div className="mobileDrawerCta">
          <Link href="/apply" className="btnPrimary" onClick={closeMenu} style={{ width: '100%', textAlign: 'center', display: 'block', padding: '14px' }}>
            Apply Now →
          </Link>
        </div>
      </div>
    </>
  );
}
