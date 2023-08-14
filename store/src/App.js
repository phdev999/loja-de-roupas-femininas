import './style.js';
import { Swiper, SwiperSlide } from "swiper/react"

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
import OurClient from './components/OurClient/index.js';
import Promotion from './components/Promotion/index.js';

import { sideBarSet } from './scripts/script.js';
import { products, conjuntos } from './data/data.js';

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
            <Swiper className="content-box"
               slidesPerView={4}
               autoplay= {true}
            >
               <SwiperSlide>
                  <DefaultProduct price={"$49,90"}/>
               </SwiperSlide>
            </Swiper>
         </section>
         <section className="box">
            <h3>calçados</h3>
            <Swiper className="content-box"
               slidesPerView={4}
               autoplay= {true}
            >
               <SwiperSlide>
                  <DefaultProduct price={"49,90"}/>
               </SwiperSlide>       
            </Swiper>
         </section>
         <section className="box">
            <h3>Cojuntos</h3>
            <Swiper className="content-box"
               slidesPerView={3}
               autoplay= {true}
            >
               {
                  conjuntos.map((conj) => {
                     return (
                        <SwiperSlide>
                           <Conjunto key={conj.id} title={conj.title} price={conj.price} imgsrc={conj.imgsrc} details={conj.details} />
                        </SwiperSlide>
                     )
                  })
               }
            </Swiper>
         </section>

         <h2 id='product'>Produtos</h2>
         <Swiper id='products-contain'
            slidesPerView={3}
            autoplay= {true}
         >
            {
               products.map((product) => {
                  return (
                     <SwiperSlide>
                        <Product key={product.id} src={product.imgsrc} title={product.title} price={product.price} />
                     </SwiperSlide>
                  )
               })
            }
         </Swiper>

         <h2 id="accessory">Acessórios</h2>
         <section id='accessory-contain'>
            <Accessory name="pulceira" price="R$19,90" />
            <Accessory name="colar" price="R$19,90" />
            <Accessory name="anel" price="R$19,90" />
            <Accessory name="óculos" price="R$19,90" />
         </section>

         <h2 id="launch">Lançamentos</h2>
         <Swiper id='launch-contain'
            slidesPerView={1}
            autoplay
         >
            <SwiperSlide>
               <img src="#" alt="foto produto lançado" />
            </SwiperSlide>
            <SwiperSlide>
               <img src="#" alt="foto produto lançado" />
            </SwiperSlide>
         </Swiper>

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
