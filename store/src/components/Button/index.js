import { ButtonStyle } from "./style"

function Button({value, link}) {
   return (
      <ButtonStyle>
         <a href={link}>{value}</a>
      </ButtonStyle>
   )
}

export default Button