import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    justify-content: space-around;
    width: 50%;
    height: 100px;
    position: fixed;
    top: 0;
    background-color: #F6E4CB;

    > div {
        width: 60vw;
        height: 100%;
        display: flex;
        // background-color: #F6B;
        > img {
            width: 20%;
            height: 20%;
        }
    } 
`;  

export const FlexEnd = styled.div `
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    background-color: #aaa;
`;

export const Input = styled.input `
    border-radius: 3px;
    border: 0px;
    display: block;
    margin: 0 0 1em;
    padding: 10px;
    background-color: #FAF1E5;
    box-shadow: -1px 1px 3px #AFAFAF;
    margin-left: 30px;
    margin-top: 10px;

    ::placeholder {
        color: #7D7973;
    }
`;

export const Menu = styled.nav `
    > ul {
        li {
            display: inline;
            margin-right: 30px;
        }
    }
`;

export const ProfileMenu = styled.div `
    height: 50px;
    width: 50px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;

    > img {
        height: 100%;
        width: 100%;
        border-radius: 100%;
    }
`;

export const Grid = styled.div `
    width: 50vw;
    height: 100%;
    background-color: #a7c8fc;
    
`
    
