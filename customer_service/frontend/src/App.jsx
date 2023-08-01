import { useEffect, useState } from "react"
import spiraltop from "./svg/spiraltop.svg";
import spiralright from "./svg/spiralright.svg";
import spiral from "./svg/spiral.svg";
import spiralbottom from "./svg/spiralbottom.svg";
import spiralcenter from "./svg/spiralcenter.svg";
import arrowdown from "./svg/arrowdown.svg";
import bottle from "./img/bottle.png"
import schield from "./svg/schield.svg";
import temperature from "./svg/temperature.svg";
import plant from "./svg/plant.svg";
import bubbles from "./svg/bubbles.svg";

function App() {
  const [navigation, setNavigation] = useState([
    { name: "Головна", isActive: true, id: "main" },
    { name: "Історія", isActive: false, id: "story" },
    { name: "Якість", isActive: false, id: "quality" },
    // { name: "Склад", isActive: false, id: "contents" },
    { name: "Замовити", isActive: false, id: "order" },
  ]);

  useEffect(() => {
    watchNavbarScroll()
    watchSectionsScroll()
    watchAnimationsOnScroll()
  }, []);

  const navigationList = navigation.map((item) => {
    return (
      <a
        key={item.name}
        className={"nav_item " + (item.isActive ? "active" : "")}
        href={"#" + item.id}
      >
        {item.name}
      </a>
    )
  })

  return (
    <>
      <div id="language_switch">
        <button className="switch_half left_half">UK</button>
        <button className="switch_half right_half">UA</button>
      </div>
      <img src={spiraltop} id="spiral_top"/>
      <img src={spiralright} id="spiral_right"/>

      <div id="nav_top_cover"></div>
      <nav id="nav">
        {navigationList}
      </nav>
      <section id="main">
        <div id="bottle_wrapper">
          <img src={bottle} id="bottle_top"/>
        </div>

        <div id="main_header">Анаквас</div>
        <div id="main_header_caption">
          Інновативний напій натурального бродіння зі смаком ананасу
        </div>
        <a className="order_button" href="#order">
          <div className="order_text">Замовити</div>
          <div className="order_arrow">
            <img src={arrowdown}/>
          </div>
        </a>
      </section>
      <section id="story">
        <div className="header scroll_hidden from_left1">
          Історія
          <img src={spiral} id="spiral" className="scroll_hidden rotate"/>
        </div>
        <div id="story_header_caption" className="scroll_hidden from_left2">
          Одного разу я випадково знайшов статтю про те, як можна навіть зі шкірок Ананасу зробити мега-корисний квасовий напій у домашніх умовах. Озброївшись гострим ножем, чистими пляшками, ананасом та ентузіазмом я взявся до роботи. І вже через три дні вийшов він, витвір мистецтва бродіння — Анаквас.
        </div>
      </section>
      <section id="quality">
        <img src={bottle} id="bottle_middle" className="scroll_hidden"/>
        <img src={spiralcenter} id="spiral_center" className="scroll_hidden rotate"/>

        <div>
          <div className="card scroll_hidden">
            <img src={bubbles}/>
            <div className="title">Справжні бульбашки</div>
            <div className="text">Ніякого штучкого вуглекислого газу, лише природній ефект.</div>
          </div>
          <div className="card scroll_hidden">
            <img src={schield}/>
            <div className="title">Непастиризований</div>
            <div className="text">Без жодної термообробки, щоб зберегти усі найкорисніші мікроорганізми.</div>
          </div>
          <div className="card scroll_hidden">
            <img src={temperature}/>
            <div className="title">Пробіотичні властивостi</div>
            <div className="text">Містить пробіотики, такі як Lactobacillus та інші корисні бактерії, які сприяють здоров'ю шлунково-кишкового тракту</div>
          </div>
          <div className="card scroll_hidden">
            <img src={plant}/>
            <div className="title">Натуральні ананаси</div>
            <div className="text">Лише елітний сорт південноамериканських ананасів.</div>
          </div>
          {/* <div className="card scroll_hidden">
            <img src={bubbles}/>
            <div className="title">Справжні бульбашки</div>
            <div className="text">Ніякого штучкого вуглекислого газу, лише природній ефект.</div>
          </div> */}
        </div>
      </section>
      <section id="order">
        <div className="content">
          <div className="header scroll_hidden from_left1">Замовлення</div>
          <form action="" id="order_form">
            <input className="order_input scroll_hidden from_left2" name="full_name" type="text" placeholder="Ім’я та прізвище" required maxLength="255"/>
            <input className="order_input scroll_hidden from_left2" name="email" type="email" placeholder="Електронна пошта" required maxLength="320" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
            <input className="order_input scroll_hidden from_left2" name="phone_number" type="text" placeholder="Телефон" required minLength="5" maxLength="15"/>
            <input className="order_input scroll_hidden from_left2" name="address" type="text" placeholder="Адреса (країна, місто, вулиця, дім, ZIP-код)" required maxLength="425"/>
            <input className="order_input scroll_hidden from_left2" name="box_count" type="number" placeholder="Кількість ящиків" min="1" max="4294967295" required/>
            <input className="order_input scroll_hidden from_left2" name="comment" type="text" placeholder="Коментар" maxLength="255"/>
            <button className="order_button scroll_hidden from_left2">
              <div className="order_text">Замовити</div>
              <div className="order_arrow">
                <img src={arrowdown}/>
              </div>
            </button>
          </form>
          <div id="bottle_bottom_wrapper">
            <img src={bottle} id="bottle_bottom" className="scroll_hidden"/>
          </div>
        </div>

        <img src={spiralbottom} id="spiral_bottom" className="scroll_hidden from_left3"/>
      </section>
      <footer id="footer">
        ©Wolars.it, 2023 
      </footer>
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