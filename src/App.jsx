import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import SocialSidebar from './components/SocialSidebar';
import ResumeSidebar from './components/ResumeSidebar';
import Hero from './components/Hero';
import SkillsMarquee from './components/SkillsMarquee';
import About from './components/About';
import Services from './components/Services';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Manage body scroll lock when mobile menu or modal is open
  useEffect(() => {
    if (isMobileMenuOpen || isResumeModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen, isResumeModalOpen]);

  // Section observer for dynamic active section highlighting
  useEffect(() => {
    const sectionIds = ['about', 'work', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (targetId) => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }

    if (targetId === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (targetId && targetId.startsWith('#')) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Numak Tech Style Custom Interactive Cursor */}
      <CustomCursor />

      {/* Dynamic Top Scroll Bar & Circular Back to Top Button */}
      <ScrollProgress />

      {/* Preloader Screen */}
      <Preloader />

      {/* Ambient Background Glow Orbs */}
      <div className="ambient-glows-container" aria-hidden="true">
        <div className="glow-orb orb-top-left animate-pulse-glow"></div>
        <div className="glow-orb orb-middle-right animate-pulse-glow"></div>
        <div className="glow-orb orb-bottom-left"></div>
      </div>

      {/* Fixed Navbar */}
      <Navbar
        activeSection={activeSection}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        scrollToSection={scrollToSection}
      />

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Sticky Social Strip (Left) */}
      <SocialSidebar />

      {/* Sticky Resume Button (Right) */}
      {/* <ResumeSidebar openModal={() => setIsResumeModalOpen(true)} /> */}

      {/* Main Content Sections */}
      <main>
        <Hero scrollToSection={scrollToSection} />
        <SkillsMarquee />
        <About />
        <Services />
        <Journey />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        closeModal={() => setIsResumeModalOpen(false)}
      />
    </>
  );
}
