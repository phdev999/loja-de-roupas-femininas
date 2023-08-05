import styled from "styled-components"

export const NavStyle= styled.nav `
   width: 338px;
   height: 40px;
   margin: 0px auto; 

   display: flex;
   justify-content: space-between;
   align-items: center;

   img {
      width: 40px;
      height: inherit;
   }

   #insta-nav {
      transform: translateX(100%); 
   }   

   @media screen and ( mix-width: 1440px) {
         width: 1300px;
         height: 98px;

      #insta-nav {
         display: none;
      }
   }
`