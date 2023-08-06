import { useTranslation } from "react-i18next";
import classNames from 'classnames';

export default function Header({lngs, setLng, showMenu, setShowMenu}) {
  const { t } = useTranslation();

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

  let leftLngButtonClassNames = classNames("switch_half", "left_half", {
    active: lngs[0].isActive,
  });
  let rightLngButtonClassNames = classNames("switch_half", "right_half", {
    active: lngs[1].isActive,
  });

  const navigationList = navigation.map(({id, name}, i) => {
    const classes = classNames("nav_item", {"active": !i});

    return (
        <a
          key={id}
          className={classes}
          href={"#" + id}
        >
          {name}
        </a>
      )
  })

  return (
    <header className="header">
        <div className="container">
            <nav id="nav">
                {navigationList}
            </nav>

            <div className="menu__btn">
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

            <div id="language_switch">
                <button className={leftLngButtonClassNames} onClick={() => setLng("uk")}>UK</button>
                <button className={rightLngButtonClassNames} onClick={() => setLng("en")}>EN</button>
            </div>
        </div>
    </header>
  )
}
