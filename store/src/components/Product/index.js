import { ProductStyle } from "./style"
import Button from "../Button/index"

function Product({src, alt, name, price, link}) {
   return (
      <ProductStyle>
         <img src={src} alt={link} />
         <span id="name">{name}</span>
         <span id="price">{price}</span>
         <Button value="Reserve o seu" link={link}/>
      </ProductStyle>
   )
}

export default Product