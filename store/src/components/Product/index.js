import { ProductStyle } from "./style"
import Button from "../Button/index"

function Product({src, title, price}) {
   return (
      <ProductStyle>
         <img src={src} alt={"foto do produto"} />
         <span id="name">{title}</span>
         <span id="price">{price}</span>
         <Button value="Reserve o seu" />
      </ProductStyle>
   )
}

export default Product