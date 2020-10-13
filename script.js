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
  document.querySelector("#symbol_gul").addEventListener("click", klikGul);
  document.querySelector("#symbol_lilla").addEventListener("click", klikLilla);
  document.querySelector("#symbol_rod").addEventListener("click", klikRod);
  document.querySelector("#symbol_orange").addEventListener("click", klikOrange);
}

function klikGron() {
  console.log("klik gron");
  var gron = document.getElementById("symbol_gron");
  gron.classList.toggle("hide");
  gron.classList.toggle("gronfill");

}

function klikGul() {
  var gul = document.getElementById("symbol_gul");
  gul.classList.toggle("hide");
  gul.classList.toggle("gulfill");
}

function klikLilla() {
  var lilla = document.getElementById("symbol_lilla");
  lilla.classList.toggle("hide");
  lilla.classList.toggle("lillafill");
}

function klikRod() {
  var rod = document.getElementById("symbol_rod");
  rod.classList.toggle("hide");
  rod.classList.toggle("rodfill");
}

function klikOrange() {
  var orange = document.getElementById("symbol_orange");
  orange.classList.toggle("hide");
  orange.classList.toggle("orangefill");
}
