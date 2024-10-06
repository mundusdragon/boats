import ACHIEVEMENTS from "./achievements";
import s from "./propose.module.scss";

const Propose = ({}) => {

  return (

    <section className = {`${ s.propose } relative`}>

      <img src = "/img/propose/boat.png" className = {`${ s.propose__boat } absolute desktop`}/>
      <img src = "/img/propose/boat-mobile.png" className = {`${ s.propose__boat } absolute mobile`}/>
      
      <img src = "/img/propose/waves.png" className = {`${ s.propose__backwaves } absolute desktop`}/>

      <img src = "/img/propose/back.png" className = {`${ s.propose__back } absolute desktop`}/>
      <img src = "/img/propose/back-mobile.jpg" className = {`${ s.propose__back } absolute mobile`}/>

      <div className = {`flex column items-center ${ s.propose__titles } relative`}>
      
        <h2 className = {`font-bold ${ s.propose__title } relative`}><span>BOATS GROUP</span>&nbsp;&nbsp;&nbsp;&nbsp;<br className = "mobile"/>надежный сервис <br className = "mobile"/>ремонта яхт и катеров <br className = "mobile"/>в Сочи и Крыму.</h2>
        
        <br />

        <h2 className = {`font-bold ${ s.propose__subtitle } relative`}>

          <img src = "/img/propose/buoy(small).png" className = {`${ s.propose__buoy } ${ s.propose__buoy__small } absolute mobile`}/>
          <img src = "/img/propose/buoy(big).png" className = {`${ s.propose__buoy } ${ s.propose__buoy__big } absolute mobile`}/>
  
          <span className = "desktop">Реставрация любой сложности. Укладка Бирманского тика, работа с искусственным тиком.<br />
          Диагностика Мастервольт. Диагностика ВольвоПента. Работаем по всей стране.</span>
        
          <ul className = "mobile">

            <li>реставрация любой сложности</li>
            <li>укладка Бирманского тика, <br />работа с искусственным тиком</li>
            <li>диагностика Мастервольт</li>
            <li>диагностика ВольвоПента</li>
            <li>работаем по всей стране</li>

          </ul>

        </h2>

      </div>

      <div className = {`flex items-end column relative ${ s.propose__gover }`}>

        <img src = "/img/propose/ribbon.png" className = {`${ s.propose__gover__ribbon } absolute desktop`}/>

        <p className = {`font-bold ${ s.propose__gover__title } relative`}>Доверие государства: </p>
        
        <div className = "flex">
          
          <div className = {`${ s.propose__gover__subtitle__point } relative`}/>
          <p className = {`font-bold ${ s.propose__gover__subtitle } relative`}>успешное выполнение <br className = "desktop"/>госзаказов</p>

        </div>

      </div>

      <div className = {`flex between items-center ${ s.propose__achievements } relative`}>

        { ACHIEVEMENTS.map(( el, key ) => (

          <div
          
            key = { key }
            id = { el.id }
            className = {`flex center items-center column ${ s.propose__achievements__item } ${ s[`${ el.id }`] } relative`}
            
          >

            <div className = {`flex ${ s.propose__achievements__item__top_v } absolute`}/>
            <div className = {`flex ${ s.propose__achievements__item__top_h } absolute`}/>
            <div className = {`flex ${ s.propose__achievements__item__bottom_v } absolute`}/>
            <div className = {`flex ${ s.propose__achievements__item__bottom_h } absolute`}/>

            <p className = {`font-bold ${ s.propose__achievements__item__title }`}>{ el.title }</p>

            { el.subtitle !== "" ?
            
                <p className = {`font-bold ${ s.propose__achievements__item__subtitle }`}>{ el.subtitle }</p>
            
              :
              
                <p className = {`font-bold ${ s.propose__achievements__item__posttitle }`}>{ el.posttitle }</p>
            }

          </div>

        ))}

        <img src = "/img/propose/compass.png" className = {`${ s.propose__achievements__compass } absolute mobile`}/>

      </div>

      <h3 className = {`font-bold text-20 text-20-m ${ s.propose__text } relative`}>

        Мы свыше 5 лет занимаемся <br className = "mobile"/>комплексным обслуживанием <br className = "mobile"/>и ремонтом <br className = "desktop"/>
        любой сложности как <br className = "mobile"/>крупных яхт, так и маломерных судов, <br className = "mobile"/>являясь <br className = "desktop"/>
        одним из лидеров в сфере <br className = "mobile"/>сервисного обслуживания <br className = "desktop"/>
        водного <br className = "mobile"/>транспорта в Краснодарском крае <br />

        <ul>

          <li>
            
            оказываем полный комплекс услуг <br className = "mobile"/>по обслуживанию яхт и катеров <br className = "mobile"/>и гидроциклов: ремонт, сервис, <br className = "mobile"/>консервация, клининг, <br className = "desktop"/>
            установка <br className = "mobile"/>дополнительного оборудования, <br className = "mobile"/>продажа запчастей, раций и антенн, <br className = "mobile"/>креплений, изготовление тентов, <br />
            предпродажная и сезонная подготовка, <br className = "mobile"/>работа по корпусу и покраска, <br className = "mobile"/>изготовление мебели и интерьера
            
          </li>

          <li>
            
            работаем с крупнейшими <br className = "mobile"/>производителями водной техники, <br className = "mobile"/>являемся сервисом гарантийного <br className = "mobile"/>обслуживания верфей <br className = "desktop"/>
            в городе Сочи <br className = "mobile"/><em>(верфь “Кранчи”)</em>

          </li>

          <li>работаем как по наличному, так и <br className = "mobile"/>безналичному расчёту, принимаем <br className = "mobile"/>платежи от юридических лиц и <br className = "mobile"/>организаций</li>

          <li>делаем оценку технического состояния <br className = "mobile"/>водной техники, даём рекомендации <br className = "mobile"/>при покупке яхты или катера</li>

        </ul>

      </h3>

    </section>

  )

}

export default Propose;