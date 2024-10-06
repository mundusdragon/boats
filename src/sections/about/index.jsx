import { useEffect } from "react";
import COMPANY from "@/constants/company";

import Slider from 'react-slick';

import s from "./about.module.scss";

const AboutUs = ({}) => {

  const slider__settings = {

    swipe: true,
    dots: false,
    infinite: false,
    speed: 350,
    slidesToShow: 1,
    slidesToScroll: 1,

    accessibility: true,
    prevArrow: <NavArrow src = "/img/about/leftArrow.png" left = { true } />,
    nextArrow: <NavArrow src = "/img/about/rightArrow.png" right = { true } />,

  };

  useEffect(() => {

    const links = document.querySelectorAll('a');


    if (links.length > 0) {
      links[0].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []); 

  return (

    <section className = {`${ s.about } relative`}>

      <img src = "/img/about/back.png" className = {`${ s.about__back } absolute desktop`}/>
      <img src = "/img/about/back-fragment.png" className = {`${ s.about__back__fragment } absolute desktop`}/>
      
      <img src = "/img/about/back-mobile.png" className = {`${ s.about__back } absolute mobile`}/>

      <div className = {`flex ${ s.field } relative`}>

        <h4 className = {`${ s.field__text } relative`}>

          <span className = { s.field__text__title }>Уважаемые клиенты и партнёры!</span>
          <br /><br />
          Добро пожаловать в компанию `BOATS GROUP`. Уже более пяти лет мы предоставляем качественные услуги владельцам <br />
          яхт и катеров, гарантируя высокий уровень сервиса и индивидуальный подход к каждому клиенту. Используем только <br className = "desktop"/>
          сертифицированные материалы и передовое оборудование, что гарантирует высокий уровень нашего сервиса. Являемся <br className = "desktop"/>
          партнерами более 100 компаний, <br className = "mobile"/>а также эксклюзивными представителями BBC <br className = "mobile"/>в городе Сочи. Наша команда состоит из <br className = "desktop"/>
          профессионалов своего дела, которые обладают большим опытом работы с яхтами и катерами любой сложности, а также <br className = "desktop"/>
          постоянно совершенствуют свои навыки с учетом последних тенденций в судостроении и ремонте. С нами Ваш отдых на <br className = "desktop"/>
          море станет еще более приятным <br className = "mobile"/>и качественным. Мы гордимся тем, что зарекомендовали себя как надежный сервис <br />
          для владельцев морских судов, и продолжаем развиваться, стремясь к совершенству для того, чтобы Ваше время на воде <br className = "desktop"/>
          было максимально комфортным и безопасным.

          <br /><br /><br />

          <div className = {`${ s.field__text__liner } absolute`}/>

          <span className = { s.field__text__list }>Предлагаем широкий спектр услуг, включая:</span>

          <ul>

            <li>производство тентов и чехлов, <br className = "mobile"/>перетяжка мебели <span>(свой цвейный цех)</span></li>
            <li>реставрацию любой сложности, как корпуса, <br className = "mobile"/>так и мебели дерева, укладку <span>Бирманского тика</span></li>
            <li>работы с искусственным тиком от компании <span>BBC <br className = "mobile"/>(являемся их официальными представителями)</span></li>
            <li>являемся официальными представителями <br className = "mobile"/>компании <span>Компас-Р (предоставляем <br className = "mobile"/>гарантийное обслуживание)</span></li>
            <li>диагностику МастерВольт, ВольвоПента, <br className = "mobile"/>выполняем работы по электрике и установке <br className = "mobile"/>дополнительного оборудования</li>
            <li>производим ремонт и техобслуживание <br className = "mobile"/>двигателей, все детали в наличии, также <br className = "mobile"/>имеем богатый ассортимент аксессуаров</li>

          </ul>

          <br />

          <span className = { s.field__text__call }>

            Если у Вас есть вопросы или Вы хотите узнать больше о наших услугах, пожалуйста, свяжитесь с нами. 
            <br className = "mobile"/><br className = "mobile"/>Мы всегда рады <br className = "desktop"/>помочь Вам <br className = "mobile"/>в любых аспектах, связанных с ремонтом и обслуживанием, а также дизайнерскими решениями “под ключ” 

          </span>

          <div className = {`${ s.field__text__liner } ${ s.field__text__liner__bottom } absolute`}/>

          <br /><br />

          <span className = { s.field__text__subscribe }>С уважением, Ваша команда <br className = "mobile" /><span className = { s.field__text__subscribe_big }>`BOATS GROUP`</span></span>

          <img src = "/img/about/anchor.png" className = {`${ s.field__text__subscribe__anchor } relative desktop`}/>
          <img src = "/img/about/anchor-mobile.png" className = {`${ s.field__text__subscribe__anchor } relative mobile`}/>

        </h4>

        <div className = {`flex column items-center text-center ${ s.field__slider } relative`}>

          <img src = "/img/about/golden-mask.png" className = {`${ s.field__slider__mask } absolute mobile`}/>

          <h5 className = "font-bold text-24 text-26-m">Команда BOATS GROUP приветствует Вас на борту :)</h5>

          <div className = {`flex center items-center ${ s.field__slider__container } relative`}>

            <img src = "/img/about/back-fragment.png" className = {`${ s.field__slider__container__fragment } ${ s.field__slider__container__fragment__top } absolute`}/>
            <img src = "/img/about/back-fragment.png" className = {`${ s.field__slider__container__fragment } ${ s.field__slider__container__fragment__bottom } absolute`}/>
            <div className = {`${ s.field__slider__back } absolute mobile`}/>

            <Slider
            
              className = {`flex ${ s.slider } relative desktop`}
              { ...slider__settings }
              
            >

              <div className = { s.slider__slide }><img src = "/img/about/photos/photo1.jpg" className = {`${ s.slider__slide__photo } relative`}/></div>
              <div className = { s.slider__slide }><img src = "/img/about/photos/photo2.jpg" className = {`${ s.slider__slide__photo } relative`}/></div>
              <div className = { s.slider__slide }><img src = "/img/about/photos/photo3.jpg" className = {`${ s.slider__slide__photo } relative`}/></div>
              <div className = { s.slider__slide }><img src = "/img/about/photos/photo4.jpg" className = {`${ s.slider__slide__photo } relative`}/></div>

            </Slider>

            <div className = "relative mobile">

              <img src = "/img/about/photos/photo1.jpg" className = {`${ s.slider__slide__photo } relative`}/>
              <img src = "/img/about/photos/photo2.jpg" className = {`${ s.slider__slide__photo } relative`}/>
              <img src = "/img/about/photos/photo3.jpg" className = {`${ s.slider__slide__photo } relative`}/>
              <img src = "/img/about/photos/photo4.jpg" className = {`${ s.slider__slide__photo } relative`}/>

            </div>

          </div>

          <div className = {`${ s.field__slider__topline } relative mobile`}/>

          <a noopener noreferrer href = "tel:+79673154847">

            <p className = {`font-bold text-20 text-26-m`}>
              
              Звоните в любое время! <br className = "mobile" />
              <img src = "/img/about/phone.png" className = {`${ s.field__slider__phone } relative`}/>
              <span className = "text-20 text-25-m">8 (967) 315-48-47</span>
              
            </p>

          </a>
          
          <div className = {`${ s.field__slider__underline } relative mobile`}/>

          <a noopener noreferrer target = "_blanc" href = { COMPANY.AVITO }>

            <p className = {`font-bold relative text-18 text-22-m`}>
              
              Ищете больше деталей и запчастей? <br className = "mobile" />Посетите наш магазин на Авито
              <img src = "/img/about/hand_pointer.png" className = {`${ s.field__slider__pointer } relative`}/>

            </p>

            <div className = {`${ s.field__slider__underline } desktop`}/>
            <div className = {`${ s.field__text__underline } mobile`}/>

          </a>

        </div>

      </div>

      <div className = {`${ s.field__circle } absolute`}/>

    </section>

  )

}

export default AboutUs;

// стрелки навигации
const NavArrow = ({ src = "", left = false, right = false, action = () => {} }) => {

  return (

    <img
    
      onClick = { () => action }
      src = { src }
      className = {`
        
        field__slider__container__arrow ${ s.field__slider__container__arrow } 
        ${ left && s.field__slider__container__arrow__left } ${ right && s.field__slider__container__arrow__right } absolute
         
      `}
      
    />

  )
  
}