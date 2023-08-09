import { DiscountStyle } from "./style"

function Discount({porcent}) {

    return (
        <DiscountStyle>
            <span>{porcent}</span>
            Off
        </DiscountStyle>
    )

}

export default Discount