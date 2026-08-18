const LANGS = {
  en: 'English',
  ar: 'العربية',
  it: 'Italiano',
  zh: '中文',
  hi: 'हिन्दी'
};

const FLAGS = {
  en: 'assets/images/flags/en.svg',
  ar: 'assets/images/flags/ar.svg',
  it: 'assets/images/flags/it.svg',
  zh: 'assets/images/flags/zh.svg',
  hi: 'assets/images/flags/hi.svg'
};

const NAMES = {
  en: 'Sarah A. Zeidani',
  ar: 'سارة أ. زيداني',
  it: 'Sarah A. Zeidani',
  zh: '莎拉·A·宰达尼',
  hi: 'सारा ए. ज़ीदानी'
};

const T = {
  Home: { ar: 'الرئيسية', it: 'Home', zh: '首页', hi: 'होम' },
  About: { ar: 'نبذة عني', it: 'Chi sono', zh: '关于我', hi: 'मेरे बारे में' },
  Resume: { ar: 'السيرة الذاتية', it: 'Curriculum', zh: '简历', hi: 'रिज़्यूमे' },
  Portfolio: { ar: 'الخبرات', it: 'Esperienza', zh: '经历', hi: 'पेशेवर अनुभव' },
  Services: { ar: 'الخدمات', it: 'Servizi', zh: '服务', hi: 'सेवाएँ' },
  Contact: { ar: 'تواصل معي', it: 'Contatti', zh: '联系我', hi: 'संपर्क' },
  'Project Manager Assistant & Business Development Specialist': {
    ar: 'مساعدة مدير مشاريع واختصاصية تطوير أعمال',
    it: 'Assistente Project Manager e Specialista Business Development',
    zh: '项目经理助理与业务发展专员',
    hi: 'प्रोजेक्ट मैनेजर असिस्टेंट और बिज़नेस डेवलपमेंट स्पेशलिस्ट'
  },
  'Results-driven professional with a Bachelor’s degree in Business Administration and extensive experience in project management, business development, and telemarketing.': {
    ar: 'متخصصة عملية حاصلة على بكالوريوس إدارة الأعمال، وتمتلك خبرة واسعة في إدارة المشاريع وتطوير الأعمال والتسويق الهاتفي.',
    it: 'Professionista orientata ai risultati, con laurea in Business Administration ed esperienza in project management, business development e telemarketing.',
    zh: '以结果为导向的专业人士，拥有工商管理学士学位，并具备项目管理、业务发展和电话营销方面的丰富经验。',
    hi: 'परिणाम-उन्मुख पेशेवर, जिनके पास बिज़नेस एडमिनिस्ट्रेशन में स्नातक डिग्री और प्रोजेक्ट मैनेजमेंट, बिज़नेस डेवलपमेंट व टेलीमार्केटिंग का व्यापक अनुभव है।'
  },
  'View Experience': { ar: 'عرض الخبرات', it: 'Vedi esperienza', zh: '查看经历', hi: 'अनुभव देखें' },
  'Let’s Connect': { ar: 'لنتواصل', it: 'Contattiamoci', zh: '联系我们', hi: 'संपर्क करें' },
  'Get In Touch': { ar: 'تواصلي معي', it: 'Contattami', zh: '联系我', hi: 'संपर्क करें' },
  'Send Message': { ar: 'إرسال رسالة', it: 'Invia messaggio', zh: '发送消息', hi: 'संदेश भेजें' },
  'Ready to Build Your Next Opportunity?': {
    ar: 'هل أنتِ مستعدة لبناء فرصتك القادمة؟',
    it: 'Pronta a costruire la tua prossima opportunità?',
    zh: '准备好开启下一次职业机遇了吗？',
    hi: 'अगले अवसर के लिए तैयार हैं?'
  }
};

const TITLES = {
  'index.html': {
    en: 'Sarah A. Zeidani | Project Management & Business Development',
    ar: 'سارة أ. زيداني | إدارة المشاريع وتطوير الأعمال',
    it: 'Sarah A. Zeidani | Project Management & Business Development',
    zh: '莎拉·A·宰达尼 | 项目管理与业务发展',
    hi: 'सारा ए. ज़ीदानी | प्रोजेक्ट मैनेजमेंट और बिज़नेस डेवलपमेंट'
  },
  'about.html': {
    en: 'About | Sarah A. Zeidani',
    ar: 'نبذة عن سارة أ. زيداني',
    it: 'Chi sono | Sarah A. Zeidani',
    zh: '关于我 | 莎拉·A·宰达尼',
    hi: 'मेरे बारे में | सारा ए. ज़ीदानी'
  },
  'resume.html': {
    en: 'Resume | Sarah A. Zeidani',
    ar: 'السيرة الذاتية | سارة أ. زيداني',
    it: 'Curriculum | Sarah A. Zeidani',
    zh: '简历 | 莎拉·A·宰达尼',
    hi: 'रिज़्यूमे | सारा ए. ज़ीदानी'
  },
  'portfolio.html': {
    en: 'Experience | Sarah A. Zeidani',
    ar: 'الخبرات | سارة أ. زيداني',
    it: 'Esperienza | Sarah A. Zeidani',
    zh: '经历 | 莎拉·A·宰达尼',
    hi: 'पेशेवर अनुभव | सारा ए. ज़ीदानी'
  },
  'services.html': {
    en: 'Services | Sarah A. Zeidani',
    ar: 'الخدمات | سارة أ. زيداني',
    it: 'Servizi | Sarah A. Zeidani',
    zh: '服务 | 莎拉·A·宰达尼',
    hi: 'सेवाएँ | सारा ए. ज़ीदानी'
  },
  'contact.html': {
    en: 'Contact | Sarah A. Zeidani',
    ar: 'تواصل مع سارة أ. زيداني',
    it: 'Contatti | Sarah A. Zeidani',
    zh: '联系 | 莎拉·A·宰达尼',
    hi: 'संपर्क | सारा ए. ज़ीदानी'
  }
};

function getPageName() {
  return location.pathname.split('/').pop() || 'index.html';
}

function applyLanguage(lang) {
  if (!LANGS[lang]) lang = 'en';

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    el.textContent = lang === 'en' ? key : (T[key]?.[lang] || key);
  });

  document.querySelectorAll('[data-i18n-name]').forEach((el) => {
    el.textContent = NAMES[lang];
  });

  document.querySelectorAll('.language-option').forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === lang);
  });

  const currentFlag = document.querySelector('.language-current img');
  if (currentFlag) {
    currentFlag.src = FLAGS[lang];
    currentFlag.alt = LANGS[lang];
  }

  const title = TITLES[getPageName()]?.[lang];
  if (title) document.title = title;

  try {
    localStorage.setItem('sarah-language', lang);
  } catch (error) {
    // Storage may be unavailable in private/restricted browser contexts.
  }
}

function initLanguage() {
  const switcher = document.querySelector('.language-switcher');
  const current = document.querySelector('.language-current');
  const menu = document.querySelector('.language-menu');
  if (!switcher || !current || !menu) return;

  current.addEventListener('click', (event) => {
    event.stopPropagation();
    switcher.classList.toggle('open');
  });

  menu.addEventListener('click', (event) => {
    const option = event.target.closest('.language-option');
    if (!option) return;
    event.preventDefault();
    event.stopPropagation();
    applyLanguage(option.dataset.lang);
    switcher.classList.remove('open');
  });

  document.addEventListener('click', () => switcher.classList.remove('open'));

  let lang = 'en';
  try {
    lang = localStorage.getItem('sarah-language') || 'en';
  } catch (error) {
    lang = 'en';
  }

  applyLanguage(lang);
}

function initTheme() {
  const button = document.querySelector('[data-theme-toggle]');
  let mode = 'dark';

  try {
    mode = localStorage.getItem('sarah-theme') || 'dark';
  } catch (error) {
    mode = 'dark';
  }

  document.body.classList.toggle('theme-light', mode === 'light');

  if (button) {
    button.addEventListener('click', () => {
      const light = !document.body.classList.contains('theme-light');
      document.body.classList.toggle('theme-light', light);
      try {
        localStorage.setItem('sarah-theme', light ? 'light' : 'dark');
      } catch (error) {
        // Ignore restricted storage.
      }
    });
  }
}

function initMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', (event) => {
    event.stopPropagation();
    nav.classList.toggle('active');
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) nav.classList.remove('active');
  });

  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !toggle.contains(event.target)) {
      nav.classList.remove('active');
    }
  });
}

function initScroll() {
  const header = document.querySelector('.header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });
}

function initReveal() {
  const nodes = document.querySelectorAll('.reveal');
  if (!nodes.length) return;

  if (!('IntersectionObserver' in window)) {
    nodes.forEach((node) => node.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  nodes.forEach((node) => observer.observe(node));
}

function animateCounter(element) {
  if (element.dataset.counterStarted === 'true') return;
  element.dataset.counterStarted = 'true';

  const target = Number(element.dataset.target || 0);
  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion || target <= 0) {
    element.textContent = String(target);
    return;
  }

  const duration = 1250;
  const start = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = String(Math.round(eased * target));

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      element.textContent = String(target);
    }
  };

  requestAnimationFrame(tick);
}

function initCounters() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  if (!('IntersectionObserver' in window)) {
    counters.forEach(animateCounter);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.35 });

  counters.forEach((counter) => observer.observe(counter));

  // Guarantees visible counters still animate on browsers with unusual viewport/observer behavior.
  window.setTimeout(() => {
    counters.forEach((counter) => {
      if (counter.getBoundingClientRect().top < window.innerHeight && counter.getBoundingClientRect().bottom > 0) {
        animateCounter(counter);
      }
    });
  }, 350);
}

function initModals() {
  document.querySelectorAll('[data-modal-open]').forEach((button) => {
    button.addEventListener('click', () => {
      document.getElementById(button.dataset.modalOpen)?.classList.add('open');
    });
  });

  document.querySelectorAll('[data-modal-close]').forEach((button) => {
    button.addEventListener('click', () => button.closest('.modal')?.classList.remove('open'));
  });

  document.querySelectorAll('.modal').forEach((modal) => {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) modal.classList.remove('open');
    });
  });
}

function initProtection() {
  document.addEventListener('dragstart', (event) => {
    if (event.target.closest('img,svg')) event.preventDefault();
  });
  document.addEventListener('contextmenu', (event) => event.preventDefault());
}

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initTheme();
  initMenu();
  initScroll();
  initReveal();
  initCounters();
  initModals();
  initProtection();
});
