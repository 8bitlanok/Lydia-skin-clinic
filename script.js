// =============================================
//   LYDIA SKIN CLINIC — script.js
// =============================================


// ===== 1. HAMBURGER MENU (mobile) =====
// Fungsi: klik tombol 3 garis → menu muncul/hilang

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {

  // Toggle menu saat hamburger diklik
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
  });

  // Tutup menu saat salah satu link diklik
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.classList.remove('open');
    });
  });

}


// ===== 2. SMOOTH SCROLL =====
// Fungsi: saat klik link "#layanan" dll, scroll ke section dengan halus
// dan memperhitungkan tinggi navbar agar tidak tertutup

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      e.preventDefault();
      const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  });
});


// ===== 3. FADE-IN SAAT SCROLL =====
// Fungsi: card dan elemen muncul perlahan saat di-scroll ke bawah
// Ini bikin website terasa lebih premium dan modern

const fadeElements = document.querySelectorAll(
  '.service-card, .keunggulan-card, .package-card, .promo-item'
);

// IntersectionObserver = fitur browser bawaan untuk detect kapan elemen masuk layar
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1  // trigger saat 10% elemen sudah terlihat
});

// Semua elemen mulai transparan dan geser ke bawah
fadeElements.forEach((el, index) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  // transition delay berbeda tiap card agar tidak muncul bersamaan
  el.style.transition = `opacity 0.5s ease ${index * 0.06}s, transform 0.5s ease ${index * 0.06}s`;
  observer.observe(el);
});


// ===== 4. NAVBAR SHADOW SAAT SCROLL =====
// Fungsi: navbar dapat bayangan saat halaman di-scroll ke bawah

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.scrollY > 10) {
      navbar.style.boxShadow = '0 4px 20px rgba(212, 118, 154, 0.12)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  }
});