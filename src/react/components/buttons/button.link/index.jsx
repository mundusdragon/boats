import Link from "next/link";
import Button from "../button";

import s from "./button.link.module.scss";

const ButtonLink = ({

  href = "",
  name = "",
  className,
  children

}) => {

  return (

    <Link

      href = { href }
      className = {`${ s.link } ${ className }`}

    >

      <Button

        name = { name }
        children = { children }

      />

    </Link>

  )

}

export default ButtonLink;