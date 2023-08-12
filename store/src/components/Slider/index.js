import { SliderStyle } from "./style"

import { Swiper, SwiperSlide } from "swiper/react"
//import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'

function Slider() {

    return (
        <SliderStyle>

            <Swiper
                slidesPerView={1}
                pagination={ {clickable: true} }
                navigation={true}
                loop= {true}
                class="swiper"
            >
                <SwiperSlide>
                    <img className="slide-item" src="./assets/images/vestidopreto1.png" alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./assets/images/vestidopreto2.png" alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./assets/images/vestidovermelho.png" alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./assets/images/conjuntopretobranco.png" alt="slide" />
                </SwiperSlide>
            </Swiper>

        </SliderStyle>
    )

}

export default Slider