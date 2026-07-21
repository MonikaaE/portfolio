/* ==========================================================================
   MONIKA E — PORTFOLIO SCRIPT
   Interactive JavaScript functions for Preloader, Navigation, and Modals
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. SIMULATED PRELOADER PROGRESS
    const preloader = document.getElementById('preloader');
    const percentEl = document.getElementById('preloader-percent');
    const barEl = document.getElementById('preloader-bar-fill');

    if (preloader && percentEl && barEl) {
        let progress = 0;
        const intervalTime = 12; // Controls the loading speed (approx 1.2s total)
        
        const loadingInterval = setInterval(() => {
            progress += 1;
            percentEl.textContent = `${progress}%`;
            barEl.style.width = `${progress}%`;

            if (progress >= 100) {
                clearInterval(loadingInterval);
                // Subtle delay at 100% for smooth visual handoff
                setTimeout(() => {
                    preloader.classList.add('fade-out');
                }, 180);
            }
        }, intervalTime);
    }


    // 2. MOBILE NAVIGATION OVERLAY TOGGLE
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    function toggleMobileMenu() {
        mobileMenuToggle.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('active');
        
        // Prevent body scroll when menu is active
        if (mobileMenuOverlay.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    if (mobileMenuToggle && mobileMenuOverlay) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
        
        // Close menu when clicking a link
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                toggleMobileMenu();
            });
        });
    }


    // 3. SMOOTH SCROLLING FOR NAVIGATION LINKS
    const navLinks = document.querySelectorAll('.nav-link, .logo-link, .hero-scroll-indicator, .mobile-nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // If target is just '#', scroll to top
            if (targetId === '#') {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }

            // Otherwise check if it's an on-page section link
            if (targetId && targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    e.preventDefault();
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });


    // 4. INTERSECTION OBSERVER FOR ACTIVE SECTION HIGHLIGHTING
    const sections = document.querySelectorAll('section[id]');
    const desktopLinks = document.querySelectorAll('.nav-menu .nav-link');

    const observerOptions = {
        root: null,
        rootMargin: '-30% 0px -60% 0px', // Triggers when section occupies central viewport
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                // Highlight desktop navbar links
                desktopLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                        link.style.color = 'var(--primary-color)';
                    } else {
                        link.style.color = '';
                    }
                });

                // Highlight mobile menu links
                mobileNavLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Reset navbar active state when at top of page
    window.addEventListener('scroll', () => {
        if (window.scrollY < 200) {
            desktopLinks.forEach(link => {
                link.classList.remove('active');
                link.style.color = '';
            });
            mobileNavLinks.forEach(link => {
                link.classList.remove('active');
            });
        }
    });


    // 5. RESUME MODAL VISIBILITY CONTROLS
    const resumeSidebarTrigger = document.getElementById('resume-sidebar-trigger');
    const resumeModal = document.getElementById('resume-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalPrintBtn = document.getElementById('modal-print-btn');

    function openResumeModal(e) {
        if (e) e.preventDefault();
        resumeModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Stop background scroll
    }

    function closeResumeModal() {
        resumeModal.classList.remove('active');
        // Restore background scroll ONLY if mobile overlay menu is not active
        if (!mobileMenuOverlay.classList.contains('active')) {
            document.body.style.overflow = '';
        }
    }

    if (resumeSidebarTrigger && resumeModal) {
        resumeSidebarTrigger.addEventListener('click', openResumeModal);
        
        if (modalCloseBtn) {
            modalCloseBtn.addEventListener('click', closeResumeModal);
        }

        // Close on clicking overlay background (outside sheet)
        resumeModal.addEventListener('click', (e) => {
            if (e.target === resumeModal) {
                closeResumeModal();
            }
        });

        // Close modal on ESC keypress
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && resumeModal.classList.contains('active')) {
                closeResumeModal();
            }
        });
        
        // Print action inside resume modal
        if (modalPrintBtn) {
            modalPrintBtn.addEventListener('click', () => {
                window.print();
            });
        }
    }


    // 6. MICRO-INTERACTIONS: PREVENT JUMPS ON UNIMPLEMENTED LINKS
    const dummyLinks = document.querySelectorAll('a[href="#"]');
    dummyLinks.forEach(link => {
        // Exclude specific triggers like logo or scroll arrow
        if (link.id !== 'resume-sidebar-trigger' && !link.classList.contains('logo-link') && !link.classList.contains('hero-scroll-indicator')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
            });
        }
    });

});
