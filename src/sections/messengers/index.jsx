import COMPANY from "@/constants/company";
import s from "./messengers.module.scss";

const Messengers = ({}) => {

  return (

    <section className = {`flex center items-center ${ s.container } relative`}>

      <img src = "/img/messengers/compassLeft.png" className = {`${ s.container__compass } ${ s.container__compass__left } absolute`}/>
      <img src = "/img/messengers/compassRight.png" className = {`${ s.container__compass } ${ s.container__compass__right } absolute desktop`}/>

      <a href = { COMPANY.TELEGRAM } noopenner noreferrer target = "_blanc" className = { s.tg }>

        <img src = "/img/messengers/telegram.png" className = {`${ s.container__icon } ${ s.container__icon__tg } relative`}/>
      
      </a>
      
      <p className = {`${ s.title } text-center desktop`}>
        
        А еще можете написать нам на Telegram и WhatsApp<br /><br className = "mobile"/>
        
        <span className = { s.title__big }>мы с радостью ответим <br className = "mobile"/>на все вопросы!</span><br /><br />
        <span className = {`${ s.title__small } relative`}>(нажмите на иконку, <br className = "mobile" />чтобы написать в чат)</span><br /><br />

      </p>

      <p className = {`${ s.title } text-center mobile`}>
        
        А еще можете написать нам на Telegram и WhatsApp<br /><br className = "mobile"/>
        <span className = { s.title__big }>Мы с радостью ответим <br className = "mobile"/>на все вопросы!</span><br /><br />
        <span className = {`${ s.title__small } relative`}>нажмите на иконку, <br className = "mobile" />чтобы написать в чат</span><br /><br />

      </p>

      <a href = { COMPANY.WHATSAPP } noopenner noreferrer target = "_blanc" className = { s.wa }>

        <img src = "/img/messengers/whatsapp.png" className = {`${ s.container__icon } ${ s.container__icon__wa } relative`}/>
      
      </a>
    
    </section>

  )

}

export default Messengers;