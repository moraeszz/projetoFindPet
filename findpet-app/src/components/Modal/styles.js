import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 9;
  top: 0;

  background-color: #333c;

  display: flex;
  justify-content: center;
  align-items: center;
    /* width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    //margin-top: 150px;
    margin-left:700px; */
    
`;

export const FormContainer = styled.form`
    width: 30vw;
    padding: 30px;
    display: flex;
    height: 90vh;
    z-index: 19;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    margin-top: -30px;
    box-shadow: 0px 0px 20px #00000055;
    > h1 {
        text-align: center;
    }
    background-color: #FFFFFF;

    > .bttn {
        width: 30%;
        height: max-content;
        background-color: #FFB853;
        padding: 10px;
        border: none;
        border-radius: 10px;
        margin-top: 20px;
    }

    > div {
        width: 100%;
        display: flex;
        gap: 8px;
    }

    > select { 
        width: 100%;
        margin: 0 auto;
        padding: 10px;
        border-style: none;
        border-radius: 50px;
        border: 0;
        padding-left: 10px;
        border-radius: 8px;
        font-family: Arial;
        background-color: #EEECEC; /*cinza*/
        margin-left: -5px;
        color: #707070;
        
    }

`;

