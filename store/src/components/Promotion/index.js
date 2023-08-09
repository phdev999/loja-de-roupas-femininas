import { PromotionStyle } from "./style"
import Discount from "../Discount/index"

function Promotion({src, porcent}) {

    return (
        <PromotionStyle>
            <Discount porcent={porcent}/>
            <img src={src} alt="imagem do produto promocional" />
        </PromotionStyle>
    )

}

export default Promotion