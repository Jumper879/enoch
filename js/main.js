/**
 * Main JavaScript for Nudge Folio Website
 * Replicating exact interactive features:
 * - Dynamic canvas ruler tick generator (0 to 2000px markings)
 * - Live real-time clock ticker in DM Mono
 * - Sticky note multi-step contact form controller
 * - FAQ accordion toggles
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. DYNAMIC CANVAS RULER TICKS GENERATOR
  const rulerTicksContainers = document.querySelectorAll('.canvas-ruler-ticks');
  function buildRuler() {
    const screenWidth = Math.max(window.innerWidth, 1800);
    rulerTicksContainers.forEach(container => {
      container.innerHTML = '';
      for (let x = 0; x <= screenWidth; x += 100) {
        // Major Tick
        const majorTick = document.createElement('div');
        majorTick.className = 'ruler-major-tick';
        majorTick.style.left = `${x}px`;
        majorTick.innerHTML = `
          <div class="ruler-tick-line"></div>
          <span class="ruler-tick-num">${x}</span>
        `;
        container.appendChild(majorTick);

        // Sub Tick at 50px
        if (x + 50 <= screenWidth) {
          const subTick = document.createElement('div');
          subTick.className = 'ruler-sub-tick';
          subTick.style.left = `${x + 50}px`;
          container.appendChild(subTick);
        }
      }
    });
  }

  if (rulerTicksContainers.length > 0) {
    buildRuler();
    window.addEventListener('resize', buildRuler);
  }

  // 2. LIVE TIME CLOCK TICKER
  const timeElements = document.querySelectorAll('.live-time-val');
  function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const timeStr = `${hours}:${minutes}:${seconds} ${ampm}`;
    timeElements.forEach(el => {
      el.textContent = timeStr;
    });
  }
  if (timeElements.length > 0) {
    updateTime();
    setInterval(updateTime, 1000);
  }

  // 3. STICKY NOTE CONTACT FORM MULTI-STEP CONTROLLER
  const contactForm = document.getElementById('inquiryForm');
  const step1 = document.getElementById('formStep1');
  const step2 = document.getElementById('formStep2');
  const stepSuccess = document.getElementById('formStepSuccess');
  const stepIndicator = document.getElementById('stepIndicator');
  const nextBtn = document.getElementById('btnNextStep');
  const backBtn = document.getElementById('btnBackStep');

  if (nextBtn && step1 && step2) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const messageInput = document.getElementById('projectDetails');
      const nameInput = document.getElementById('contactName');
      const emailInput = document.getElementById('contactEmail');

      if (messageInput && !messageInput.value.trim()) {
        messageInput.focus();
        messageInput.style.outline = '2px solid var(--token-pink)';
        return;
      }
      if (messageInput) messageInput.style.outline = '';

      if (nameInput && !nameInput.value.trim()) {
        nameInput.focus();
        nameInput.style.borderColor = 'var(--token-pink)';
        return;
      }
      if (nameInput) nameInput.style.borderColor = '';

      if (emailInput && (!emailInput.value.trim() || !emailInput.value.includes('@'))) {
        emailInput.focus();
        emailInput.style.borderColor = 'var(--token-pink)';
        return;
      }
      if (emailInput) emailInput.style.borderColor = '';

      // Transition to Step 2
      step1.style.display = 'none';
      step2.style.display = 'block';
      if (stepIndicator) stepIndicator.textContent = '(2/2)';
    });
  }

  if (backBtn && step1 && step2) {
    backBtn.addEventListener('click', (e) => {
      e.preventDefault();
      step2.style.display = 'none';
      step1.style.display = 'block';
      if (stepIndicator) stepIndicator.textContent = '(1/2)';
    });
  }

  if (contactForm && stepSuccess) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (step2) step2.style.display = 'none';
      if (step1) step1.style.display = 'none';
      stepSuccess.style.display = 'block';
      if (stepIndicator) stepIndicator.textContent = 'Completed';
    });
  }

  // 4. FAQ ACCORDION
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (questionBtn && answer) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(other => {
          other.classList.remove('open');
          const otherAns = other.querySelector('.faq-answer');
          if (otherAns) otherAns.style.display = 'none';
          const otherIcon = other.querySelector('.faq-icon');
          if (otherIcon) otherIcon.textContent = '+';
        });

        if (!isOpen) {
          item.classList.add('open');
          answer.style.display = 'block';
          const icon = item.querySelector('.faq-icon');
          if (icon) icon.textContent = '×';
        }
      });
    }
  });

  // 5. TESTIMONIALS CAROUSEL CONTROLLER
  const track = document.getElementById('testimonialsTrack');
  const prevBtn = document.getElementById('testimonialsPrevBtn');
  const nextBtn = document.getElementById('testimonialsNextBtn');
  const dotsContainer = document.getElementById('testimonialsDots');
  const counterEl = document.getElementById('testimonialsCounter');

  if (track) {
    const cards = Array.from(track.querySelectorAll('.testimonial-card'));
    const totalCards = cards.length;
    let currentIndex = 0;

    // Helper: update dots and counter
    function updateActiveState(index) {
      currentIndex = Math.max(0, Math.min(index, totalCards - 1));
      const dots = dotsContainer ? dotsContainer.querySelectorAll('.carousel-dot') : [];
      dots.forEach((d, i) => {
        d.classList.toggle('active', i === currentIndex);
      });
      if (counterEl) {
        counterEl.textContent = `(${currentIndex + 1}/${totalCards})`;
      }
    }

    // Direct, reliable scrolling function
    function scrollToCard(index) {
      if (index < 0) index = 0;
      if (index >= totalCards) index = 0; // loop back to first
      currentIndex = index;

      const target = cards[currentIndex];
      if (target) {
        const trackLeft = track.getBoundingClientRect().left;
        const cardLeft = target.getBoundingClientRect().left;
        const targetScrollLeft = track.scrollLeft + (cardLeft - trackLeft) - 16;

        track.scrollTo({
          left: Math.max(0, targetScrollLeft),
          behavior: 'smooth'
        });
      }
      updateActiveState(currentIndex);
    }

    // Generate dots
    if (dotsContainer && totalCards > 0) {
      dotsContainer.innerHTML = '';
      cards.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${idx === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to testimonial ${idx + 1}`);
        dot.addEventListener('click', (e) => {
          e.preventDefault();
          scrollToCard(idx);
        });
        dotsContainer.appendChild(dot);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const nextIndex = (currentIndex + 1) % totalCards;
        scrollToCard(nextIndex);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const prevIndex = (currentIndex - 1 + totalCards) % totalCards;
        scrollToCard(prevIndex);
      });
    }

    // Sync state when user manually scrolls or swipes
    let scrollTimeout;
    track.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const trackLeft = track.getBoundingClientRect().left;
        let closestIdx = 0;
        let minDiff = Infinity;

        cards.forEach((card, idx) => {
          const cardLeft = card.getBoundingClientRect().left;
          const diff = Math.abs(cardLeft - (trackLeft + 16));
          if (diff < minDiff) {
            minDiff = diff;
            closestIdx = idx;
          }
        });

        updateActiveState(closestIdx);
      }, 60);
    }, { passive: true });

    // Initialize state
    updateActiveState(0);
  }

  // 6. HOMEPAGE STACKED FOLDER INTERACTION CONTROLLER
  const folderList = document.getElementById('stackedFolderList');
  if (folderList) {
    const cards = Array.from(folderList.querySelectorAll('.stacked-tab-folder-card'));
    const tabs = Array.from(folderList.querySelectorAll('.folder-tab-tab'));

    // Tab click smooth scroll
    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = tab.getAttribute('data-project-target');
        const targetCard = document.getElementById(targetId);
        if (targetCard) {
          const navOffset = 96;
          const cardRect = targetCard.getBoundingClientRect();
          const targetY = window.pageYOffset + cardRect.top - navOffset;
          window.scrollTo({
            top: targetY,
            behavior: 'smooth'
          });
        }
      });
    });

    // Subtle interactive depth scaling as folders stack on scroll
    function updateFolderStacking() {
      if (window.innerWidth <= 860) {
        cards.forEach(card => {
          card.style.transform = '';
          card.style.opacity = '';
        });
        return;
      }

      const stickyTop = 96;
      cards.forEach((card, index) => {
        const nextCard = cards[index + 1];
        if (nextCard) {
          const nextRect = nextCard.getBoundingClientRect();
          // How close nextCard is to stacking on top of this card
          const dist = nextRect.top - stickyTop;
          const overlapDistance = 250;
          if (dist < overlapDistance && dist > 0) {
            const progress = 1 - (dist / overlapDistance);
            const scale = 1 - (progress * 0.035);
            const brightness = 1 - (progress * 0.12);
            card.style.transform = `scale(${scale})`;
            card.style.filter = `brightness(${brightness})`;
          } else if (dist <= 0) {
            card.style.transform = 'scale(0.965)';
            card.style.filter = 'brightness(0.88)';
          } else {
            card.style.transform = 'scale(1)';
            card.style.filter = 'brightness(1)';
          }
        } else {
          card.style.transform = 'scale(1)';
          card.style.filter = 'brightness(1)';
        }
      });
    }

    window.addEventListener('scroll', updateFolderStacking, { passive: true });
    window.addEventListener('resize', updateFolderStacking);
    updateFolderStacking();
  }

  // 6. RESPONSIVE MOBILE NAVIGATION DRAWER & TOGGLE
  const topHeader = document.querySelector('.top-header-bar');
  if (topHeader) {
    let toggleBtn = topHeader.querySelector('.mobile-nav-toggle');
    if (!toggleBtn) {
      toggleBtn = document.createElement('button');
      toggleBtn.className = 'mobile-nav-toggle';
      toggleBtn.setAttribute('aria-label', 'Toggle navigation menu');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = `<span></span><span></span><span></span>`;

      const rightGroup = topHeader.querySelector('.nav-right-group');
      if (rightGroup) {
        rightGroup.appendChild(toggleBtn);
      } else {
        topHeader.appendChild(toggleBtn);
      }
    }

    let drawer = document.getElementById('mobileNavDrawer');
    if (!drawer) {
      const currentPath = window.location.pathname.split('/').pop() || 'index.html';
      const isHome = currentPath === 'index.html' || currentPath === '';
      const isAbout = currentPath === 'about.html';
      const isCaseStudy = currentPath === 'case-study.html' || currentPath === 'case-study-detail.html';
      const isServices = currentPath === 'services.html';
      const isContact = currentPath === 'contact.html';

      drawer = document.createElement('div');
      drawer.id = 'mobileNavDrawer';
      drawer.className = 'mobile-nav-drawer';
      drawer.innerHTML = `
        <nav aria-label="Mobile Navigation">
          <ul class="mobile-nav-list">
            <li><a href="index.html" class="nav-tab-item ${isHome ? 'active' : ''}"><span class="tab-icon">🏠</span> HOME</a></li>
            <li><a href="about.html" class="nav-tab-item ${isAbout ? 'active' : ''}"><span class="tab-icon">✱</span> ABOUT</a></li>
            <li><a href="case-study.html" class="nav-tab-item ${isCaseStudy ? 'active' : ''}"><span class="tab-icon">🗂</span> CASE STUDIES</a></li>
            <li><a href="services.html" class="nav-tab-item ${isServices ? 'active' : ''}"><span class="tab-icon">💼</span> SERVICES</a></li>
            <li><a href="contact.html" class="nav-tab-item ${isContact ? 'active' : ''}"><span class="tab-icon" style="color: var(--token-pink);">♥</span> CONTACT</a></li>
          </ul>
          <div class="mobile-drawer-contact-row">
            <a href="mailto:dara.daodu@gmail.com" class="mini-badge-btn em">EM: dara.daodu@gmail.com</a>
            <a href="tel:+2347067511942" class="mini-badge-btn ph">PH: +234 706 751 1942</a>
          </div>
        </nav>
      `;
      topHeader.parentNode.insertBefore(drawer, topHeader.nextSibling);
    }

    toggleBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('open');
      toggleBtn.classList.toggle('active', isOpen);
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        toggleBtn.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
