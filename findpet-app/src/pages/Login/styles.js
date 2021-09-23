import React from 'react';
import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    text-align: center;
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
            width: 70vh;      
            margin-left: auto;
            margin-right: auto;
            font-size: 3em;
            font-family:  Roboto, sans-serif;
            display: flex;
            color: #FFB853;
            text-align: center;
            
            > h1{
                display:flex;
             > span {
                color: #C98822;
                display:flex;
                text-align: center;
            }
        }
            //background-color: blue;
        }

        > .texto{
            margin-right: 200px;
            text-align: center;
            align-items: center;
            
        }

    }

    > div {
        display: flex;
        flex:1 ;
        width: 100%;
        align-items: center;
        text-align: center;
        
        
    }

    
`;

export const FormContainer = styled.form`
    width: 60%;
    padding: 30px;
    display: flex;
    height: 40vh;
    flex-direction: column;
    border-radius: 20px;
    gap: 15px;
    box-shadow: 0px 0px 20px #00000055;
    > h1 {
        text-align: center;
    }
    background-color: #ffffff;


    > .btn1 {
        margin-top: 15px;
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


    > .check{
        display: flex;
        justify-content:space-between;
         width: 100%; 
        text-align: right;

        > a{
       font-size: 13px;
       margin-top: 3px;
        }

        > div {
            align-items: center;
            /* width: 100%;  */
            display: flex;
            /* justify-content:space-between; */
            text-align: center;
            gap: 2px;
        
        }
    }

    > .caixa{
        float: left;
        justify-content:space-between;
    }

        > p{
            font-size: 12px;
        }
`;


