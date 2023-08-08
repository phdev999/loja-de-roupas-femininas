import styled from "styled-components"

export const AccessoryStyle= styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 121px;
    height: 180px;

    border-radius: 20px;
    background-color: white;

    img {
        width: 120px;
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
           width: 150px;
           height: 150px;
        }

        #name, #price {
            font-size: 20px;
        }
    }
`