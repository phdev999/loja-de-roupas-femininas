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
import Conjunto from './components/Conjuntos/index.js';

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
           <a href="#category" >Categorias</a>
           <a href="#product" >Produtos</a>
           <a href="#accessory" >Acessórios</a>
           <a href="#launch" >Lançamentos</a>
           <a href="#promotion" >Promoções</a>
           <a href="#findus" >Encontre-nos</a>
           <a href="#review" >Nossos Clientes</a>
        </aside>
        <Slider />
      </HeaderStyle>
      <MainStyle>
         <h2 id='category'>Categorias</h2>
         <section className="box">
            <div>
               <h3>Roupas</h3>
               <select>
                  <option selected>Filtrar</option>
                  <option>Roupas</option>
                  <option>Calçados</option>
                  <option>Conjuntos</option>
               </select>
            </div>
            <div className="content-box">
               <DefaultProduct price={"$49,90"}/>
               <DefaultProduct price={"49,90"}/>
               <DefaultProduct price={"49,90"}/>
               <DefaultProduct price={"49,90"}/>
            </div>
         </section>
         <section className="box">
            <h3>calçados</h3>
            <div className="content-box">
               <DefaultProduct price={"49,90"}/>
               <DefaultProduct price={"49,90"}/>
               <DefaultProduct price={"49,90"}/>
               <DefaultProduct price={"49,90"}/>
            </div>
         </section>
         <section className="box">
            <h3>Cojuntos</h3>
            <div className="content-box">
               <Conjunto />
               <Conjunto />
               <Conjunto />
               <Conjunto />
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

         <h2 id="accessory">Acessórios</h2>
         <section id='accessory-contain'>
            <Accessory name="pulceira" price="R$19,90" />
            <Accessory name="colar" price="R$19,90" />
            <Accessory name="anel" price="R$19,90" />
            <Accessory name="óculos" price="R$19,90" />
         </section>

         <h2 id="launch">Lançamentos</h2>
         <section id='launch-contain'>
            <img src="#" alt="foto produto lançado" />
            <img src="#" alt="foto produto lançado" />
         </section>

         <h2 id="promotion">Promoções</h2>
         <section id='promotion-contain'>
            <Promotion src={"https://"} porcent={"100%"} />
            <Promotion src={"https://"} porcent={"30%"} />
            <Promotion src={"https://"} porcent={"30%"} />
            <Promotion src={"https://"} porcent={"30%"} />
            <Promotion src={"https://"} porcent={"30%"} />
         </section>

         <h2 id="findus">Encontre-nos</h2>
         <section id='location'>
            <Findus address={"rua xyz, nº 2222 - centro cacoal"} hour={"7h - 18h"}/>
         </section>

         <h2 id='review'>Nossos clientes</h2>
         <section id='review-container'>
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
