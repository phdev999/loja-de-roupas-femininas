import styled from "styled-components"


export const DProductStyle= styled.section`
    width: 100px;
    height: 150px;
    padding-bottom: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: none;
    color: black;

    background-color: white;
    img {
        width: 100%;
        height: 86px;
        border-radius: 0px 0px 10px 10px;

        background-color: #c9c9c9;
    }

    span {
        font-size: 12px;
    }

    @media screen and (min-width: 400px) {
        width: 200px;
        height: 300px;
        padding-bottom: 15px;

        img {
            height: 50%;
        }

        span {
            font-size: 30px;
        }

        button {
            width: 130px;
            height: 50px;
            font-size: 15px;
        }
    }

    @media screen and (min-width: 1440px) {
        width: 330px;
        height: 480px;

        span {
            font-size: 40px;
        }

        button {
            width: 205px;
            height: 70px;
            font-size: 25px;
        }
    }
`