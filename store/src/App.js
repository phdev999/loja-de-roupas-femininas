import './style.js';

import { HeaderStyle } from './style.js';
import { MainStyle } from './style.js';
import { FooterStyle } from './style.js';
import Nav from "./components/ Nav/index.js"
import Slider from "./components/Slider/index"
import DefaultProduct from './components/DefaultProduct/index.js';
import Product from './components/Product/index.js';
import Accessory from './components/Accessory/index.js';
import Findus from './components/Findus/index.js';
import Pay from './components/Pay/index.js';


import { sideBarSet } from './scripts/script.js';
import Promotion from './components/Promotion/index.js';
import OurClient from './components/OurClient/index.js';

function App() {
  return (
    <>
      <HeaderStyle >
        <Nav />
        <aside className='sideBar'>
           <ion-icon onClick={sideBarSet.close} name="close-outline"></ion-icon>
           <a href="#categorias" >Categorias</a>
        </aside>
        <Slider />
      </HeaderStyle>
      <MainStyle>
         <h2 id='category'>Categorias</h2>
         <section className="">
            <h3>Roupas</h3>
            <div className="content-box">
               <DefaultProduct />
               <DefaultProduct />
               <DefaultProduct />
               <DefaultProduct />
            </div>
         </section>
         <h2 id='product'>Produtos</h2>
         <section id='products-contain'>
            <Product src={""} alt={"foto do produto"} name={"vestido xyz"} price={"$79,90"} link={"#"}/>
            <Product src={""} alt={"foto do produto"} name={"vestido xyz"} price={"$79,90"} link={"#"}/>
            <Product src={""} alt={"foto do produto"} name={"vestido xyz"} price={"$79,90"} link={"#"}/>
            <Product src={""} alt={"foto do produto"} name={"vestido xyz"} price={"$79,90"} link={"#"}/>
            <Product src={""} alt={"foto do produto"} name={"vestido xyz"} price={"$79,90"} link={"#"}/>
         </section>
         <h2>Acessórios</h2>
         <section id='accessory-contain'>
            <Accessory name="pulceira" price="R$19,90" />
            <Accessory name="colar" price="R$19,90" />
            <Accessory name="anel" price="R$19,90" />
            <Accessory name="óculos" price="R$19,90" />
         </section>
         <h2>Promoções</h2>
         <section id='promotion-contain'>
            <Promotion src={"https://"} porcent={"100%"} />
            <Promotion src={"https://"} porcent={"30%"} />
            <Promotion src={"https://"} porcent={"30%"} />
            <Promotion src={"https://"} porcent={"30%"} />
            <Promotion src={"https://"} porcent={"30%"} />
         </section>
         <h2>Encontre-nos</h2>
         <section id='location'>
            <Findus address={"rua xyz, nº 2222 - centro cacoal"} hour={"7h - 18h"}/>
         </section>
         <h2>Nossos clientes</h2>
         <section id='review'>
            <OurClient />
            <OurClient />
            <OurClient />
            <OurClient />
         </section>
      </MainStyle>
      <FooterStyle>
         <ul>
            <li>
               <a href="#" >
                  <ion-icon name="logo-whatsapp" ></ion-icon>
               </a>
            </li>
            <li>
               <a href="#" >
                  <ion-icon name="logo-instagram" ></ion-icon>
               </a>
            </li>
            <li>
               <a href="#" >
                  <ion-icon name="logo-facebook" ></ion-icon>
               </a>
            </li>
         </ul>
         <form method='post'>
            <fieldset>
               <legend>receber ofertas por email</legend>
               <input type='text' placeholder='email'/>
            </fieldset>
            <button>receber ofertas</button>
         </form>
         <div id='pay'>
            <span>formas de pagamento</span>
            {/* de acordo com o cliente */}
            <div>
               <Pay content={"visa"}/>
               <Pay content={"master card"}/>
               <Pay content={"pix"}/>
            </div>
         </div>
      </FooterStyle>
    </>
  );
}

export default App;
