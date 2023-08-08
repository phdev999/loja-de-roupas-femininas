import styled from "styled-components"

export const ProductStyle= styled.section`
    width: 120px;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: none;
    padding-bottom: 8px;

    border-radius: 20px;
    background-color: white;
    img {
        width: 100%;
        height: 150px;
        border-radius: 20px;

        background-color: #c9c9c9;
    }

    #name {
        font-size: 12px;
    }

    #price {
        font-size: 10px;
    }

    button {
        width: 60px;
        height: 20px;
        font-size: 7px;
    }

    @media screen and ( min-width: 400px ) {
        width: 250px;
        height: 400px;
        padding-bottom: 10px;

        img {
           height: 250px;
           border-radius: 20px;
        }

        #name {
           font-size: 30px;
        }

        #price {
            font-size: 20px;
        }

        button {
           width: 150px;
           height: 50px;
           padding: 5px 10px;
           font-size: 20px;
        }
    }

    @media screen and (min-width: 1000px) {
        width: 390px;
        height: 700px;
        padding-bottom: 25px;
        overflow: hidden;

        img {
           height: 75%;
           border-radius: 20px;
        }    

        #name {
           font-size: 40px;
        }

        #price {
           font-size: 30px;
        }

        button {
           width: 290px;
           height: 60px;
           font-size: 30px;
        }

    }
`