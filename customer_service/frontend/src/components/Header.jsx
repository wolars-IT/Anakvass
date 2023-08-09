import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import classNames from 'classnames';

export default function Header() {
  const { t, i18n } = useTranslation();

  const [showMenu, setShowMenu] = useState(false);
  const [lngs, setLngs] = useState([
    {code: "uk", isActive: true},
    {code: "en", isActive: false}
  ]);

  useEffect(() => {
    const localLanguage = window.localStorage.getItem('language')
    if (localLanguage !== null) {
      changeLanguage(JSON.parse(localLanguage))
    }
  }, [])

  const changeLanguage = (lngCode) => {
    const nextLngs = lngs.map((lng) => {
      if (lng.code == lngCode) {
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

    setLngs(nextLngs)
    i18n.changeLanguage(lngCode);
    window.localStorage.setItem('language', JSON.stringify(lngCode));
  }
  const toggleMenu = () => {
    setShowMenu(prev => !prev);
    document.body.classList.toggle('overlay');
  }

  const navigation = [
    { name: "", id: "main" },
    { name: "", id: "story" },
    { name: "", id: "quality" },
    // { name: "", id: "contents" },
    { name: "", id: "order" },
  ]
  const navigationList = navigation.map(navItem => 
    <a
      key={navItem.id}
      className="nav_item"
      href={"#" + navItem.id}
      onClick={showMenu ? toggleMenu : null}
    >
      {t("nav." + navItem.id)}
    </a>
  )

  const navClasses = classNames({"open": showMenu});
  const menuBtnClasses = classNames("menu__btn", {"close": showMenu});
  const leftLngButtonClassNames = classNames("switch_half", "left_half", {
    active: lngs[0].isActive,
  });
  const rightLngButtonClassNames = classNames("switch_half", "right_half", {
    active: lngs[1].isActive,
  });
  
  return (
    <header className="header">
      <div className="container">
        <nav id="nav" className={navClasses}>
          {navigationList}
        </nav>

        <div className={menuBtnClasses} onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="68" height="7" viewBox="0 0 68 7" fill="none">
              <path d="M1 6C4.30116 6 4.30116 1 7.60232 1C10.9035 1 10.9035 6 14.2046 6C17.5058 6 17.5058 1 20.7992 1C24.1005 1 24.1005 6 27.3938 6C30.6951 6 30.6951 1 33.9884 1C37.2896 1 37.2896 6 40.5906 6C43.8918 6 43.8918 1 47.1931 1C50.4941 1 50.4941 6 53.7953 6C57.0965 6 57.0965 1 60.3978 1C63.6988 1 63.6988 6 67 6" stroke="#E0AB21" strokeWidth="1.5929" strokeMiterlimit="10" strokeLinecap="round"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="68" height="7" viewBox="0 0 68 7" fill="none">
            <path d="M1 6C4.30116 6 4.30116 1 7.60232 1C10.9035 1 10.9035 6 14.2046 6C17.5058 6 17.5058 1 20.7992 1C24.1005 1 24.1005 6 27.3938 6C30.6951 6 30.6951 1 33.9884 1C37.2896 1 37.2896 6 40.5906 6C43.8918 6 43.8918 1 47.1931 1C50.4941 1 50.4941 6 53.7953 6C57.0965 6 57.0965 1 60.3978 1C63.6988 1 63.6988 6 67 6" stroke="#E0AB21" strokeWidth="1.5929" strokeMiterlimit="10" strokeLinecap="round"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="68" height="7" viewBox="0 0 68 7" fill="none">
            <path d="M1 6C4.30116 6 4.30116 1 7.60232 1C10.9035 1 10.9035 6 14.2046 6C17.5058 6 17.5058 1 20.7992 1C24.1005 1 24.1005 6 27.3938 6C30.6951 6 30.6951 1 33.9884 1C37.2896 1 37.2896 6 40.5906 6C43.8918 6 43.8918 1 47.1931 1C50.4941 1 50.4941 6 53.7953 6C57.0965 6 57.0965 1 60.3978 1C63.6988 1 63.6988 6 67 6" stroke="#E0AB21" strokeWidth="1.5929" strokeMiterlimit="10" strokeLinecap="round"/>
          </svg>
        </div>

        <div className="language_switch">
          <button className={leftLngButtonClassNames} onClick={() => changeLanguage("uk")}>UK</button>
          <button className={rightLngButtonClassNames} onClick={() => changeLanguage("en")}>EN</button>
        </div>
      </div>
    </header>
  )
}
