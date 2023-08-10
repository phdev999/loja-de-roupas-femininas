import styled from "styled-components"

export const ButtonStyle= styled.button`
    width: 50px;
    height: 20px;

    font-size: 7px;

    border: none;
    border-radius: 5px;
    background: linear-gradient(#FF6F86, #EC819F);

    a {
        color: white;
        text-decoration: none;
    }

    :hover {
        cursor: pointer;
        color: red;
    }
`