import { useEffect, useState } from 'react'
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
    { name: "Головна", isActive: true },
    { name: "Історія", isActive: false },
    { name: "Якість", isActive: false },
    { name: "Склад", isActive: false },
    { name: "Замовити", isActive: false },
  ]);
  useEffect(() => {
    detectNavbarScroll()
  }, []);

  function updateNavigation (name) {
    const nextNavigation = navigation.map((item) => {
      if (item.name == name) {
        return {
          ...item,
          isActive: true
        }
      } 
      return {
        ...item,
        isActive: false
      }    
    })
    setNavigation(nextNavigation)
  }

  const navigationList = navigation.map((item) => {
    return (
      <button 
        key={item.name}
        className={"nav_item " + (item.isActive ? "active" : "")}
        onClick={() => updateNavigation(item.name)}
      >
        {item.name}
      </button>
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
      <header id="main">
        <div id="bottle_wrapper">
          <img src={bottle} id="bottle_top"/>
        </div>

        <div id="main_header">Анаквас</div>
        <div id="main_header_caption">
          Інновативний напій натурального бродіння зі смаком ананасу
        </div>
        <div className="order_button">
          <div className="order_text">Замовити</div>
          <div className="order_arrow">
            <img src={arrowdown}/>
          </div>
        </div>
      </header>
      <section id="story">
        <div className="header">
          Історія
          <img src={spiral} id="spiral"/>
        </div>
        <div id="story_header_caption">
          Одного разу я випадково знайшов статтю про те, як можна навіть зі шкірок Ананасу зробити мега-корисний квасовий напій у домашніх умовах. Озброївшись гострим ножем, чистими пляшками, ананасом та ентузіазмом я взявся до роботи. І вже за 3 дні вийшов він, витвір мистецтва бродіння: Анаквас.
        </div>
      </section>
      <section id="quality">
        <img src={bottle} id="bottle_middle"/>
        <img src={spiralcenter} id="spiral_center"/>

        <div className="card" id="card1">
          <img src={bubbles}/>
          <div className="title">Справжні бульбашки</div>
          <div className="text">Ніякого штучкого вуглекислого газу, лише природній ефект.</div>
        </div>
        <div className="card" id="card2">
          <img src={schield}/>
          <div className="title">Непастиризований</div>
          <div className="text">Без жодної термообробки, щоб зберегти усі найкорисніші мікроорганізми.</div>
        </div>
        <div className="card" id="card3">
          <img src={temperature}/>
          <div className="title">Пробіотичні властивостi</div>
          <div className="text">Містить пробіотики, такі як Lactobacillus та інші корисні бактерії, які сприяють здоров'ю шлунково-кишкового тракту</div>
        </div>
        <div className="card" id="card4">
          <img src={plant}/>
          <div className="title">Натуральні ананаси</div>
          <div className="text">Лише елітний сорт південноамериканських ананасів.</div>
        </div>
        <div className="card" id="card5">
          <img src={bubbles}/>
          <div className="title">Справжні бульбашки</div>
          <div className="text">Ніякого штучкого вуглекислого газу, лише природній ефект.</div>
        </div>
      </section>
      <section id="order">
        <div className="content">
          <div className="header">Замовлення</div>
          <form action="" id="order_form">
            <input type="text" placeholder="Ім’я та прізвище" className="order_input"/>
            <input type="text" placeholder="Емейл або номер телефону" className="order_input"/>
            <input type="text" placeholder="Адреса (країна, місто, PLZ, вулиця й дім)" className="order_input"/>
            <input type="number" placeholder="Кількість ящиків" className="order_input"/>
          </form>
          <div className="order_button">
            <div className="order_text">Замовити</div>
            <div className="order_arrow">
              <img src={arrowdown}/>
            </div>
          </div>

          <img src={bottle} id="bottle_bottom"/>
        </div>

        <img src={spiralbottom} id="spiral_bottom"/>
      </section>
      <footer id="footer">
        ©Wolars.it, 2023 
      </footer>
    </>
  );
}
export default App;

function detectNavbarScroll () {
  let navbar = document.getElementById("nav");
  let spiralTop = document.getElementById("spiral_top");
  window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > 25) {
      navbar.classList.add('scroll');
      spiralTop.classList.add('hidden');
    } else {
      navbar.classList.remove('scroll');
      spiralTop.classList.remove('hidden');
    }
  })
}