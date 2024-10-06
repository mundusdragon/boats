import s from "./button.module.scss";

const Button = ({

  children,
  name = "",
  className = "",
  defaultColor = false,
  action = () => {}

}) => {

  return (

    <button
    
      onClick = { action }
      className = {`flex items-center justify-center ${ s.button } ${ defaultColor && s.button__default_color } ${ className } relative pointer`}
      
    >

      { name.length > 0 && <p className = { s.button__name }>{ name }</p> }

      { children }

    </button>

  )

}

export default Button;