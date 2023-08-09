function watchAnimationsOnScroll() {
    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll_shown");
        }
      });
    });
  
    let hiddenElements = document.querySelectorAll(".scroll_hidden");
    hiddenElements.forEach(el => observer.observe(el));
}

export { watchAnimationsOnScroll };