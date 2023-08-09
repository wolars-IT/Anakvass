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

      <section className="main" id="main">
        <div className="container main__container">
          <div className="content main__content">
            <div className="main__bottle-top">
              <img src={bottle} className="main__bottle-top-inner" />
            </div>

            <h1 className="title main__title">{t("main.header")}</h1>
            <div className="caption main__caption">{t("main.headerCaption")}</div>
            <a className="order-button" href="#order">
              {t("orderButton")}
            </a>
          </div>
        </div>

        <img src={spiraltop} className="main__spiral-top" />
        <img src={spiralright} className="main__spiral-right" />
      </section>

      <section className="story" id="story">
        <div className="container">
          <div className="title story__title scroll_hidden from_left1">
            {t("story.header")}
            <img src={spiral} className="story__spiral scroll_hidden rotate" />
          </div>
          <div className="caption story__caption scroll_hidden from_left2">
            {t("story.headerCaption")}
          </div>
        </div>
      </section>

      <section className="quality" id="quality">
        <div className="container quality__container">
          <img src={bottle} className="quality__bottle-middle scroll_hidden" />

          <div className="cards">
            <div className="card scroll_hidden">
              <img src={bubbles} />
              <div className="card__title">{t("quality.card1")}</div>
              <div className="card__text">{t("quality.cardDesc1")}</div>
            </div>
            <div className="card scroll_hidden">
              <img src={schield} />
              <div className="card__title">{t("quality.card2")}</div>
              <div className="card__text">{t("quality.cardDesc2")}</div>
            </div>
            <div className="card scroll_hidden">
              <img src={temperature} />
              <div className="card__title">{t("quality.card3")}</div>
              <div className="card__text">{t("quality.cardDesc3")}</div>
            </div>
            <div className="card scroll_hidden">
              <img src={plant} />
              <div className="card__title">{t("quality.card4")}</div>
              <div className="card__text">{t("quality.cardDesc4")}</div>
            </div>

            <img
              src={spiralcenter}
              className="quality__spiral-center scroll_hidden rotate"
            />
          </div>
        </div>
      </section>

      <section className="order" id="order">
        <div className="container order__container">
          <div className="content order__content">
            <div className="title order__title scroll_hidden from_left1">
              {t("order.header")}
            </div>

            <form action="" className="form scroll_hidden">
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
              <button className="order-button">
                {t("orderButton")}
              </button>
            </form>
          </div>

          <div className="order__bottle-bottom">
            <img src={bottle} className="order__bottle-bottom-inner scroll_hidden" />
          </div>

          <img
            src={spiralbottom}
            className="order__spiral-bottom scroll_hidden from_left3"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
export default App;