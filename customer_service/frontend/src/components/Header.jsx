import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import classNames from 'classnames';

export default function Header() {
  const { t, i18n } = useTranslation();

  const [showMenu, setShowMenu] = useState(false);
  const [languages, setLanguages] = useState([
    {code: "uk", isActive: true, text: "UK"},
    {code: "en", isActive: false, text: "EN"}
  ]);

  useEffect(() => {
    const localLanguage = window.localStorage.getItem("language")
    if (localLanguage !== null) {
      changeLanguage(JSON.parse(localLanguage))
    }
  }, [])

  const changeLanguage = (languageCode) => {
    const nextLanguages = languages.map((language) => {
      if (language.code == languageCode) {
        return {
          ...language,
          isActive: true
        }
      }
      return {
        ...language,
        isActive: false
      }
    })

    setLanguages(nextLanguages)
    i18n.changeLanguage(languageCode);
    window.localStorage.setItem("language", JSON.stringify(languageCode));
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
    <li key={navItem.id}>
      <a
        className="nav__item"
        href={"#" + navItem.id}
        onClick={showMenu ? toggleMenu : null}
      >
        {t("nav." + navItem.id)}
      </a>
    </li>
  )
  const languageButtons = languages.map((language) => {
    const languageButtonClasses = classNames(
      "language-switch__half", 
      {"language-switch__half_active": language.isActive
    });
    
    return (
      <button
        key={language.code}
        className={languageButtonClasses} 
        onClick={() => changeLanguage(language.code)}
      >
        {language.text}
      </button>
    )
  })

  const navClasses = classNames("nav", {"nav_open": showMenu});
  const menuButtonClasses = classNames("menu-button", {"menu-button_active": showMenu});

  return (
    <header className="header">
      <div className="container header__container">
        <nav className={navClasses}>
          <ul className="nav__list">
            {navigationList}
          </ul>
        </nav>

        <div className={menuButtonClasses} onClick={toggleMenu}>
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

      </div>
        <div className="language-switch">
          {languageButtons}
        </div>
    </header>
  )
}
