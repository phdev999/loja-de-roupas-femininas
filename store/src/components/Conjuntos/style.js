import styled from "styled-components"


export const ConjuntoStyle= styled.section`
    width: 152px;
    height: 230px;
    padding-bottom: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: none;
    color: black;
    border-radius: 20px;
    background-color: white;
    img {
        width: 152px;
        height: 118px;

        border-radius: 20px;
        background-color: #c9c9c9;
    }

    span {
        font-size: 16px;
    }
    ul {
        text-align: left;
        font-size: 12px;
        list-style-position: inside;
    }
    button {
        width: 60px;
        height: 30px;
        border-radius: 10px;
    }

    @media screen and (min-width: 400px){
        width: 200px;
        height: 300px;

        img {
            width: 200px;
            height: 168px;
        }

        ul {
            font-size: 15px;
        }

        button {
            width: 100px;
            height: 40px;
            font-size: 15px;
        }
    }
    @media screen and (min-width: 1000px){
        width: 300px;
        height: 450px;

        img {
            width: 300px;
            height: 268px;
        }

        span {
            font-size: 25px;
        }

        ul {
            font-size: 18px;
        }

        button {
            width: 120px;
            height: 50px;
            font-size: 15px;
        }
    }
`