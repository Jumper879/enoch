/**
 * Main JavaScript for Nudge Folio Website
 * Replicating exact interactive features:
 * - Dynamic canvas ruler tick generator (0 to 2000px markings)
 * - Live real-time clock ticker in DM Mono
 * - Sticky note multi-step contact form controller
 * - FAQ accordion toggles
 * - Testimonial carousel
 * - Scroll-stacking folder depth controller (desktop & mobile)
 * - Mobile navigation toggle & drawer
 */

// =====================================================
// GLOBAL MOBILE MENU — called by inline onclick on buttons
// =====================================================

window.closeMobileMenu = function() {
  var drawer = document.getElementById('mobileNavDrawer');
  var btns = document.querySelectorAll('.mobile-nav-toggle');
  if (drawer) drawer.classList.remove('open');
  if (btns) btns.forEach(function(btn) {
    btn.classList.remove('active');
    btn.setAttribute('aria-expanded', 'false');
  });
  document.body.classList.remove('drawer-open');
};

window.openMobileMenu = function() {
  var drawer = document.getElementById('mobileNavDrawer');
  var btns = document.querySelectorAll('.mobile-nav-toggle');
  if (drawer) drawer.classList.add('open');
  if (btns) btns.forEach(function(btn) {
    btn.classList.add('active');
    btn.setAttribute('aria-expanded', 'true');
  });
  document.body.classList.add('drawer-open');
};

window.toggleMobileMenu = function(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  var drawer = document.getElementById('mobileNavDrawer');
  if (!drawer) return;
  if (drawer.classList.contains('open')) {
    window.closeMobileMenu();
  } else {
    window.openMobileMenu();
  }
};


function initMainFolio() {
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
  const formNextBtn = document.getElementById('btnNextStep');
  const formBackBtn = document.getElementById('btnBackStep');

  if (formNextBtn && step1 && step2) {
    formNextBtn.addEventListener('click', (e) => {
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

  if (formBackBtn && step1 && step2) {
    formBackBtn.addEventListener('click', (e) => {
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

  // 4. FAQ ACCORDION CONTROLLER (Services Page)
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item, index) => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    // Ensure first item is open by default, others closed
    if (index === 0 && !item.classList.contains('closed')) {
      item.classList.add('open');
      if (answer) answer.style.display = 'block';
      if (icon) icon.textContent = '−';
    } else if (!item.classList.contains('open')) {
      if (answer) answer.style.display = 'none';
      if (icon) icon.textContent = '+';
    }

    if (questionBtn) {
      questionBtn.style.cursor = 'pointer';
      questionBtn.onclick = (e) => {
        if (e) {
          e.preventDefault();
        }
        const isCurrentlyOpen = item.classList.contains('open');

        // Close all items
        faqItems.forEach(other => {
          other.classList.remove('open');
          const otherAns = other.querySelector('.faq-answer');
          if (otherAns) otherAns.style.display = 'none';
          const otherIcon = other.querySelector('.faq-icon');
          if (otherIcon) otherIcon.textContent = '+';
        });

        // Toggle clicked item
        if (!isCurrentlyOpen) {
          item.classList.add('open');
          if (answer) answer.style.display = 'block';
          if (icon) icon.textContent = '−';
        }
      };
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

    function scrollToCard(index) {
      if (index < 0) index = 0;
      if (index >= totalCards) index = 0;
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

    updateActiveState(0);
  }

  // 6. HOMEPAGE STACKED FOLDER INTERACTION (Desktop & Mobile Scroll Stacking)
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
          const navOffset = window.innerWidth <= 860 ? 76 : 96;
          const cardRect = targetCard.getBoundingClientRect();
          const targetY = window.pageYOffset + cardRect.top - navOffset;
          window.scrollTo({
            top: targetY,
            behavior: 'smooth'
          });
        }
      });
    });

    // Interactive depth scaling as folders stack on scroll (Runs on both desktop and mobile!)
    function updateFolderStacking() {
      const isMobile = window.innerWidth <= 860;
      const stickyTop = isMobile ? 74 : 96;
      const overlapDistance = isMobile ? 180 : 250;

      cards.forEach((card, index) => {
        const nextCard = cards[index + 1];
        if (nextCard) {
          const nextRect = nextCard.getBoundingClientRect();
          const dist = nextRect.top - stickyTop;
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

  // 7. MOBILE NAVIGATION DRAWER
  // NOTE: The hamburger button uses inline onclick="window.toggleMobileMenu(event)"
  // and the close button uses inline onclick="window.closeMobileMenu(event)".
  // We do NOT touch those buttons here — the inline handlers call the globally
  // defined window functions above. We only set up the supporting behaviours.
  var toggleBtns = document.querySelectorAll('.mobile-nav-toggle');
  var drawer = document.getElementById('mobileNavDrawer');

  if (drawer) {
    // Close drawer when any nav link inside it is clicked
    drawer.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        window.closeMobileMenu();
      });
    });

    // Close when clicking/tapping outside the open drawer
    document.addEventListener('click', function(e) {
      if (!drawer.classList.contains('open')) return;
      var clickedToggle = false;
      toggleBtns.forEach(function(btn) {
        if (btn === e.target || btn.contains(e.target)) clickedToggle = true;
      });
      if (!drawer.contains(e.target) && !clickedToggle) {
        window.closeMobileMenu();
      }
    });

    // Escape key closes drawer
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        window.closeMobileMenu();
      }
    });
  }

  // 8. IMAGE LIGHTBOX
  // Case-study / featured-work images are shown in full, never cropped or
  // zoomed. Clicking (or Enter/Space on a focused image) opens it enlarged.
  var zoomables = document.querySelectorAll('.hero-folder-img, .taped-media-img, .case-study-unboxed-img');
  if (zoomables.length) {
    var box = document.createElement('div');
    box.className = 'img-lightbox';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-label', 'Enlarged image');
    box.innerHTML =
      '<button type="button" class="img-lightbox-close" aria-label="Close enlarged image">' +
        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111212" stroke-width="2.4" stroke-linecap="round">' +
          '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>' +
        '</svg>' +
      '</button>' +
      '<img class="img-lightbox-img" alt="">';
    document.body.appendChild(box);
    var boxImg = box.querySelector('.img-lightbox-img');
    var lastFocus = null;

    var openLightbox = function(img) {
      lastFocus = img;
      // The detail page swaps the image src after load, so read it at click time.
      boxImg.src = img.currentSrc || img.src;
      boxImg.alt = img.alt || '';
      box.classList.add('open');
      document.body.classList.add('lightbox-open');
      box.querySelector('.img-lightbox-close').focus();
    };
    var closeLightbox = function() {
      if (!box.classList.contains('open')) return;
      box.classList.remove('open');
      document.body.classList.remove('lightbox-open');
      if (lastFocus) lastFocus.focus();
    };

    zoomables.forEach(function(img) {
      img.setAttribute('tabindex', '0');
      img.setAttribute('role', 'button');
      img.setAttribute('aria-label', 'View larger: ' + (img.alt || 'project image'));
      img.addEventListener('click', function() { openLightbox(img); });
      img.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(img); }
      });
    });
    box.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeLightbox();
    });
  }
}

// Robust execution whether DOM is loading, interactive, or complete
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMainFolio);
} else {
  initMainFolio();
}

