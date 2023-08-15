import { DProductStyle } from "./style"
import Button from "../Button/index"

function DefaultProduct({price, src}) {
   return (
      <DProductStyle>
         <img src={src} alt="imagem do produto" />
         <span>{price}</span>
         <Button value={"ver detalhes"} link={"#"}/>
      </DProductStyle>
   )
}

export default DefaultProduct