import Button from "../Button"
import { ConjuntoStyle } from "./style"

function Conjunto({title, price, imgsrc}) {
   return (
      <ConjuntoStyle>
         <img src={imgsrc} alt="foto do conjunto de roupa" />
         <span>{title}</span>
         <span>{price}</span>
         <ul>
            <li>short</li>
            <li>blusa</li>
            <li>sandalha</li>
         </ul>
         <Button value={"ver detalhes"}/>
      </ConjuntoStyle>
   )
}

export default Conjunto