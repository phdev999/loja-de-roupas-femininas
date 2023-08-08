import { AccessoryStyle } from "./style"

function Accessory({name, price}) {
   return (
      <AccessoryStyle>
         <img src="" alt="" />
         <span id="name">{name}</span>
         <span id="price">{price}</span>
      </AccessoryStyle>
   )
}

export default Accessory