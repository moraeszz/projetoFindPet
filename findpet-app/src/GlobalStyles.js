import styled, { createGlobalStyle } from "styled-components";
import { MenuItem } from "./components/Header/styles";

export const GlobalStyles = createGlobalStyle`
    :root {
        --primary: #C98822;
        --secondary: #FFB853;
        --logoColor: #935B00;
        --headerColor: #F6E4CB;
        --text: #000000;
        --backgroundColor: #F3F3F3;
    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Roboto', 'sans-serif';
    }

    body {
        overflow-x: hidden;
    }

    /* @media(max-width: 1000px) {
        ${MenuItem} {
            background-color: aquamarine;
        }
    } */
`;

export const Body = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: center;
    background-color: var(--backgroundColor);
    overflow-x: hidden;
    overflow-y: scroll;
`;

export const Container = styled.div`
    margin-top: 75px;
    width: 1200px;
    height: auto;
    background-color: var(--backgroundColor);
`;

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
`;
