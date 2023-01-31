const boxes = document.querySelectorAll(".box");

const callback = (entries) => {
  //   console.log(entries);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target.id, "is intarsecting");
    }
  });
};

const options = {
  // root:
  // rootMargin: "200px", // igual que em css
  threshold: 0.5, // Parte que tiene que verse
};

const observer = new IntersectionObserver(callback, options);
boxes.forEach((element) => observer.observe(element));
