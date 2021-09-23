import React from 'react';
import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #dcdcdc;
    /* margin-top: 150px;
    margin-left: 900px; */

    > main{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        float: left;
        flex: 2;
        //background-color: yellow;
        
        > img {
            width: 50%;
            height: 50%;
            position: relative;
            
            margin-left: 200px;
            //background-color: blue;
        }

        //> h1 {
        //    width: 70vh;
        //    padding: 10px;
        //    margin-top: 100%;
        //    margin-left: 400px;
        //    font-size: 8em;
        //    background-color: violet;
        //    font-family: roboto;
        //}

        > .titulo {
            width: 50vh;      
            margin-left: 310px;
            font-size: 4em;
            font-family: roboto;
            display:flex;
            color: #FFB853;
            > h1 >span {
                color: #C98822;
            }
            //background-color: blue;
        }

    }

    > div {
        display: flex;
        flex:1 ;
        width: 100%;
    }

    
`;

export const FormContainer = styled.form`
    width: 50%;
    padding: 30px;
    display: flex;
    height: 40vh;
    flex-direction: column;
    gap: 15px;
    box-shadow: 0px 0px 20px #00000055;
    > h1 {
        text-align: center;
    }
    background-color: #ffffff;


    > .btn1 {
        margin-top: 30px;
        height: 40px;
        background-color: #C98822;
        padding: 10px;
	    border: none;
	    border-radius: 10px;
    }

    > .btn2 {
        width: 150px;
        justify-content: center;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        background-color: #FFB853;
        padding: 10px;
	    border: none;
	    border-radius: 10px;
    }

    > a {
       font-size: 13px;
       
    }

    > .check{
        display: flex;
        justify-content: space-between;
        /* width: 80%; */
        /* background-color: #C98822; */
        text-align: right;
        > div {
            align-items: center;
            gap: 5px;
            display: flex;
            flex: -1 ;
        
        }
    }

    > .caixa{
        float: left;
    }
`;


