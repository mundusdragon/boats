import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import NAVBAR from "./header.navbar";
import HeaderMenuMobile from "./header.mobile";
import Button from "@/react/components/buttons/button";
import ButtonLink from "@/react/components/buttons/button.link";

import s from "./header.module.scss";

const Header = ({ withNavigate = true, withMenu = true }) => {

  const [ showMenu, setShowMenu ] = useState( true );

  function toggleMenu() { setShowMenu( !showMenu ) };
  
  useEffect(() => {

    const handleResize = () => {

      setShowMenu( false );

    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => { window.removeEventListener('resize', handleResize); };

  }, []);

  return (

    <header className = {`fixed flex items-center between ${ s.header } ${ showMenu && s['header--variant'] } relative`}>

      { withMenu && 
      
        <HeaderMenuMobile

          isOpened = { showMenu }
          action = { () => toggleMenu() }

        />

      }

      <div className = {`flex ${ s.header__brand }`}>

        <img src = "/img/logo.png" className = { s.header__brand__logo }/>

        <div className = { s.header__menu__flex }>

          <h1 className = "relative">BOATS GROUP</h1>
          <p className = "relative">ремонт яхт и катеров в Сочи</p>

          { !showMenu && withMenu &&

            <div
            
              className = "flex"
              onClick = { () => toggleMenu() }
              
            >

              <p className = {`${ s.header__menu } mobile`}>МЕНЮ {`>>>`}</p>

              <img src = "/img/anchor-white.png" className = {`${ s.header__menu__anchor } mobile`}/>

            </div>

          }

        </div>

      </div>

      { withNavigate ?

          <Fragment>

            <div className = {`flex items-center center ${ s.header__navbar } relative`}>

              <img src = "/img/anchor-white.png" className = { s.header__navbar__link__anchor }/>

              { NAVBAR.map(( el, key ) => (

                <Link

                  key = { key }
                  href = { el.url }
                  className = {`${ s.header__navbar__link } ${ el.style === "big" && s['header__navbar__link--big'] }`}

                >

                  { el.name }

                </Link>

              ))}

              <div className = { s.header__navbar__link__line }/>

              <img src = "/img/anchor-white.png" className = { s.header__navbar__link__anchor }/>

            </div>

            { !showMenu ?
            
                (<div className = {`flex items-center ${ s.buttons }`}>

                  <ButtonLink

                    href = "#form"
                    name = "Заказать звонок"

                  />

                  <ButtonLink

                    href = "tel:+79673154847"
                    name = "Позвонить нам"

                  />

                </div>)

              :

              <div className = {`${ s.buttons } ${ s.buttons__button }`}>

                <Button

                  defaultColor
                  name = "ЗАКРЫТЬ МЕНЮ"
                  action = { () => toggleMenu() }
        
                />

              </div>

            }

          </Fragment>

        :

          <ButtonLink

            href = "/"
            name = "Назад"
            className = { s.button }

          />
          
        }

      <div className = {`${ s.header__border } absolute`}/>

    </header>

  )

}

export default Header;