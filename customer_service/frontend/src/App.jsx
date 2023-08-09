import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { watchAnimationsOnScroll } from "./utils/watchers/watchAnimationsOnScroll";
import { watchNavbarScroll } from "./utils/watchers/watchNavbarScroll";
import { watchSectionsScroll } from "./utils/watchers/watchSectionsScroll";

import spiraltop from "./assets/svg/spiraltop.svg";
import spiralright from "./assets/svg/spiralright.svg";
import spiral from "./assets/svg/spiral.svg";
import spiralbottom from "./assets/svg/spiralbottom.svg";
import spiralcenter from "./assets/svg/spiralcenter.svg";
import schield from "./assets/svg/schield.svg";
import temperature from "./assets/svg/temperature.svg";
import plant from "./assets/svg/plant.svg";
import bubbles from "./assets/svg/bubbles.svg";
import bottle from "./assets/img/bottle.png"

function App() {
  const { t } = useTranslation();

  useEffect(() => {
    watchNavbarScroll()
    watchSectionsScroll()
    watchAnimationsOnScroll()
  }, []);

  return (
    <>
      <Header />

      <section id="main">
        <div className="container">
          <div className="content">
            <div className="title__wrapper">
              <div className="bottle_wrapper">
              <img src={bottle} className="bottle_top" />
              </div>

              <h1 className="main_header">{t("main.header")}</h1>
            </div>
            <div className="main_header_caption">{t("main.headerCaption")}</div>
            <a className="order_button" href="#order">
              <div className="order_text">{t("orderButton")}</div>
            </a>
          </div>
        </div>

        <img src={spiraltop} className="spiral_top" />
        <img src={spiralright} className="spiral_right" />
      </section>

      <section id="story">
        <div className="container">
          <div className="title scroll_hidden from_left1">
            {t("story.header")}
            <img src={spiral} className="spiral scroll_hidden rotate" />
          </div>
          <div className="story_header_caption scroll_hidden from_left2">
            {t("story.headerCaption")}
          </div>
        </div>
      </section>

      <section id="quality">
        <div className="container">
          <img src={bottle} className="bottle_middle scroll_hidden" />

          <div className="cards">
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

            <img
              src={spiralcenter}
              className="spiral_center scroll_hidden rotate"
            />
          </div>
        </div>
      </section>

      <section id="order">
        <div className="container">
          <div className="content">
            <div className="title scroll_hidden from_left1">
              {t("order.header")}
            </div>

            <form action="" className="order_form scroll_hidden">
              <input
                className="order_input"
                name="full_name"
                type="text"
                placeholder={t("order.formPlaceholder.fullName")}
                required
                maxLength="255"
              />
              <input
                className="order_input"
                name="email"
                type="email"
                placeholder={t("order.formPlaceholder.email")}
                required
                maxLength="320"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              />
              <input
                className="order_input"
                name="phone_number"
                type="text"
                placeholder={t("order.formPlaceholder.phoneNumber")}
                required
                minLength="5"
                maxLength="15"
              />
              <input
                className="order_input"
                name="address"
                type="text"
                placeholder={t("order.formPlaceholder.address")}
                required
                maxLength="425"
              />
              <input
                className="order_input"
                name="box_count"
                type="number"
                placeholder={t("order.formPlaceholder.boxCount")}
                min="1"
                max="4294967295"
                required
              />
              <textarea
                className="order_textarea"
                name="comment"
                type="text"
                placeholder={t("order.formPlaceholder.comment")}
                maxLength="255"
              ></textarea>
              <button className="order_button">
                <div className="order_text">{t("orderButton")}</div>
              </button>
            </form>
          </div>

          <div className="bottle_bottom_wrapper">
            <img src={bottle} className="bottle_bottom scroll_hidden" />
          </div>

          <img
            src={spiralbottom}
            className="spiral_bottom scroll_hidden from_left3"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
export default App;