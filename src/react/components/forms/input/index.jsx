import s from "./input.module.scss";

const Input = ({

	set,
	val = "",
	type = "text",
	name = "",
	place = "",
	refDOM = null,
	multiline = false,
	multilineRows = 5,
	readonly = false,
	onKeyUp = () => {},
  action = () => {},
  className

}) => {

  return (

    <div
    
      onClick = { () => action }
      className = {`${ s.input__container } relative`}
      
    >

      { name !== "" && <p className = {`${ s.input__name } relative ${ className }`}>{ name }</p> }

      { !readonly ?

        !multiline ?

          	<input 

              ref = { refDOM }
              value = { val }
              type = { type }
              placeholder = { place }
              onKeyUp = { onKeyUp }
              className = {`${ s.input } ${ className }`}
              onChange = {(event) => { set( event.target.value) } }
            
            />

          :	<textarea
          
              ref = { refDOM }
              rows = { multilineRows }
              placeholder = { place }
              onKeyUp = { onKeyUp }
              className = {`${ s.input } ${ s.input__area } ${ className }`}
              onChange = { (event) => { set( event.target.value) } }
          
          >

            { val }

          </textarea>

        :

          !multiline ?

          	<input 
          
              readOnly
              ref = { refDOM }
              value = { val }
              type = { type }
              placeholder = { place }
              onKeyUp = { onKeyUp }
              className = { `${ s.input } ${ className }` }
              onChange = { (event) => { set( event.target.value) } }
            
            />

          :	<textarea
          
              readOnly
              rows = { multilineRows }
              ref = { refDOM }
              placeholder = { place }
              onKeyUp = { onKeyUp }
              className = { `${ s.input } ${ s.input__area } ${ className }` }
              onChange = { (event) => { set( event.target.value) } }
          
          >

            { val }

          </textarea>

        }

    </div>

  )

}

export default Input;