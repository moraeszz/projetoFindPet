import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
> input {
  width: 80%;
	margin: 0 auto;
	padding: 10px;
	border: none;
	border-radius: 50px;
  // border: 0;
  // padding-left: 10px;
  // border-radius: 3px;
  // font-family: sans-serif;
  background-color: #CCCCCC; /*cinza*/
}
 > label {
  // position: absolute;
  // left: 10px;
  height: 40px;
  margin-left: -200px;
  margin-bottom: -200px;
  // bottom: 10px;
  // display: flex;
  // align-items: center;
  // transition: 0.2s ease-in-out;
  // color: var(--textPrimary);
  // cursor: text;
  // pointer-events: none;
  // background-color: #fc03f4; */rosa e texto no input*/
}
> input,
// > label {
  // width: 100%;
  height: 40px;
  font-size: 16px;
  top: 10px;
  // background-color: #0390fc; */azul claro*/
}
// > input:focus {
  // border-bottom: 2px solid var(--primary);
}
// > input:not(:placeholder-shown) + label,
// > input:focus + label {
//   font-size: 14px;
 // color: var(--textPrimary);
//   top: -25px;
//   left: 0;
}

`
;