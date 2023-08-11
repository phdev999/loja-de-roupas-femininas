import styled from "styled-components"

export const AccessoryStyle= styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 121px;
    height: 180px;
    color: black;
    margin: auto;
    padding: 4px 0px 8px 0px;

    border-radius: 20px;
    background-color: white;

    img {
        width: inherit;
        height: 120px;
        border-radius: 50%;

        background-color: #c9c9c9;
    }

    #name, #price {
        font-size: 15px;
    }

    @media screen and (min-width: 400px) {
        width: 150px;
        height: 210px;

        img {
           height: 150px;
        }

        #name, #price {
            font-size: 20px;
        }
    }

    @media screen and (min-width: 1440px) {
        width: 200px;
        height: 300px;

        img {
            height: 200px;
        }

        #name, #price {
            font-size: 30px
        }
    }
`