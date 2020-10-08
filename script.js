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
