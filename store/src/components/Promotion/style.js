import styled from "styled-components"

export const PromotionStyle= styled.section `
   width: 210px;
   height: 311px;
   background-color: #c9c9c9;
   display: flex;
   position: relative;

   img {
      width: inherit;
   }

   @media screen and (min-width: 1000px) {
      width: 350px;
      height: 450px;
   }
`