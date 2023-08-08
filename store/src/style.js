import styled from "styled-components"


export const HeaderStyle= styled.header `

    .sideBar {
        width: 0px;
        display: none;

        background: white; 

        ion-icon {
            margin: 20px;
            color: white;
            font-size: 30px;
            border-radius: 50%;
            background: black;
        }
    }
    .open {
        display: block;
        width: 50vw;
        height: 100vh;
        position: absolute;
        top: 100px;
        right: 0px;
        z-index: 999;
    }
`

export const MainStyle= styled.main `
    section .content-box {
        display: flex;
        gap: 35px;
        overflow: auto;

        @media screen and ( min-width: 400px ) {
            padding-left: 36px;

        }

        @media screen and ( min-width: 1440px ) {
            gap: 50px;
            padding-left: 125px;

        }
    }

    #products-contain {
        display: flex;
        gap: 60px;
        overflow: auto;
    }

    #accessory-contain {
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        gap: 23px 20px;
    }
`

export const FooterStyle= styled.footer `


`