import styled from "styled-components"

export const SliderStyle= styled.section`

    .swiper {
        width: 100%;
        /* height: 218px; */
        background-position: center;
        background-size: cover;
    }

    .swiper-button-prev,
    .swiper-button-next {
        color: #EC819F;
    }
/* 
    .swiper-container::part(bullet-active) {
        color: violet;
    } */

    @media screen and (min-width: 1000px) {
        width: 100%;
        height: 754px;
    }
`