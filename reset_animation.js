document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a.internal-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // estetään normaali anchor-scroll

      const targetId = link.getAttribute("href").substring(1);
      const targetEl = document.getElementById(targetId);

      if (targetEl) {
        // Lasketaan scroll-sijainti siten, että elementti on keskellä
        const elementTop =
          targetEl.getBoundingClientRect().top + window.scrollY;
        const scrollTo =
          elementTop - window.innerHeight / 2 + targetEl.offsetHeight / 2;

        window.scrollTo({
          top: scrollTo,
          behavior: "smooth", // pehmeä liike
        });

        // Halutessasi voit myös triggeröidä animaation samalla
        const animatedElements = document.querySelectorAll(".animate-on-click");
        animatedElements.forEach((el) => {
          // Poistetaan luokka hetkeksi, jotta animaatio voidaan käynnistää uudelleen
          el.classList.remove("animate-on-click");
          void el.offsetWidth; // Trigger reflow
          el.classList.add("animate-on-click");
        });
      }
    });
  });
});
