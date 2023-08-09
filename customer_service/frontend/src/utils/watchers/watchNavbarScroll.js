function watchNavbarScroll() {
  let header = document.querySelector(".header");
  let sticky = header.offsetTop;

  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= sticky) {
      header.classList.add("header_fixed");
    } else {
      header.classList.remove("header_fixed");
    }
  });
}

export { watchNavbarScroll };