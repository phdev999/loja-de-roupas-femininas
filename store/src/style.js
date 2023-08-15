import styled from "styled-components"

export const HeaderStyle= styled.header `

    .sideBar {
        width: 0px;
        height: 100vh;
        display: none;
        color: white;

        background: #EC819F;
        border: .5px solid var(--secondary-color);
        ion-icon {
            margin: 20px;
            font-size: 30px;
            border-radius: 50%;
            background: black;
        }
        a {
            color: inherit;
            font-size: 15px;
            display: block;
            margin: 7px auto;
            text-decoration: none;
        }
    }
    .open {
        display: flex;
        flex-direction: column;
        gap: 14px;

        width: 300px;
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
        margin: 30px 0px;

        @media screen and (min-width: 400px) {
            font-size: 32px;
            margin: 32px 0px 32px;
        }
    }
    .box {
        margin-left: 36px;
        overflow: hidden;

        @media screen and ( min-width: 1000px ) {
           width: 75%;
           margin: auto;
        }
    }

    .box .content-box {
        display: flex;
        justify-content: flex-start;
        gap: 35px;
        overflow-x: auto;
        overflow-y: hidden;
        /* --webkit-scrollbar: none; */

        @media screen and ( min-width: 400px ) {
            padding-left: 36px;
        }

        @media screen and ( min-width: 1000px ) {
            padding-left: 0px; 
        }
    }

    .box div {
        width: 100%;
        margin-left: inherit;
        display: flex;
        justify-content: space-between;

        h3 {
            @media screen and ( min-width: 1000px ) {
               padding: 21px 0px 14px;
            }
        }
    }

    .box > h3 {
        text-align: left;
        margin-top: 15px;
        margin-bottom: 15px;
        margin-left: inherit;
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
        overflow-y: hidden;
    }

    #accessory-contain {
        margin: auto;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 20px 25px;

        @media screen and (min-width: 400px) {
            width: 50%;   
        }
    }

    #launch-contain {
        display: flex;
        gap: 8px;
        overflow: auto;
        padding-left: 36px;

        img {
            width: 226px;
            height: 280px;
            flex: none;

            background-color: #c9c9c9;
            object-fit: cover;
        }

        @media screen and (min-width: 1000px) {
            width: min-content;
            margin: auto;
            gap: 20px;

            img {
                width: 346px;
                height: 400px;
            }
        }
    }

    #promotion-contain {
        width: min-content;
        margin: 0px auto;
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

    button:hover {
        cursor: pointer;
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