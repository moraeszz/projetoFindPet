import React from 'react';
import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 400px;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    margin-top: 150px;
    margin-left: 900px;
    
`;

export const FormContainer = styled.form`
    width: 380px;
    padding: 30px;
    display: flex;
    height: 75vh;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    margin-left: -860px;
    margin-top: -30px;
    box-shadow: 0px 0px 20px #00000055;
    > h1 {
        text-align: center;
    }
    background-color: #FFFFFF;
`;

export const ContainerFundo = styled.div`
    
`;
