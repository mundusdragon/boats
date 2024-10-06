import Header from "./header";
import Footer from "./footer";

import s from "./carcas.module.scss";

const Carcas = ({ children, withNavigateProps = true, withMenu = true }) => {

  return (

    <div className = {`${ s.carcas } relative`}>

      <Header withNavigate = { withNavigateProps } withMenu = { withMenu }/>

      { children }

      { withNavigateProps && <Footer /> }

    </div>

  )

}

export default Carcas;