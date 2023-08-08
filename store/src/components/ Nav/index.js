import { NavStyle } from "./style"
import { sideBarSet } from "../../scripts/script"

function Nav() {

    
    return (
        <NavStyle>
            <img src="./assets/images/logo.png" alt="logo da loja" />
            <ul>
                <li><a href="#Categorias" >Categorias</a></li>
                <li><a href="#Produtos" >Produtos</a></li>
                <li><a href="#acessorios" >Acessórios</a></li>
                <li><a href="#lancamentos" >Lançamentos</a></li>
                <li><a href="#promocoes" >Promoções</a></li>
            </ul>
            <div>
                <img id="insta-nav" src="./assets/images/instagram.png" alt="logo instagram" />
                <ion-icon onClick={sideBarSet.open} id="menu" name="menu-outline"></ion-icon>
            </div>
        </NavStyle>
    )

}

export default Nav 