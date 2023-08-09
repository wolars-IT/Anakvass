function watchSectionsScroll() {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("nav a");
  checkSectionsScroll(sections, navLinks);

  window.addEventListener("scroll", () => {
    checkSectionsScroll(sections, navLinks);
  });
}
function checkSectionsScroll (sections, navLinks) {
  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");
    if (top >= offset && offset + height) {
      navLinks.forEach(link => {
        link.classList.remove("nav__item_active");
      });
      
      document
        .querySelector("nav a[href*=" + id + "]")
        .classList.add("nav__item_active");
    }
  });
}

export { watchSectionsScroll };