import styled from "styled-components"

export const UsStyle= styled.section `
   width: 330px;
   height: 230px;
   margin: auto;
   color: white;
   text-align: center;

   div {
      display: grid;
      grid-template-areas: "if h"
                           "if ul";
      column-gap: 19px;
      align-items: center;

      iframe {
         width: 145px;
         height: 180px;

         grid-area: if;
      }

      h3 {
         word-wrap: break-word;
         font-size: 15px;
         grid-area: h;
      }    

      ul {
         text-align: left;
         margin: 19px auto;
         font-size: 15px;
         list-style: none;

         grid-area: ul;
      }
   }

   address {
      margin: 13px auto;
   }

   @media screen and (min-width: 1440px) {
      width: 50%;
      height: min-content;

      background-color: deepskyblue;

      iframe {
         width: 40%;
         height: 380px;
      }

      h3, ul {
         font-size: 25px;
      }
   }
`