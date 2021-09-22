import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --primary: #C98822;
        --secondary: #FFB853;
        --logoColor: #935B00;
        --headerColor: #F6E4CB;
        --text: #000000;
    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    button {
        background-color: var(--primary);
        cursor: pointer;
        color: #ffffff;
        font-weight: bold;
        padding: 10px;

    }
`;

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #999;
`;