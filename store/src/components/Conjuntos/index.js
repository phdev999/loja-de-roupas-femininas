import Button from "../Button"
import { ConjuntoStyle } from "./style"

function Conjunto({title, price, imgsrc, details}) {
   return (
      <ConjuntoStyle>
         <img src={imgsrc} alt="foto do conjunto de roupa" />
         <span>{title}</span>
         <span>{price}</span>
         <ul>
            {
               details.map((content) => {
                  return (
                     <li>{content}</li>
                  )
               })
            }
         </ul>
         <Button value={"ver detalhes"}/>
      </ConjuntoStyle>
   )
}

export default Conjunto