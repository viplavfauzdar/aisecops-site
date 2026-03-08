const scrollTopBtn = document.getElementById("scroll-top-btn");

if (scrollTopBtn) {
  const toggleScrollTopBtn = () => {
    if (window.scrollY > 320) {
      scrollTopBtn.classList.add("is-visible");
    } else {
      scrollTopBtn.classList.remove("is-visible");
    }
  };

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", toggleScrollTopBtn, { passive: true });
  toggleScrollTopBtn();
}
