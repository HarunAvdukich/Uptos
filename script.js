document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".clanak, .o_nama-text, .projekti-slike");

  targets.forEach((el) => el.classList.add("reveal-item"));

  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.12,
    }
  );

  targets.forEach((el) => observer.observe(el));
});
