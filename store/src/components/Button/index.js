import { ButtonStyle } from "./style"
import { Link } from "react-router-dom"

function Button({value}) {
   return (
      <ButtonStyle>
         <Link to="/productdetails" >{value}</Link>
      </ButtonStyle>
   )
}

export default Button