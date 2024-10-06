import s from "./brands.module.scss";

const Brands = () => {

  return (

    <section className = {`flex center items-center ${ s.container } relative`}>

      <img src = "/img/brands/waves.png" className = {`${ s.container__waves } absolute desktop`}/>
      
      <img src = "/img/brands/compass.png" className = {`${ s.container__compass } relative desktop`}/>
      
      <img src = "/img/brands/nord.png" className = {`${ s.container__compass__item } ${ s.container__compass__item__nord } absolute`}/>
      <img src = "/img/brands/nord-east.png" className = {`${ s.container__compass__item } ${ s.container__compass__item__nord_east } absolute`}/>
      <img src = "/img/brands/east.png" className = {`${ s.container__compass__item } ${ s.container__compass__item__east } absolute`}/>
      <img src = "/img/brands/south-east.png" className = {`${ s.container__compass__item } ${ s.container__compass__item__south_east } absolute`}/>
      <img src = "/img/brands/south.png" className = {`${ s.container__compass__item } ${ s.container__compass__item__south } absolute desktop`}/>
      <img src = "/img/brands/south-west.png" className = {`${ s.container__compass__item } ${ s.container__compass__item__south_west } absolute desktop`}/>
      <img src = "/img/brands/west.png" className = {`${ s.container__compass__item } ${ s.container__compass__item__west } absolute`}/>
      <img src = "/img/brands/nord-west.png" className = {`${ s.container__compass__item } ${ s.container__compass__item__nord_west } absolute`}/>

    </section>

  )

}

export default Brands;