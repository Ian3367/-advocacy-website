// ================================
// MENÚ MÓVIL
// ================================
const navBtn = document.querySelector(".nav-toggle");
const nav = document.querySelector("#primary-nav");

if (navBtn && nav) {
  navBtn.addEventListener("click", () => {
    const expanded = navBtn.getAttribute("aria-expanded") === "true";
    navBtn.setAttribute("aria-expanded", !expanded);
    nav.setAttribute("aria-hidden", expanded);
  });
}

// ================================
// SCROLL SUAVE
// ================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ================================
// LEER MÁS / LEER MENOS
// ================================
document.addEventListener("click", function(e) {
  if (e.target.classList.contains("toggle-more")) {
    const card = e.target.closest("article");
    const extra = card.querySelector(".extra");

    if (extra.hasAttribute("hidden")) {
      extra.removeAttribute("hidden");
      e.target.textContent = "Leer menos";
    } else {
      extra.setAttribute("hidden", "");
      e.target.textContent = "Leer más";
    }
  }
});

// ================================
// BOTÓN VOLVER ARRIBA
// ================================
const topBtn = document.getElementById("backToTop");

if (topBtn) {

  window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 400 ? "block" : "none";
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top:0, behavior:"smooth" });
  });

}
