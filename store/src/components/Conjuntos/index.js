import Button from "../Button"
import { ConjuntoStyle } from "./style"

function Conjunto() {
   return (
      <ConjuntoStyle>
         <img src="" alt="" />
         <span>R$149,90</span>
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