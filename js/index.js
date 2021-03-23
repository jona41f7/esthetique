gsap.registerPlugin(ScrollTrigger);
const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  const divs = section.querySelectorAll("div");

  gsap.from(divs, {
    opacity: 0,
    scale: 0.3,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top bottom",
      end: "center center",
      //   markers: true,
      scrub: true,
    },
  });
});

gsap.from(".left-1", {
  x: -300,
  duration: 1,
  opacity: 0.2,
  scrollTrigger: {
    trigger: ".left-1",
    start: "top bottom",
    end: "center center",
    scrub: true,
  },
});

gsap.from(".right-1", {
  x: 300,
  duration: 1,
  opacity: 0.2,
  scrollTrigger: {
    trigger: ".right-1",
    start: "top bottom",
    end: "center center",
    scrub: true,
  },
});
