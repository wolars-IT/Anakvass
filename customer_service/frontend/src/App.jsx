import spiraltop from "./svg/spiraltop.svg";
import spiralright from "./svg/spiralright.svg";
import spiral from "./svg/spiral.svg";
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
      <div className={"nav_item " + (item.isActive ? "active" : "")}>
        {item.name}
      </div>
    )
  })

  return (
    <>
      <div id="language_switch">
        <div className="switch_half left_half">UK</div>
        <div className="switch_half right_half">UA</div>
      </div>
      <img src={spiraltop} id="spiral_top"/>
      <img src={spiralright} id="spiral_right"/>


      <nav id="nav">
        {navigationList}
      </nav>
      <div id="main">
        <div id="bottle_wrapper">
          <img src={bottle} id="bottle_top"/>
        </div>

        <div id="header">Анаквас</div>
        <div id="header_caption">
          Інновативний напій натурального бродіння зі смаком ананасу
        </div>
        <div id="order">
          <div className="order_wrapper">
            <div className="order_button">Замовити</div>
            <div className="order_arrow">
              <img src={arrowdown}/>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
