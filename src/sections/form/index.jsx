import Link from "next/link";
import { useState } from "react";
import COMPANY from "@/constants/company";
import Input from "@/react/components/forms/input";
import ListItem from "@/react/components/ui/list.item";

import s from "./form.module.scss";

const Form = () => {

  const [ name, setName ] = useState("");
  const [ type, setType ] = useState("Телефон");
  const [ comment, setComment ] = useState("");
  const [ number, setNumber ] = useState("");
  const [ showList, setShowList ] = useState( false );
  const [ checkAgree, setCheckAgree ] = useState( true );

  function setChannel( name ) {
    setType( name );
  }

  function toggleList() {
    setShowList( !showList );
  }

  function toggleAgree() {
    setCheckAgree( !checkAgree );
  }

  function sendForm() {

    alert("Ваша заявка отправлена!");

  }

	const formIsValidated = ( checkAgree && name.length > 0 && number.length >= 5 );

  return (

    <section
    
      onClick = { () => showList && setShowList(false) }
      className = {`flex center items-center ${ s.container } relative`}

    >

      <img src = "/img/form/wave.png" className = {`${ s.container__wave } absolute`}/>

      <div className = {`${ s.container__call__text } mobile`}>

        <p className = {`${ s.container__call__text__title }`}>
          
          Остались вопросы? <br /><span>заполните форму ниже</span>
          
        </p>

        <p className = {`${ s.container__call__text__subtitle }`}>Мы свяжемся с Вами для <br />обсуждения всех деталей:</p>

        <ul>

          <li>укажите, пожалуйста, <br />информацию о вашем <br />судне, выберите тариф <br />и тип необходимых услуг</li>
          <li>а наши эксперты <br />предложат лучшие <br />решения для его <br />ремонта или отделки</li>

        </ul>

      </div>

      <form className = {`${ s.form } relative`}>

        <img src = "/img/form/gear.png" className = {`${ s.form__gear } absolute desktop`}/>
        <img src = "/img/form/compassLeft.png" className = {`${ s.form__compass_left } absolute desktop`}/>
        <img src = "/img/form/compassRight.png" className = {`${ s.form__compass_right } absolute desktop`}/>
        <div className = {`${ s.form__liner } absolute desktop`}/>

        <p className = {`font-bold ${ s.form__call } desktop`}>

          <span>ОСТАВЬТЕ ЗАЯВКУ ОПЕРАТОРУ `BOATS GROUP`</span>&nbsp;(обязательные поля отмечены знаком *)<br />
          Мы свяжемся с Вами в ближайшее время. Укажите тип работ, вид судна и комментарий при необходимости.

        </p>

        <div className = {`font-bold ${ s.form__call } mobile`}>

          ОСТАВЬТЕ ЗАЯВКУ ОПЕРАТОРУ <span>`BOATS GROUP`</span>
          <br /><br />
          <p>(обязательные поля отмечены знаком *)</p>

        </div>

        <div className = {`flex ${ s.form__reverse }`}>

          <Input

            name = "*Имя"
            val = { name }
            set = { setName }
            place = "Имя (ФИО)"

          />

          <div className = "relative" onClick = { () => toggleList() } onKeyUp = { () => toggleList() }>

            <Input

              name = "Удобный способ связи"
              readonly
              withIcon
              val = { type }

            />

            <img src = "/img/form/arrow.png" className = {`${ s.form__arrow } ${ showList && s['form__arrow--opened'] } absolute`}/>

            <div className = {`flex column ${ s.form__channels_list } ${ showList && s['form__channels_list--opened'] } absolute`}>
              
              { COMPANY.CHANNEL_TYPES.map(( el, key ) => (
              
                <div className = "relative">
                  
                  <ListItem key = { key } name = { el } action = { () => setChannel( el ) } />

                  <div className = {`${ s.form__channels_list__liner } ${ s[ `liner` + ( key+1 ) ] }`}/>

                </div>

              ))}

            </div>

          </div>

          <div className = {`${ s.form__liner } mobile`}/>

          <p className = {`font-bold ${ s.form__notice } relative`}>

            Предоставляем 2 вида тарифов:<br />
            <span>гарантийный и коммерческий</span>

          </p>

          <div className = {`${ s.form__liner } mobile`}/>

        </div>
 
        <p className = {`font-bold ${ s.form__comment }`}>

          Опишите Вашу проблему, напишите вопрос или оставьте комментарий.<br /><br className = "mobile"/>
          <span>Так наш специалист сможет заранее изучить вопрос, и дать Вам более быстрый и точный ответ.</span>

        </p>

        <Input

          multiline
          val = { comment }
          set = { setComment }
          place = "Ваш комментарий или вопрос"
          className = { s.textarea }

        />

        <div className = {`flex items-center between ${ s.form__agree } ${ s.form__reverse }`}>

          <div
          
            onClick = { () => toggleAgree() }
            className = {`flex items-center ${ s.form__agree__policy } pointer relative`}
            
          >
            
            { checkAgree ?
    
                <img src = "/img/form/check.png" className = {`${ s.form__agree__policy__check }`}/>
              
              :
                
                <img src = "/img/form/check-void.png" className = {`${ s.form__agree__policy__check } ${ s.form__agree__policy__check__void }`}/>
            
            }

            <p className = { s.form__agree__policy__text }>*Я принимаю условия <span><Link href = "/policy" target = "_blanc">Политики Конфиденциальности</Link></span></p>
            <img src = "/img/form/hand-pointer.png" className = {`${ s.form__agree__policy__pointer } desktop`}/>

          </div>

          <Input

            isPhoneNumber
            name = "*Ваш номер для связи:"
            type = "number"
            val = { number }
            set = { setNumber }
            place = "+7 (XXX) XX-XX-XX"
            className = { s.input }

          />

          <button
          
            onClick = { () => sendForm() }
            className = {`${ s.form__agree__button } absolute pointer ${ !formIsValidated && "disabled" }`}

          >

            Заказать звонок

          </button>

        </div>

      </form>

    </section>

  )

}

export default Form;