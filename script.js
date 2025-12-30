/* ========= AOS init ========= */
AOS.init({
  duration: 900,
  once: true
});

/* ========= Tahun footer ========= */
document.getElementById("year").textContent = new Date().getFullYear();

/* ========= Skills animate (progress bar) ========= */
const skillProgressBars = document.querySelectorAll(".skill-progress");

const animateSkills = () => {
  skillProgressBars.forEach((bar) => {
    const pct = bar.getAttribute("data-progress");
    bar.style.width = `${pct}%`;
  });
};

const skillsSection = document.querySelector("#skills");
if (skillsSection) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          animateSkills();
          io.disconnect();
        }
      });
    },
    { threshold: 0.25 }
  );
  io.observe(skillsSection);
}

/* ========= Certificates Modal (gallery) ========= */
const modal = document.getElementById("certModal");
const modalImg = document.getElementById("modalImg");
const modalCaption = document.getElementById("modalCaption");
const closeModalBtn = document.getElementById("closeModal");
const prevBtn = document.getElementById("prevCert");
const nextBtn = document.getElementById("nextCert");

const certCards = Array.from(document.querySelectorAll(".certificate-item"));

/**
 * Ambil data langsung dari card (lebih mudah: tinggal ganti di HTML)
 */
function getCertDataFromCard(card) {
  const img = card.querySelector("img.certificate-thumbnail");
  const title = card.querySelector(".certificate-info h3")?.textContent?.trim() || "Certificate";
  const issuer = card.querySelector(".certificate-issuer")?.textContent?.trim() || "";
  const date = card.querySelector(".certificate-date")?.textContent?.trim() || "";
  return {
    src: img?.getAttribute("src") || "",
    alt: img?.getAttribute("alt") || "Certificate",
    caption: [title, issuer, date].filter(Boolean).join(" • ")
  };
}

let currentIndex = 0;

function openModal(index) {
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

/* Klik card -> buka modal */
certCards.forEach((card) => {
  card.addEventListener("click", () => {
    const idx = Number(card.getAttribute("data-index") || "0");
    openModal(idx);
  });

  // akses keyboard (Enter/Space)
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const idx = Number(card.getAttribute("data-index") || "0");
      openModal(idx);
    }
  });
});

/* Close & nav */
closeModalBtn.addEventListener("click", hideModal);
prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);

/* Klik area gelap -> close (tapi bukan klik konten gambar) */
modal.addEventListener("click", (e) => {
  if (e.target === modal) hideModal();
});

/* Keyboard shortcuts */
document.addEventListener("keydown", (e) => {
  const isOpen = modal.style.display === "block";
  if (!isOpen) return;

  if (e.key === "Escape") hideModal();
  if (e.key === "ArrowLeft") showPrev();
  if (e.key === "ArrowRight") showNext();
});

/* ========= Navbar shrink on scroll (biar terasa modern) ========= */
const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  if (!nav) return;
  if (window.scrollY > 10) {
    nav.style.padding = "14px 50px";
  } else {
    nav.style.padding = "20px 50px";
  }
});
