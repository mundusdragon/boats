import s from "./addresses.module.scss";

const Addresses = ({}) => {

  const textToCopy = "+79673154847";

  const copyToClipboard = () => {

    navigator.clipboard.writeText( textToCopy )
    
      .then(() => {
        alert('Номер скопирован');
      })
      .catch(err => {
        console.error('Не удалось скопировать номер: ', err);
      });

  };

  return (

    <section className = {`${ s.container } relative`}>

      <img src = "/img/addresses/waves.png" className = {`${ s.container__waves } absolute desktop`}/>
      <div className = {`${ s.container__back } absolute desktop`}/>
      <img src = "/img/addresses/wave.png" className = {`${ s.container__wave } ${ s.container__wave__top } absolute desktop`}/>
      
      <img src = "/img/addresses/wave-up.png" className = {`${ s.container__back__mobile } absolute mobile`}/>

      <div className = {`flex center items-center ${ s.container__title } relative desktop-flex`}>

        <div className = {`${ s.container__title__liner }`}/>
        <h6 className = {`font-bold relative`}>Наш адрес в Сочи:</h6>
        <div className = {`${ s.container__title__liner }`}/>

      </div>

      <div className = {`flex items-center between ${ s.address } relative`}>

        <div className = {`${ s.address__map__container } relative`}>
          
          <div className = {`flex center items-center ${ s.address__map__container__frame__outside }`}>
          
            <div className = {`flex center items-center ${ s.address__map__container__frame__inside }`}>

              <iframe
              
                src = "https://yandex.ru/map-widget/v1/?ll=39.717177%2C43.632045&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo0NzQxODUyMTEzEmrQoNC-0YHRgdC40Y8sINCa0YDQsNGB0L3QvtC00LDRgNGB0LrQuNC5INC60YDQsNC5LCDQodC-0YfQuCwg0JLQuNC90L7Qs9GA0LDQtNC90YvQuSDQv9C10YDQtdGD0LvQvtC6LCAz0YEyIgoNY94eQhU2hy5C&z=16.59"
                frameborder = "1"
                allowfullscreen = "true"
                className = {`${ s.address__map__container__map } relative`}
                
              />

            </div> 
              
          </div>
          
        </div>

        <h6 className = {`${ s.address__text } text-center relative`}>

          Главный офис: <br /><br />

          <span className = { s.address__text__middle }>
            
            Большой Сочи,  Виноградный переулок, <br className = "mobile"/>дом 3, строение 2
            <br /><br />
            заезд через шлагбаум, <br className = "mobile"/>удобная парковка
            <br /><br />

          </span>

          <span className = {`${ s.address__text__bottom } pointer`} onClick = { copyToClipboard }>

            телефон: 8 (967) 315-48-47

          </span>

          <br />

          <span className = {`${ s.address__text__bottom__note } desktop`} onClick = { copyToClipboard }>

            (нажмите, чтобы скопировать)

          </span>

        </h6>

      </div>

      <div className = {`flex center text-center ${ s.container__call } relative desktop`}>

        <div className = {`${ s.container__call__liner } ${ s.container__call__liner__top } absolute`}/>

        <p className = {`${ s.container__call__text } relative`}>

          Остались вопросы? Заполните форму ниже <br /><br />

          <span>
            
            Мы свяжемся с Вами для обсуждения всех деталей. Укажите, пожалуйста, 
            информацию о вашем судне, выберите тариф и тип необходимых услуг, <br />
            а наши эксперты предложат лучшие решения для его ремонта или отделки.
            
          </span>

        </p>

        <div className = {`${ s.container__call__liner } ${ s.container__call__liner__bottom } absolute`}/>

      </div>

    </section>

  )

}

export default Addresses;