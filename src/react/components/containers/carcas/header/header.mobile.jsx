import Link from "next/link";
import NAVBAR from "./header.navbar";
import s from "./header.module.scss";

const HeaderMenuMobile = ({ isOpened = false, action = () => {} }) => {

  return (

    <nav className = {`flex column center text-center ${ s.header__menu__mobile } ${ isOpened && s['header__menu__mobile--opened'] }`}>

      { NAVBAR.map(( el, key ) => (

        <div className = {`flex column ${ s.header__navbar__link__container } relative`}>

          <div className = {`${ s.header__navbar__link__line } absolute`}/>

          <Link

            onClick = { action }
            key = { key }
            href = { el.url }
            className = {`${ s.header__navbar__link } ${ el.style === "big" && s['header__navbar__link--big'] } absolute`}

          >

            { el.name }

          </Link>

        </div>

      ))}

    </nav>

  )

}

export default HeaderMenuMobile;