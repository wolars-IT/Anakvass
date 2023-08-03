import { useEffect, useState } from "react"

import spiraltop from "./assets/svg/spiraltop.svg";
import spiralright from "./assets/svg/spiralright.svg";
import spiral from "./assets/svg/spiral.svg";
import spiralbottom from "./assets/svg/spiralbottom.svg";
import spiralcenter from "./assets/svg/spiralcenter.svg";
import arrowdown from "./assets/svg/arrowdown.svg";
import schield from "./assets/svg/schield.svg";
import temperature from "./assets/svg/temperature.svg";
import plant from "./assets/svg/plant.svg";
import bubbles from "./assets/svg/bubbles.svg";
import bottle from "./assets/img/bottle.png"

import classNames from 'classnames';
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  
  const navigation = [
    { name: "", id: "main" },
    { name: "", id: "story" },
    { name: "", id: "quality" },
    // { name: "", id: "contents" },
    { name: "", id: "order" },
  ].map(item => {
    return {
      ...item,
      name: t("nav." + item.id)
    }
  });
  const [lngs, setLngs] = useState([
    {code: "uk", isActive: true},
    {code: "en", isActive: false}
  ])
  let leftLngButtonClassNames = classNames("switch_half", "left_half", {
    active: lngs[0].isActive,
  });
  let rightLngButtonClassNames = classNames("switch_half", "right_half", {
    active: lngs[1].isActive,
  });

  useEffect(() => {
    watchNavbarScroll()
    watchSectionsScroll()
    watchAnimationsOnScroll()
  }, []);

  function setLng(code) {
    const nextLngs = lngs.map((lng) => {
      if (lng.code == code) {
        return {
          ...lng,
          isActive: true
        }
      }
      return {
        ...lng,
        isActive: false
      }
    })

    i18n.changeLanguage(code);
    setLngs(nextLngs)
  }

  const navigationList = navigation.map((item) => {
    return (
      <a
        key={item.id}
        className="nav_item"
        href={"#" + item.id}
      >
        {item.name}
      </a>
    )
  })

  // {t("")}
  return (
    <>
      <div id="language_switch">
        <button className={leftLngButtonClassNames} onClick={() => setLng("uk")}>UK</button>
        <button className={rightLngButtonClassNames} onClick={() => setLng("en")}>EN</button>
      </div>
      <img src={spiraltop} id="spiral_top" />
      <img src={spiralright} id="spiral_right" />
      <div id="nav_top_cover"></div>
      <nav id="nav">{navigationList}</nav>
      <section id="main">
        <div id="bottle_wrapper">
          <img src={bottle} id="bottle_top" />
        </div>

        <div id="main_header">{t("main.header")}</div>
        <div id="main_header_caption">{t("main.headerCaption")}</div>
        <a className="order_button" href="#order">
          <div className="order_text">{t("orderButton")}</div>
          <div className="order_arrow">
            <img src={arrowdown} />
          </div>
        </a>
      </section>
      <section id="story">
        <div className="header scroll_hidden from_left1">
          {t("story.header")}
          <img src={spiral} id="spiral" className="scroll_hidden rotate" />
        </div>
        <div id="story_header_caption" className="scroll_hidden from_left2">
          {t("story.headerCaption")}
        </div>
      </section>
      <section id="quality">
        <img src={bottle} id="bottle_middle" className="scroll_hidden" />
        <img
          src={spiralcenter}
          id="spiral_center"
          className="scroll_hidden rotate"
        />

        <div id="cards">
          <div className="card scroll_hidden">
            <img src={bubbles} />
            <div className="title">{t("quality.card1")}</div>
            <div className="text">{t("quality.cardDesc1")}</div>
          </div>
          <div className="card scroll_hidden">
            <img src={schield} />
            <div className="title">{t("quality.card2")}</div>
            <div className="text">{t("quality.cardDesc2")}</div>
          </div>
          <div className="card scroll_hidden">
            <img src={temperature} />
            <div className="title">{t("quality.card3")}</div>
            <div className="text">{t("quality.cardDesc3")}</div>
          </div>
          <div className="card scroll_hidden">
            <img src={plant} />
            <div className="title">{t("quality.card4")}</div>
            <div className="text">{t("quality.cardDesc4")}</div>
          </div>
        </div>
      </section>
      <section id="order">
        <div className="content">
          <div className="header scroll_hidden from_left1">
            {t("order.header")}
          </div>
          <form action="" id="order_form">
            <input
              className="order_input scroll_hidden from_left2"
              name="full_name"
              type="text"
              placeholder={t("order.formPlaceholder.fullName")}
              required
              maxLength="255"
            />
            <input
              className="order_input scroll_hidden from_left2"
              name="email"
              type="email"
              placeholder={t("order.formPlaceholder.email")}
              required
              maxLength="320"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
            <input
              className="order_input scroll_hidden from_left2"
              name="phone_number"
              type="text"
              placeholder={t("order.formPlaceholder.phoneNumber")}
              required
              minLength="5"
              maxLength="15"
            />
            <input
              className="order_input scroll_hidden from_left2"
              name="address"
              type="text"
              placeholder={t("order.formPlaceholder.address")}
              required
              maxLength="425"
            />
            <input
              className="order_input scroll_hidden from_left2"
              name="box_count"
              type="number"
              placeholder={t("order.formPlaceholder.boxCount")}
              min="1"
              max="4294967295"
              required
            />
            <input
              className="order_input scroll_hidden from_left2"
              name="comment"
              type="text"
              placeholder={t("order.formPlaceholder.comment")}
              maxLength="255"
            />
            <button className="order_button scroll_hidden from_left2">
              <div className="order_text">{t("orderButton")}</div>
              <div className="order_arrow">
                <img src={arrowdown} />
              </div>
            </button>
          </form>
        </div>

        <div id="bottle_bottom_wrapper">
          <img src={bottle} id="bottle_bottom" className="scroll_hidden" />
        </div>
        <img
          src={spiralbottom}
          id="spiral_bottom"
          className="scroll_hidden from_left3"
        />
      </section>
      <footer id="footer">©Wolars.it, 2023</footer>
    </>
  );
}
export default App;

function watchSectionsScroll() {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("nav a");
  window.addEventListener("scroll", () => {
    sections.forEach(section => {
      let top = window.scrollY;
      let offset = section.offsetTop - 150;
      let height = section.offsetHeight;
      let id = section.getAttribute("id");
      if (top >= offset && offset + height) {
        navLinks.forEach(link => {
          link.classList.remove("active");
        });
        document
          .querySelector("nav a[href*=" + id + "]")
          .classList.add("active");
      }
    });
  });
}
function watchNavbarScroll() {
  let navbar = document.getElementById("nav");
  let spiralTop = document.getElementById("spiral_top");
  window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > 25) {
      navbar.classList.add("scroll");
      spiralTop.classList.add("hidden");
    } else {
      navbar.classList.remove("scroll");
      spiralTop.classList.remove("hidden");
    }
  });
}
function watchAnimationsOnScroll() {
  let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll_shown");
      } 
      // else {
      //   entry.target.classList.remove("scroll_shown");
      // }
    });
  });

  let hiddenElements = document.querySelectorAll(".scroll_hidden");
  hiddenElements.forEach(el => observer.observe(el));
}