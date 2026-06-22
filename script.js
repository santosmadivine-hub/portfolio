(function () {
  'use strict';

  /* ============================================
     Project Data
     ============================================ */
  const projectData = [
    {
      title: 'FinFlow',
      emoji: '\uD83D\uDCB0',
      tags: ['Flutter', 'Firebase', 'Stripe'],
      gradient: 'linear-gradient(135deg, #1e1b4b, #312e81)',
      description: 'A comprehensive personal finance management app that helps users track expenses, manage budgets, and achieve financial goals. Features real-time sync across all devices with bank-level security.',
      features: ['Multi-account aggregation with bank APIs', 'AI-powered spending insights & categorization', 'Recurring bill tracking & payment reminders', 'Investment portfolio tracking', 'Export to CSV/PDF reports'],
      github: '#',
      demo: '#'
    },
    {
      title: 'FitSync',
      emoji: '\uD83D\uDCAA',
      tags: ['React Native', 'Node.js', 'MongoDB'],
      gradient: 'linear-gradient(135deg, #064e3b, #065f46)',
      description: 'A holistic fitness and wellness platform with personalized workout plans, nutrition tracking, and AI coaching. Integrates with Wear OS and Apple Watch for real-time health metrics.',
      features: ['AI workout generator based on fitness level', 'Meal planning with macro tracking', 'Wearable device integration', 'Social challenges & leaderboards', 'Progress visualization with charts'],
      github: '#',
      demo: '#'
    },
    {
      title: 'ShopWave',
      emoji: '\uD83D\uDED2',
      tags: ['Flutter', 'Stripe', 'Firebase'],
      gradient: 'linear-gradient(135deg, #1e1b4b, #4c1d95)',
      description: 'A full-featured e-commerce marketplace connecting local sellers with buyers. Supports real-time inventory management, secure payments, and personalized product recommendations.',
      features: ['Real-time inventory & order tracking', 'Secure in-app payments with Stripe', 'Personalized recommendation engine', 'Seller dashboard with analytics', 'Push notification marketing campaigns'],
      github: '#',
      demo: '#'
    },
    {
      title: 'ChatBot Pro',
      emoji: '\uD83E\uDD16',
      tags: ['React Native', 'OpenAI', 'WebSockets'],
      gradient: 'linear-gradient(135deg, #1c1917, #292524)',
      description: 'An enterprise-grade AI chatbot SDK that integrates with existing customer support systems. Features real-time messaging, sentiment analysis, and multi-language support out of the box.',
      features: ['GPT-powered conversational AI', 'Real-time messaging with WebSockets', 'Multi-language support (12 languages)', 'Sentiment analysis & escalation rules', 'Custom training on company knowledge base'],
      github: '#',
      demo: '#'
    },
    {
      title: 'MediTrack',
      emoji: '\uD83C\uDFE5',
      tags: ['Flutter', 'HIPAA', 'AWS'],
      gradient: 'linear-gradient(135deg, #0f172a, #1e293b)',
      description: 'A HIPAA-compliant healthcare management platform connecting patients with providers. Features telemedicine, appointment scheduling, and seamless EHR integration.',
      features: ['HIPAA-compliant video consultations', 'EHR/EMR system integration', 'Automated appointment reminders', 'Prescription management & refills', 'Secure messaging between patients & providers'],
      github: '#',
      demo: '#'
    },
    {
      title: 'GameVault',
      emoji: '\uD83C\uDFAE',
      tags: ['React Native', 'Socket.io', 'Redis'],
      gradient: 'linear-gradient(135deg, #1a0a2e, #2d1b69)',
      description: 'A social gaming platform with real-time multiplayer capabilities. Features matchmaking, in-app chat, leaderboards, and a reward system to keep players engaged.',
      features: ['Real-time multiplayer with Socket.io', 'ELO-based matchmaking system', 'In-app voice & text chat', 'Global & friends leaderboards', 'Daily challenges & reward system'],
      github: '#',
      demo: '#'
    }
  ];

  /* ============================================
     DOM References
     ============================================ */
  const navbar = document.querySelector('.navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const backToTop = document.getElementById('backToTop');
  const contactForm = document.getElementById('contactForm');
  const toast = document.getElementById('toast');
  const modal = document.getElementById('projectModal');
  const modalClose = modal.querySelector('.modal-close');
  const themeToggleBtn = document.getElementById('themeToggle');

  /* ============================================
     Theme Toggle
     ============================================ */
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  /* ============================================
     Mobile Nav
     ============================================ */
  hamburger.addEventListener('click', function () {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', open);
  });

  document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ============================================
     Reading Progress Bar
     ============================================ */
  const progressFill = document.getElementById('progressFill');

  window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressFill.style.width = progress + '%';

    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ============================================
     Enhanced Scroll Reveal Animations
     ============================================ */
  function initScrollReveal() {
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    var revealMap = {
      'fade-up': 'reveal-fade-up',
      'fade-down': 'reveal-fade-down',
      'fade-left': 'reveal-fade-left',
      'fade-right': 'reveal-fade-right',
      'fade-scale': 'reveal-fade-scale',
      'fade-blur': 'reveal-fade-blur'
    };

    var revealEls = document.querySelectorAll('[data-reveal]');
    revealEls.forEach(function (el) {
      var dir = el.getAttribute('data-reveal') || 'fade-blur';
      var cls = revealMap[dir] || 'reveal-fade-up';
      el.classList.add('reveal', cls);
    });

    var staggerEls = document.querySelectorAll('[data-reveal-stagger]');
    staggerEls.forEach(function (el) {
      el.classList.add('stagger-children');
    });

    if (!('IntersectionObserver' in window)) {
      revealEls.forEach(function (el) { el.classList.add('visible'); });
      staggerEls.forEach(function (el) { el.classList.add('visible-stagger'); });
      return;
    }

    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });

    var staggerObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible-stagger');
            staggerObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );

    staggerEls.forEach(function (el) {
      staggerObserver.observe(el);
    });
  }

  initScrollReveal();

  /* ============================================
     Hero Canvas Particles
     ============================================ */
  function initHeroCanvas() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width, height, particles;
    const mouse = { x: null, y: null, radius: 150 };

    function resize() {
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
      initParticles();
    }

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        this.color = getComputedStyle(document.documentElement).getPropertyValue('--accent-primary').trim() || '#00d4aa';
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
      
      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < mouse.radius) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
      }
    }

    function initParticles() {
      particles = [];
      const numberOfParticles = (width * height) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    }

    function connect() {
      let opacityValue = 1;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x))
                       + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
          if (distance < (width / 7) * (height / 7)) {
            opacityValue = 1 - (distance / 20000);
            ctx.strokeStyle = `rgba(150, 150, 150, ${opacityValue * 0.15})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, width, height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      connect();
    }

    window.addEventListener('resize', resize);
    
    // Track mouse over hero section
    const heroSection = document.getElementById('hero');
    heroSection.addEventListener('mousemove', function(e) {
      const rect = heroSection.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });
    
    heroSection.addEventListener('mouseleave', function() {
      mouse.x = null;
      mouse.y = null;
    });

    // Handle theme toggle color changes
    const themeBtn = document.getElementById('themeToggle');
    if(themeBtn) {
      themeBtn.addEventListener('click', () => {
        setTimeout(() => {
          const newColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-primary').trim();
          particles.forEach(p => p.color = newColor);
        }, 50); // slight delay to allow CSS variable to update
      });
    }

    resize();
    animate();
  }
  
  initHeroCanvas();

  /* ============================================
     Animated Counters
     ============================================ */
  function initCounters() {
    const statNums = document.querySelectorAll('.stat-num');

    if (!statNums.length) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-target'), 10);
            if (isNaN(target)) return;

            animateCounter(el, target);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    statNums.forEach(function (el) {
      observer.observe(el);
    });
  }

  function animateCounter(el, target) {
    var startTime = null;
    var duration = 1800;
    var suffix = '';
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (target === 98) suffix = '%';
    if (target === 15 || target === 30) suffix = '+';

    if (prefersReducedMotion) {
      el.textContent = target + suffix;
      return;
    }

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = easeOutCubic(progress);
      var current = Math.round(eased * target);
      el.textContent = current + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix;
      }
    }

    requestAnimationFrame(step);
  }

  initCounters();

  /* ============================================
     Typewriter Effect
     ============================================ */
  function initTypewriter() {
    const typewriterElements = document.querySelectorAll('.typewriter');
    if (!typewriterElements.length) return;

    typewriterElements.forEach(typewriterElement => {
      let words = [];
      try {
        words = JSON.parse(typewriterElement.getAttribute('data-words'));
      } catch(e) {
        return;
      }

      let wordIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      let typeSpeed = 100;

      function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
          typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
          charIndex--;
          typeSpeed = 50; // faster when deleting
        } else {
          typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
          charIndex++;
          typeSpeed = 100;
        }

        // If finished typing the word
        if (!isDeleting && charIndex === currentWord.length) {
          isDeleting = true;
          typeSpeed = 2000; // pause before deleting
        } 
        // If finished deleting the word
        else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          typeSpeed = 500; // pause before typing next
        }

        setTimeout(type, typeSpeed);
      }

      // Start the effect
      setTimeout(type, 1000 + Math.random() * 500); // slight random delay for each
    });
  }

  initTypewriter();

  /* ============================================
     Testimonial Carousel
     ============================================ */
  function initCarousel() {
    const track = document.getElementById('testimonialTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('carouselDots');
    const slides = track.querySelectorAll('.testimonial-card');
    const totalSlides = slides.length;
    let currentIndex = 0;
    let autoSlide;

    // Create dots
    slides.forEach(function (_, i) {
      const dot = document.createElement('button');
      dot.classList.add('carousel-dot');
      if (i === 0) dot.classList.add('active');
      dot.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
      dot.addEventListener('click', function () {
        goToSlide(i);
        resetAutoSlide();
      });
      dotsContainer.appendChild(dot);
    });

    function goToSlide(index) {
      currentIndex = index;
      track.style.transform = 'translateX(-' + (index * 100) + '%)';

      dotsContainer.querySelectorAll('.carousel-dot').forEach(function (dot, i) {
        dot.classList.toggle('active', i === index);
      });
    }

    function nextSlide() {
      goToSlide((currentIndex + 1) % totalSlides);
    }

    function prevSlide() {
      goToSlide((currentIndex - 1 + totalSlides) % totalSlides);
    }

    function resetAutoSlide() {
      clearInterval(autoSlide);
      autoSlide = setInterval(nextSlide, 5000);
    }

    prevBtn.addEventListener('click', function () {
      prevSlide();
      resetAutoSlide();
    });

    nextBtn.addEventListener('click', function () {
      nextSlide();
      resetAutoSlide();
    });

    // Touch/swipe support
    let startX = 0;
    let isDragging = false;

    track.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
      isDragging = true;
      clearInterval(autoSlide);
    }, { passive: true });

    track.addEventListener('touchend', function (e) {
      if (!isDragging) return;
      isDragging = false;
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) nextSlide();
        else prevSlide();
      }

      resetAutoSlide();
    }, { passive: true });

    autoSlide = setInterval(nextSlide, 5000);
  }

  initCarousel();

  /* ============================================
     Project Modal
     ============================================ */
  function initProjectModal() {
    const cards = document.querySelectorAll('.project-card');
    const modalPreview = modal.querySelector('.modal-preview');
    const modalTags = modal.querySelector('.modal-tags');
    const modalTitle = modal.querySelector('.modal-title');
    const modalDesc = modal.querySelector('.modal-description');
    const modalFeatures = modal.querySelector('.modal-features ul');
    const modalLinks = modal.querySelector('.modal-links');

    function openModal(index) {
      const project = projectData[index];
      if (!project) return;

      modalPreview.style.background = project.gradient;
      modalPreview.textContent = project.emoji;

      modalTags.innerHTML = project.tags.map(function (t) {
        return '<span>' + t + '</span>';
      }).join('');

      modalTitle.textContent = project.title;
      modalDesc.textContent = project.description;

      modalFeatures.innerHTML = project.features.map(function (f) {
        return '<li>' + f + '</li>';
      }).join('');

      modalLinks.innerHTML =
        '<a href="' + project.github + '" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z"/></svg> Source Code</a>' +
        '<a href="' + project.demo + '" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg> Live Demo</a>';

      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    cards.forEach(function (card) {
      card.addEventListener('click', function () {
        var idx = parseInt(card.getAttribute('data-project'), 10);
        if (!isNaN(idx)) openModal(idx);
      });

      var detailBtn = card.querySelector('.project-detail-btn');
      if (detailBtn) {
        detailBtn.addEventListener('click', function (e) {
          e.stopPropagation();
          var idx = parseInt(card.getAttribute('data-project'), 10);
          if (!isNaN(idx)) openModal(idx);
        });
      }
    });

    modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
      }
    });
  }

  initProjectModal();

  /* ============================================
     3D Card Tilt Effect
     ============================================ */
  function initCardTilt() {
    var cards = document.querySelectorAll('.project-card');
    if (!cards.length) return;

    cards.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var centerX = rect.width / 2;
        var centerY = rect.height / 2;
        var rotateX = (y - centerY) / centerY * -8;
        var rotateY = (x - centerX) / centerX * 8;
        card.style.transform =
          'perspective(800px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-8px)';
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
      });
    });
  }

  initCardTilt();

  /* ============================================
     Typing Animation for Hero Code
     ============================================ */
  function initTypingAnimation() {
    var codeBlock = document.querySelector('.code-block code');
    if (!codeBlock) return;

    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    var html = codeBlock.innerHTML;
    var cursorSpan = document.createElement('span');
    cursorSpan.className = 'typing-cursor';
    cursorSpan.setAttribute('aria-hidden', 'true');

    var lines = html.split('\n');
    var shown = false;

    var heroObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !shown) {
            shown = true;
            heroObserver.unobserve(entry.target);
            codeBlock.textContent = '';
            codeBlock.appendChild(document.createTextNode(''));
            codeBlock.appendChild(cursorSpan);
            typeLines(lines, 0, 0, codeBlock, cursorSpan);
          }
        });
      },
      { threshold: 0.3 }
    );

    heroObserver.observe(codeBlock);
  }

  function typeLines(lines, lineIdx, charIdx, container, cursor) {
    if (lineIdx >= lines.length) {
      cursor.style.animation = 'blink 1.2s step-end infinite';
      return;
    }

    var currentLine = lines[lineIdx];
    if (charIdx <= currentLine.length) {
      var textBefore = lines.slice(0, lineIdx).join('\n');
      var partialLine = currentLine.slice(0, charIdx);
      var displayText = textBefore + (textBefore ? '\n' : '') + partialLine;
      container.textContent = displayText;
      container.appendChild(cursor);

      var delay = currentLine[charIdx] === '<' ? 5 : 30 + Math.random() * 20;
      requestAnimationFrame(function () {
        setTimeout(function () {
          typeLines(lines, lineIdx, charIdx + 1, container, cursor);
        }, delay);
      });
    } else {
      requestAnimationFrame(function () {
        setTimeout(function () {
          typeLines(lines, lineIdx + 1, 0, container, cursor);
        }, 200);
      });
    }
  }

  initTypingAnimation();

  /* ============================================
     Form Validation & Submission
     ============================================ */
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;

    var fields = [
      { id: 'name', label: 'Name' },
      { id: 'email', label: 'Email' },
      { id: 'message', label: 'Message' }
    ];

    fields.forEach(function (field) {
      var input = document.getElementById(field.id);
      var error = input.parentElement.querySelector('.form-error');
      var value = input.value.trim();

      input.parentElement.classList.remove('error');

      if (!value) {
        error.textContent = field.label + ' is required';
        input.parentElement.classList.add('error');
        isValid = false;
        return;
      }

      if (field.id === 'email' && !isValidEmail(value)) {
        error.textContent = 'Please enter a valid email';
        input.parentElement.classList.add('error');
        isValid = false;
        return;
      }

      error.textContent = '';
    });

    if (!isValid) return;

    var submitBtn = contactForm.querySelector('.btn-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    // Simulate form submission
    setTimeout(function () {
      showToast('Message sent! I\'ll get back to you soon.');
      contactForm.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }, 1200);
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /* ============================================
     Toast Notifications
     ============================================ */
  function showToast(message, type) {
    toast.textContent = message;
    toast.className = 'toast' + (type === 'error' ? ' error' : '') + ' show';

    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(function () {
      toast.classList.remove('show');
    }, 3500);
  }

  /* ============================================
     Smooth Scroll for Anchor Links (Fallback)
     ============================================ */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ============================================
     Keyboard Navigation Support
     ============================================ */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  /* ============================================
     Parallax Floating Orbs (scroll-driven)
     ============================================ */
  function initParallaxOrbs() {
    var orbs = document.querySelectorAll('.parallax-orb');
    if (!orbs.length) return;

    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    var orbData = [];

    function cacheRects() {
      orbData = [];
      orbs.forEach(function (orb) {
        var section = orb.closest('section') || document.body;
        var sectionRect = section.getBoundingClientRect();
        var scrollOffset = window.scrollY + sectionRect.top;
        orbData.push({
          el: orb,
          speed: parseFloat(orb.getAttribute('data-speed')) || 0.04,
          baseY: scrollOffset + (orb.offsetTop || 0),
          baseX: orb.offsetLeft || 0
        });
      });
    }

    cacheRects();

    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          var scrollY = window.scrollY;
          orbData.forEach(function (item) {
            var offset = (scrollY - item.baseY) * item.speed;
            item.el.style.transform = 'translateY(' + offset + 'px) translateX(' + (offset * 0.2) + 'px)';
          });
          ticking = false;
        });
        ticking = true;
      }
    });

    window.addEventListener('resize', cacheRects);
  }

  initParallaxOrbs();

  /* ============================================
     Magnetic Button Effect
     ============================================ */
  function initMagneticButtons() {
    var btns = document.querySelectorAll('.btn-primary, .btn-outline, .btn-nav');
    if (!btns.length) return;

    btns.forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var rect = btn.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = 'translate(' + (x * 0.15) + 'px, ' + (y * 0.15) + 'px)';
      });

      btn.addEventListener('mouseleave', function () {
        btn.style.transform = '';
      });
    });
  }

  initMagneticButtons();

  /* ============================================
     Mouse-Tracking Ambient Glow (Hero)
     ============================================ */
  function initMouseGlow() {
    var glow = document.getElementById('mouseGlow');
    if (!glow) return;

    var hero = document.getElementById('hero');
    var isInside = false;

    hero.addEventListener('mouseenter', function () { isInside = true; });
    hero.addEventListener('mouseleave', function () { isInside = false; });

    hero.addEventListener('mousemove', function (e) {
      if (!isInside) return;
      var rect = hero.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      glow.style.transform = 'translate(' + (x - 250) + 'px, ' + (y - 250) + 'px)';
    });
  }

  initMouseGlow();

})();
