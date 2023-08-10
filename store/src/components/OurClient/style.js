import styled from "styled-components"

export const OurStyle= styled.section `
   width: 143px;
   height: 200px;
   margin-bottom: 39px;
   color: black;
   padding: 0px 20px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
   overflow: hidden;

   border-radius: 10px 0px 10px 0px;
   background-color: white;
   img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: #c9c9c9;
   }

   p {
      font-size: 12px;
   }

   @media screen and (min-width: 700px) {
      width: 243px;
      height: 300px;

      img {
         width: 200px;
         height: 200px;
      }

      p {
        font-size: 16px;
      }
   }
`