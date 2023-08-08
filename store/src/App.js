import './style.js';

import { HeaderStyle } from './style.js';
import { MainStyle } from './style.js';
import { FooterStyle } from './style.js';
import Nav from "./components/ Nav/index.js"
import Slider from "./components/Slider/index"
import DefaultProduct from './components/DefaultProduct/index.js';
import Product from './components/Product/index.js';
import Accessory from './components/Accessory/index.js';

import { sideBarSet } from './scripts/script.js';

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
      </MainStyle>
      <FooterStyle>

      </FooterStyle>
    </>
  );
}

export default App;
