/* ========= AOS init ========= */
AOS.init({
  duration: 900,
  once: true,
});

/* ========= THEME TOGGLE ========= */
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.querySelector(".theme-icon");

function setTheme(mode) {
  if (mode === "light") {
    document.documentElement.classList.add("light");
    themeIcon.textContent = "🌞";
  } else {
    document.documentElement.classList.remove("light");
    themeIcon.textContent = "🌙";
  }
  localStorage.setItem("theme", mode);
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = localStorage.getItem("theme") === "light" ? "dark" : "light";
    setTheme(current);
  });
}

setTheme(localStorage.getItem("theme") || "dark");

/* ========= LANGUAGE TOGGLE ========= */
const langToggle = document.getElementById("langToggle");

const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.org": "Organizations",
    "nav.certs": "Certificates",
    "nav.contact": "Contact",

    "hero.badge": "Welcome to my creative space",
    "hero.greeting": "Hi, I'm",
    "hero.lead":
      "Passionate about creating innovative web solutions, designing intuitive interfaces, and building smart IoT systems. Let's build something amazing together! 🚀",
    "hero.ctaPrimary": "Let's Connect",
    "hero.ctaSecondary": "View Projects",
    "hero.scroll": "Scroll to explore",

    "about.title": "About Me",
    "about.intro":
      "I'm a Computer Technology student at Del Institute of Technology with a passion for turning ideas into reality through code and creativity.",
    "about.body":
      "My journey in tech started with curiosity about how things work, and now I'm diving deep into web development, IoT systems, and UI/UX design. I enjoy building secure, efficient, and user-friendly applications.",

    "edu.title": "Education",
    "edu.degree": "Diploma in Computer Technology",
    "edu.school":
      "Del Institute of Technology — Sitoluama, Laguboti, Toba",
    "edu.period": "Aug 2023 — Sep 2026 (Expected)",
    "edu.gpa": "GPA: 2.98 / 4.00",

    "org.title": "Experience & Organizations",
    "org.bem.role": "Arts & Culture Department Member",
    "org.bem.name":
      "Student Executive Board – Del Institute of Technology",
    "org.bem.meta":
      "Sitoluama, Laguboti, Toba, North Sumatra · Oct 2024 – Present",
    "org.bem.point1":
      "Organized and coordinated campus art and cultural events such as performances, exhibitions, and creative competitions.",
    "org.bem.point2":
      "Promoted cultural appreciation and artistic expression while encouraging collaboration and creativity among students.",

    "org.choir.role": "Choir Member",
    "org.choir.name":
      "Matheo Choir – Del Institute of Technology",
    "org.choir.meta": "Nov 2023 – Present",
    "org.choir.point1":
      "Actively participated in campus and external performances representing the institution.",
    "org.choir.point2":
      "Contributed to vocal training, musical arrangements, and event coordination for concerts and ceremonial performances.",

    "org.fest.role": "Event Committee Member",
    "org.fest.name":
      "IT Del Fest – Del Institute of Technology",
    "org.fest.meta":
      "Sitoluama, Laguboti, Toba, North Sumatra · Aug 2025 – Present",
    "org.fest.point1":
      "Collaborated with cross-functional teams to design event concepts and manage execution.",
    "org.fest.point2":
      "Supported logistics, participant management, and promotional activities for public community events.",

    "org.election.role": "Vote Counting Committee",
    "org.election.name":
      "Computer Technology Student Association – IT Del",
    "org.election.meta": "Election of Chairman & Vice Chairman",
    "org.election.point1":
      "Responsible for validating and counting votes to ensure a fair and transparent election process.",

    "contact.title": "Let's Connect",
    "contact.subtitle": "Or contact me directly via:",
    "footer.text": "© Naomi Aprilia. All rights reserved.",
  },
  id: {
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.skills": "Keahlian",
    "nav.projects": "Proyek",
    "nav.org": "Organisasi",
    "nav.certs": "Sertifikat",
    "nav.contact": "Kontak",

    "hero.badge": "Selamat datang di ruang kreatif saya",
    "hero.greeting": "Halo, saya",
    "hero.lead":
      "Bersemangat mengembangkan solusi web yang inovatif, merancang antarmuka yang intuitif, dan membangun sistem IoT yang cerdas. Ayo berkarya bersama! 🚀",
    "hero.ctaPrimary": "Hubungi Saya",
    "hero.ctaSecondary": "Lihat Proyek",
    "hero.scroll": "Scroll untuk menjelajah",

    "about.title": "Tentang Saya",
    "about.intro":
      "Saya seorang mahasiswa Teknologi Komputer di Institut Teknologi Del dengan ketertarikan untuk mengubah ide menjadi solusi nyata melalui kode dan kreativitas.",
    "about.body":
      "Perjalanan saya di dunia teknologi dimulai dari rasa ingin tahu tentang cara sesuatu bekerja, dan sekarang saya mendalami pengembangan web, sistem IoT, dan desain UI/UX. Saya menikmati tantangan membangun aplikasi yang aman, efisien, dan mudah digunakan.",

    "edu.title": "Pendidikan",
    "edu.degree": "Diploma Teknologi Komputer",
    "edu.school":
      "Institut Teknologi Del — Sitoluama, Laguboti, Toba",
    "edu.period": "Agu 2023 — Sep 2026 (Perkiraan)",
    "edu.gpa": "IPK: 2,98 / 4,00",

    "org.title": "Pengalaman & Organisasi",
    "org.bem.role": "Anggota Departemen Seni & Budaya",
    "org.bem.name":
      "Badan Eksekutif Mahasiswa – Institut Teknologi Del",
    "org.bem.meta":
      "Sitoluama, Laguboti, Toba, Sumatera Utara · Okt 2024 – Sekarang",
    "org.bem.point1":
      "Mengorganisir dan mengoordinasikan berbagai acara seni dan budaya di tingkat kampus seperti pertunjukan, pameran, dan kompetisi kreatif.",
    "org.bem.point2":
      "Mendorong apresiasi budaya dan ekspresi seni sekaligus membangun kolaborasi dan kreativitas antar mahasiswa.",

    "org.choir.role": "Anggota Paduan Suara",
    "org.choir.name":
      "Matheo Choir – Institut Teknologi Del",
    "org.choir.meta": "Nov 2023 – Sekarang",
    "org.choir.point1":
      "Aktif tampil dalam kegiatan paduan suara di dalam dan luar kampus sebagai perwakilan institusi.",
    "org.choir.point2":
      "Berperan dalam latihan vokal, aransemen musik, dan dukungan koordinasi acara konser maupun upacara.",

    "org.fest.role": "Panitia Acara",
    "org.fest.name":
      "IT Del Fest – Institut Teknologi Del",
    "org.fest.meta":
      "Sitoluama, Laguboti, Toba, Sumatera Utara · Agu 2025 – Sekarang",
    "org.fest.point1":
      "Berkolaborasi dengan berbagai divisi untuk menyusun konsep acara dan mengawal pelaksanaannya.",
    "org.fest.point2":
      "Membantu koordinasi logistik, pengelolaan peserta, serta promosi agar acara berjalan lancar dan menarik bagi masyarakat.",

    "org.election.role": "Panitia Penghitungan Suara",
    "org.election.name":
      "Himpunan Mahasiswa Teknologi Komputer – IT Del",
    "org.election.meta": "Pemilihan Ketua & Wakil Ketua",
    "org.election.point1":
      "Bertanggung jawab dalam proses validasi dan penghitungan suara untuk memastikan pemilihan yang adil dan transparan.",

    "contact.title": "Mari Terhubung",
    "contact.subtitle": "Atau hubungi saya langsung melalui:",
    "footer.text": "© Naomi Aprilia. Hak cipta dilindungi.",
  },
};

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  localStorage.setItem("lang", lang);

  if (langToggle) {
    langToggle.textContent = lang === "en" ? "EN" : "ID";
  }
}

if (langToggle) {
  langToggle.addEventListener("click", () => {
    const current = localStorage.getItem("lang") || "en";
    const next = current === "en" ? "id" : "en";
    setLanguage(next);
  });
}

// init language
setLanguage(localStorage.getItem("lang") || "en");

/* ========= YEAR IN FOOTER ========= */
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

/* ========= SKILLS PROGRESS ANIMATION ========= */
const skillProgressBars = document.querySelectorAll(".skill-progress");
const skillsSection = document.querySelector("#skills");

const animateSkills = () => {
  skillProgressBars.forEach((bar) => {
    const pct = bar.getAttribute("data-progress");
    bar.style.width = `${pct}%`;
  });
};

if (skillsSection && skillProgressBars.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateSkills();
          io.disconnect();
        }
      });
    },
    { threshold: 0.25 }
  );

  io.observe(skillsSection);
}

/* ========= CERTIFICATES MODAL ========= */
const modal = document.getElementById("certModal");
const modalImg = document.getElementById("modalImg");
const modalCaption = document.getElementById("modalCaption");
const closeModalBtn = document.getElementById("closeModal");
const prevBtn = document.getElementById("prevCert");
const nextBtn = document.getElementById("nextCert");
const certCards = Array.from(
  document.querySelectorAll(".certificate-item")
);

function getCertDataFromCard(card) {
  const img = card.querySelector("img.certificate-thumbnail");
  const title =
    card.querySelector(".certificate-info h3")?.textContent?.trim() ||
    "Certificate";
  const issuer =
    card
      .querySelector(".certificate-issuer")
      ?.textContent?.trim() || "";
  const date =
    card
      .querySelector(".certificate-date")
      ?.textContent?.trim() || "";

  return {
    src: img?.getAttribute("src") || "",
    alt: img?.getAttribute("alt") || "Certificate",
    caption: [title, issuer, date].filter(Boolean).join(" • "),
  };
}

let currentIndex = 0;

function openModal(index) {
  if (!modal || !modalImg || !modalCaption) return;
  currentIndex = index;
  const data = getCertDataFromCard(certCards[currentIndex]);

  modalImg.src = data.src;
  modalImg.alt = data.alt;
  modalCaption.textContent = data.caption;

  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function hideModal() {
  if (!modal) return;
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function showPrev() {
  currentIndex = (currentIndex - 1 + certCards.length) % certCards.length;
  openModal(currentIndex);
}

function showNext() {
  currentIndex = (currentIndex + 1) % certCards.length;
  openModal(currentIndex);
}

certCards.forEach((card) => {
  card.addEventListener("click", () => {
    const idx = Number(card.getAttribute("data-index") || "0");
    openModal(idx);
  });

  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const idx = Number(card.getAttribute("data-index") || "0");
      openModal(idx);
    }
  });
});

if (closeModalBtn) {
  closeModalBtn.addEventListener("click", hideModal);
}
if (prevBtn) {
  prevBtn.addEventListener("click", showPrev);
}
if (nextBtn) {
  nextBtn.addEventListener("click", showNext);
}

if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) hideModal();
  });
}

document.addEventListener("keydown", (e) => {
  const isOpen = modal && modal.style.display === "block";
  if (!isOpen) return;

  if (e.key === "Escape") hideModal();
  if (e.key === "ArrowLeft") showPrev();
  if (e.key === "ArrowRight") showNext();
});

/* ========= CONTACT FORM (Formspree) ========= */
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // cegah reload halaman

    if (!formStatus) return;

    formStatus.textContent = "Sending...";
    formStatus.className = "form-status sending";

    const formData = new FormData(contactForm);

    try {
      const res = await fetch("https://formspree.io/f/xykzrnvy", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        formStatus.textContent = "Message sent successfully! ✅";
        formStatus.className = "form-status success";
        contactForm.reset();
      } else {
        formStatus.textContent =
          "Failed to send message. Please try again later.";
        formStatus.className = "form-status error";
      }
    } catch (err) {
      formStatus.textContent =
        "An error occurred. Please check your connection.";
      formStatus.className = "form-status error";
    }
  });
}

/* ========= PROJECT DOCUMENT VIEWER ========= */
const docModal = document.getElementById("docModal");
const closeDocModalBtn = document.getElementById("closeDocModal");
const docFrame = document.getElementById("docFrame");
const docModalTitle = document.getElementById("docModalTitle");
const docDownload = document.getElementById("docDownload");
const docLinks = document.querySelectorAll(".doc-link");

function openDocModal(url, title) {
  if (!docModal || !docFrame || !docModalTitle || !docDownload) return;

  docFrame.src = url;
  docModalTitle.textContent = title || "Document";
  docDownload.href = url;

  docModal.style.display = "block";
  docModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeDocModal() {
  if (!docModal || !docFrame) return;

  docModal.style.display = "none";
  docModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  docFrame.src = ""; // kosongkan supaya berhenti load
}

docLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const url = link.getAttribute("data-doc");
    const title = link.getAttribute("data-title") || link.textContent.trim();
    if (url) {
      openDocModal(url, title);
    }
  });
});

if (closeDocModalBtn) {
  closeDocModalBtn.addEventListener("click", closeDocModal);
}

if (docModal) {
  docModal.addEventListener("click", (e) => {
    if (e.target === docModal) {
      closeDocModal();
    }
  });
}

document.addEventListener("keydown", (e) => {
  const isOpen = docModal && docModal.style.display === "block";
  if (!isOpen) return;

  if (e.key === "Escape") {
    closeDocModal();
  }
});

/* ========= NAVBAR SHRINK ON SCROLL ========= */
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (!nav) return;
  if (window.scrollY > 10) {
    nav.style.padding = "14px 50px";
  } else {
    nav.style.padding = "20px 50px";
  }
});
