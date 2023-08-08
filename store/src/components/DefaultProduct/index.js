import { DProductStyle } from "./style"
import Button from "../Button/index"

function DefaultProduct({price}) {
   return (
      <DProductStyle>
         <img src="" alt="imagem do produto" />
         <span>$49,90</span>
         <Button value={"ver detalhes"} link={"#"}/>
      </DProductStyle>
   )
}

export default DefaultProduct