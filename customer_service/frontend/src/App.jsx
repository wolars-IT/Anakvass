import spiraltop from "./svg/spiraltop.svg";
import spiralright from "./svg/spiralright.svg";
import spiral from "./svg/spiral.svg";
import spiralbottom from "./svg/spiralbottom.svg";
import arrowdown from "./svg/arrowdown.svg";
import bottle from "./img/bottle.png"

function App() {
  const navigation = [
    { name: "Головна", isActive: true },
    { name: "Історія", isActive: false },
    { name: "Якість", isActive: false },
    { name: "Склад", isActive: false },
    { name: "Замовити", isActive: false },
  ];
  const navigationList = navigation.map((item) => {
    return (
      <button className={"nav_item " + (item.isActive ? "active" : "")}>
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
        <div className="order_button">
          <div className="order_text">Замовити</div>
          <div className="order_arrow">
            <img src={arrowdown}/>
          </div>
        </div>
      </section>
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
        <div className="card">
          <div className="title">Справжні бульбашки</div>
          <div className="text">Ніякого штучкого вуглекислого газу, лише природній ефект.</div>
        </div>
      </section>
      <section id="order">
        <div className="header">Замовлення</div>
        <form action="" id="order_form">
          <input type="text" placeholder="Ім’я та прізвище" className="order_input"/>
          <input type="text" placeholder="Емейл або номер телефону" className="order_input"/>
          <input type="text" placeholder="Адреса (країна, місто, PLZ, вулиця й дім)" className="order_input"/>
          <input type="text" placeholder="Кількість ящиків" className="order_input"/>
        </form>
        <div className="order_button">
          <div className="order_text">Замовити</div>
          <div className="order_arrow">
            <img src={arrowdown}/>
          </div>
        </div>

        <img src={spiralbottom} id="spiral_bottom"/>
        <img src={bottle} id="bottle_bottom"/>
      </section>
    </>
  );
}

export default App;
