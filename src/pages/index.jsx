import { useEffect } from "react";
import Carcas from "@/react/components/containers/carcas";
import Propose from "@/sections/propose";
import AboutUs from "@/sections/about";
import Messengers from "@/sections/messengers";
import Addresses from "@/sections/addresses";
import Form from "@/sections/form";
import Brands from "@/sections/brands";

import s from "./sections.module.scss";

export default function Home() {

  useEffect(() => {

    const hash = window.location.hash;

    if ( hash ) {

      const element = document.querySelector( hash );
      if ( element ) { element.scrollIntoView({ behavior: "smooth" }); }

    }}, []);

  return (

    <main className = "bg">

      <a id = "boats" href = "#boats"/>

      <Carcas withMenu = { true }>

        <Propose />

        <a id = "about" href = "#about" className = {`${ s.anchor__about } relative`}/>

        <AboutUs />
        
        <Messengers />

        <div className = {`flex column ${ s.reverse }`}>

          <div>

            <a id = "adresses" href = "#adresses"  className = {`${ s.anchor__adressess } relative`}/>

            <Addresses />

          </div>

          <div>

            <a id = "form" href = "#form"  className = {`${ s.anchor__form } relative`}/>

            <Form />

          </div>

        </div>

        <a id = "brands" href = "#brands" className = {`${ s.anchor__brands } relative`}/>

        <Brands />

        <a id = "props" href = "#props" className = {`${ s.anchor__props } relative`}/>

      </Carcas>

    </main>

  );

};