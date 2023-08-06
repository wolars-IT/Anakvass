function watchNavbarScroll() {
  let header = document.querySelector(".header");
  let sticky = header.offsetTop;

  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= sticky) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });
}

export { watchNavbarScroll };