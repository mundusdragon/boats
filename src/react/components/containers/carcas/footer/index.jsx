import Link from "next/link";
import { useState } from "react";
import PROPS from "./footer.props";
import COMPANY from "@/constants/company";

import s from "./footer.module.scss";

const Footer = () => {

  function copyToClipboard( val ) {

    navigator.clipboard.writeText( val )
    
      .then(() => {
        alert('Текст скопирован');
      })
      .catch(err => {
        console.error('Не удалось скопировать текст: ', err);
      });

  };

  const [ showLegal, setShowLegal ] = useState( false );
  const [ showActual, setShowActual ] = useState( false );
  const [ showAdressess, setShowAdressess ] = useState( false );

  function toggleList ( state, setState ) { setState( !state ) };

  return (

    <footer className = {`flex ${ s.footer } relative`}>

      <img src = "/img/footer/bottom-weave.png" className = {`${ s.footer__weave } absolute desktop`}/>
      <img src = "/img/footer/weave-mobile.png" className = {`${ s.footer__weave } absolute mobile`}/>

      <div className = {`column center ${ s.footer__owners } relative mobile-flex`}>

        <div className = {`flex column items-center text-center ${ s.footer__owners__owner }`}>

          <div className = {`flex center items-center ${ s.footer__owners__owner__photo__border }`}>

            <img src = "/img/footer/man.png" className = {`${ s.footer__owners__owner__photo }`}/>

          </div>

          <p className = { s.footer__owners__owner__title }>{ COMPANY.OWNER_MAN }</p>
          <p className = { s.footer__owners__owner__subtitle }>{ COMPANY.OWNER_MAN_ROLE }</p>
          <a href = "tel:+7 (918) 610-83-43" className = { s.footer__owners__owner__link }>{ COMPANY.OWNER_MAN_PHONE }</a>

        </div>

        <div className = {`flex column items-center text-center ${ s.footer__owners__owner }`}>

          <div className = {`flex center items-center ${ s.footer__owners__owner__photo__border }`}>

            <img src = "/img/footer/woman.png" className = {`${ s.footer__owners__owner__photo }`}/>

          </div>

          <p className = { s.footer__owners__owner__title }>{ COMPANY.OWNER_WOMAN }</p>
          <p className = { s.footer__owners__owner__subtitle }>{ COMPANY.OWNER_WOMAN_ROLE }</p>
          <a href = "tel:+7 (988) 153-96-65" className = { s.footer__owners__owner__link }>{ COMPANY.OWNER_WOMAN_PHONE }</a>

          </div>

      </div>

      <div className = { s.footer__texts }>

        <div className = {`${ s.footer__liner } mobile`}/>

        <div className = {`${ s.footer__title } desktop`}>Юридические <br className = "mobile"/>реквизиты</div>
        
        <div
        
          className = {`${ s.footer__title } mobile relative`}
          onClick = { () => toggleList( showLegal, setShowLegal ) }
          
        >
          
          Юридические <br className = "mobile"/>реквизиты
          <img src = "/img/footer/arrow.png" className = {`${ s.footer__title__arrow } ${ showLegal && s['footer__title__arrow--opened'] } absolute`}/>
          
        </div>
        
        <div className = {`${ s.footer__liner } mobile`}/>
        
        <div className = {`${ s.footer__list } ${ showLegal && s['footer__list--opened'] }`}>
 
          <p className = { s.footer__subtitle }><span><span>ООО «Боутс Групп»</span></span></p>
          <p className = { s.footer__subtitle }>ИНН: <span onClick = { () => copyToClipboard( PROPS.INN ) }>{ PROPS.INN }</span></p>
          <p className = { s.footer__subtitle }>КПП: <span onClick = { () => copyToClipboard( PROPS.KPP ) }>{ PROPS.KPP }</span></p>
          <p className = { s.footer__subtitle }>ОГРН: <span onClick = { () => copyToClipboard( PROPS.OGRN ) }>{ PROPS.OGRN }</span></p>
        
        </div>

      </div>

      <div className = {`${ s.footer__texts } ${ s.footer__texts__second }`}>

        <div className = {`${ s.footer__liner } mobile`}/>

        <div className = {`${ s.footer__title } desktop`}>Платёжные <br className = "mobile"/>реквизиты</div>
        
        <div
        
          className = {`${ s.footer__title } mobile relative`}
          onClick = { () => toggleList( showActual, setShowActual ) }
          
        >
          
          Платёжные <br className = "mobile"/>реквизиты
          <img src = "/img/footer/arrow.png" className = {`${ s.footer__title__arrow } ${ showActual && s['footer__title__arrow--opened'] } absolute`}/>
          
        </div>
        
        <div className = {`${ s.footer__liner } mobile`}/>

        <div className = {`${ s.footer__list } ${ showActual && s['footer__list--opened'] }`}>

          <p className = { s.footer__subtitle }><span><span>ООО «Банк Точка»</span></span></p>
          <p className = { s.footer__subtitle }>БИК банка: <span onClick = { () => copyToClipboard( PROPS.BIK ) }>{ PROPS.BIK }</span></p>
          <p className = { s.footer__subtitle }>Расчётный счёт: <span onClick = { () => copyToClipboard( PROPS.RS ) }>{ PROPS.RS }</span></p>
          <p className = { s.footer__subtitle }>Корреспондентский  счёт: <span onClick = { () => copyToClipboard( PROPS.KS ) }>{ PROPS.KS }</span></p>

        </div>

      </div>

      <div className = {`${ s.footer__texts } ${ s.footer__texts__third }`}>

        <div className = {`${ s.footer__liner } mobile relative`}/>

        <div className = {`${ s.footer__title } desktop`}>Адреса <br className = "mobile"/>и контакты</div>

        <div
        
          className = {`${ s.footer__title } mobile`}
          onClick = { () => toggleList( showAdressess, setShowAdressess ) }
          
        >
          
          Адреса <br className = "mobile"/>и контакты
          <img src = "/img/footer/arrow.png" className = {`${ s.footer__title__arrow } ${ showAdressess && s['footer__title__arrow--opened'] } absolute`}/>
          
        </div>
        
        <div className = {`${ s.footer__liner } mobile`}/>

        <div className = {`${ s.footer__list } ${ showAdressess && s['footer__list--opened'] }`}>

          <p className = { s.footer__subtitle }>Телефон: <span onClick = { () => copyToClipboard( PROPS.PHONE ) }>{ PROPS.PHONE }</span></p>
          <p className = { s.footer__subtitle }>Email: <span onClick = { () => copyToClipboard( PROPS.EMAIL ) }>{ PROPS.EMAIL }</span></p>
          <p className = { s.footer__subtitle }>Telegram: <span onClick = { () => copyToClipboard( PROPS.TG ) }>{ PROPS.TG }</span></p>
          <p className = { s.footer__subtitle }>Юридический адрес: <span onClick = { () => copyToClipboard( PROPS.ADDRESS_LEGAL ) }>354000, Краснодарский край, <br />город-курорт Сочи,  ул.Горького, д.42/2, помещение 3</span></p>
          <p className = { s.footer__subtitle }>Адрес офиса: <span onClick = { () => copyToClipboard( PROPS.ADDRESS_ACTUAL ) }>354000, город-курорт Сочи, <br />Виноградный переулок, д.3, строение 2</span></p>

        </div>

      </div>

      <div className = {`flex ${ s.footer__owners } relative desktop-flex`}>

        <div className = {`flex column items-center text-center ${ s.footer__owners__owner }`}>

          <div className = {`flex center items-center ${ s.footer__owners__owner__photo__border }`}>

            <img src = "/img/footer/man.png" className = {`${ s.footer__owners__owner__photo }`}/>

          </div>

          <p className = { s.footer__owners__owner__title }>{ COMPANY.OWNER_MAN }</p>
          <p className = { s.footer__owners__owner__subtitle }>{ COMPANY.OWNER_MAN_ROLE }</p>
          <a href = "tel:+7 (918) 610-83-43" className = { s.footer__owners__owner__link }>{ COMPANY.OWNER_MAN_PHONE }</a>

        </div>

        <div className = {`flex column items-center text-center ${ s.footer__owners__owner }`}>

          <div className = {`flex center items-center ${ s.footer__owners__owner__photo__border }`}>

            <img src = "/img/footer/woman.png" className = {`${ s.footer__owners__owner__photo }`}/>

          </div>

          <p className = { s.footer__owners__owner__title }>{ COMPANY.OWNER_WOMAN }</p>
          <p className = { s.footer__owners__owner__subtitle }>{ COMPANY.OWNER_WOMAN_ROLE }</p>
          <a href = "tel:+7 (988) 153-96-65" className = { s.footer__owners__owner__link }>{ COMPANY.OWNER_WOMAN_PHONE }</a>

          </div>

      </div>

      <div className = {`flex ${ s.footer__notice } absolute`}>
        
        <p>BOATS GROUP. <span><br className = "mobile" />С заботой о каждом клиенте</span></p>
        <img src = "/img/footer/anchor.png" className = "desktop"/>
        
      </div>
      
      <Link href = "/policy" className = {`${ s.footer__policy } absolute`}>Политика Конфиденциальности</Link>

    </footer>

  )

}

export default Footer;