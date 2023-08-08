import styled from "styled-components"

export const NavStyle= styled.nav `
   width: 338px;
   height: 40px;
   margin: 55px auto; 

   display: flex;
   justify-content: space-between;
   align-items: center;

   img {
      width: 40px;
      height: inherit;
   }

   ul {
      display: none;
   }

   div {
      display: flex;
      align-items: center;
      gap: 19px; 

      ion-icon {
         font-size: 50px;
         color: white;
      }
   } 

   @media screen and ( min-width: 400px ) {
      width: 90%;
      height: 50px;
      margin: 25px auto;

      img {
         width: 50px;
      }

      ul {
         display: none;
      }      

      div {
         ion-icon {
            display: block;
         }
      }
      
   } 

   @media screen and ( min-width: 1440px) {
      width: 1300px;
      height: 80px;

      img {
         width: 80px;
      }

      ul {
         display: flex;
         justify-content: space-between;
         align-items: center;
         gap: 50px;
         list-style: none;

         font-size: 25px;
         a {
            color: white;
            text-decoration: none;
         }
      }
      
      
   }
`