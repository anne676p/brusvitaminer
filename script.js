window.addEventListener("load", start);

function start() {
  gsap.registerPlugin(ScrollTrigger);
  const root = document.documentElement;

  const sections = [...document.querySelectorAll("section")];

  let options = {
    rootMargin: "0px 0px",
    threshold: .5
  };

  const callback = (entries, observer) => {
    entries.forEach(entry => {
      const {
        target
      } = entry;

      if (entry.intersectionRatio >= 0.5) {
        root.style.setProperty('--hue', target.dataset.hue);
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  sections.forEach((section, index) => {
    observer.observe(section)
  })

  sections.forEach((section) => {
    const divs = section.querySelectorAll("div:not([role='tablist'])");

    gsap.from(divs, {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "center center",
        markers: true,
        scrub: true,
      },
    });
  });

  const buttons = document.querySelectorAll('[data-toggle="collapse"]');

  buttons.forEach(button => {
    button.addEventListener('click', _ => {
      ScrollTrigger.refresh(true);
    })
  });

  document.querySelector("#symbol_gron").addEventListener("click", klikGron);

}

function klikGron() {
  console.log("klikgron");

  document.getElementById("symbol_gron").classList.remove("hide");
  document.getElementById("symbol_gron").classList.add("gronfill");
}
