import s from "./list.item.module.scss";

const ListItem = ({

  name = "",
  className,
  children,
  action = () => {}

}) => {

  return (

    <div
    
      onClick = { () => action( name ) }
      className = {`${ s.list_item } relative ${ className }`}
      
    >

      { children }

      <p className = {`${ s.list_item__name } relative ${ className } pointer`}>{ name }</p>

    </div>

  )

}
 
export default ListItem;