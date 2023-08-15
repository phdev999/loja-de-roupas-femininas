import PDStyle from "./style"

function ProductDetails({obj}) {
    return (
        <PDStyle>
          <img src={obj.imgsrc} alt="foto do produto" />
          <div id="info">
             <h1>{obj.title}</h1>
             <ul id="description">
                <li>{obj.details}</li>
             </ul>
             <div>
                <small>gostou do produto? então entre em contato.</small>
                <Button value="Entrar em contato" link={"#"}/>
             </div>
          </div>
        </PDStyle>
    )
}

export default ProductDetails