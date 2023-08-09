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
    color: white;
    text-align: center;

    h2 {
        padding: 21px 0px 14px;
    }
    .box {
        margin-left: 36px;
    }

    .box .content-box {
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

    .box div {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .box h3 {
        margin-bottom: 7px;
    }

    section select {
        font-size: 16px;
        font-weight: bold;
        color: white;
        border: none;
        outline: none;
        background: transparent;
    }

    #product, #accessory, #promotion, #launch, #findus, #review {
        padding: 27px 0px;
    }
    #products-contain {
        margin-left: 53px;
        display: flex;
        gap: 18px;
        overflow: auto;
    }

    #accessory-contain {
        margin: auto;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 20px 25px;
    }

    #launch-contain {
        margin-left: 36px;
        display: flex;
        gap: 8px;
        overflow: auto;

        img {
            width: 226px;
            height: 280px;

            background-color: #c9c9c9;
        }
    }

    #promotion-contain {
        width: min-content;
        margin: 100px auto;
        display:flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 25px;

        @media screen and (min-width: 1000px) {
            flex-direction: row;
        }
    }

    #review-container {
        width: 400px;
        margin: auto;
        display:flex;
        flex-wrap: wrap;
        gap: 40px;

        justify-content: center;
        align-items: center;

        @media screen and (min-width: 700px) {
            width: 600px;
        }
    }

`

export const FooterStyle= styled.footer `
    height: 374px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 31px 17px 31px;

    background-color: #C642A7;
    ul {
        display: flex;
        gap: 25px;
        list-style: none;

        li a ion-icon {
            width: 30px;
            height: 30px;
        }
    }

    form {
        justify-self: start;

        fieldset {
            border: none;
        }
        legend {
            color: white;
            font-size: 20px;
        }
        input {
            color: black;
            width: 195px;
            height: 40px;
            margin: 10px 0px 18px;
            font-size: 15px;
        }
        button {
            color: white;
            font-size: 15px;
            width: 120px;
            height: 38px;
            background-color: black;
            border: none;
            border-radius: 7px;
        }

    }
    #pay span {
        color: #c1c1c1;
        font-size: 20px;
    }
    #pay {
        div {
            display: flex;
            gap: 10px;
        }
    }
`