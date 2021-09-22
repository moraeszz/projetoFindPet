import styled from "styled-components";
import Input from ".";

export const Container = styled.div`
  width: 100%;
  position: relative;
> input {
  width: 90%;
	margin: 0 auto;
	padding: 10px;
  border-style: none;
	border-radius: 50px;
  border: 0;
  padding-left: 10px;
  border-radius: 8px;
  font-family: Arial;
  background-color: #EEECEC; /*cinza*/
  margin-left: 5px;
}
 > label {
  height: 40px;
  margin-left: -350px;
  margin-bottom: -200px;
   align-items: center;
   transition: 0.2s ease-in-out;
   color: #605F5F;
   cursor: text;
   pointer-events: none;
  // background-color: #fc03f4; */rosa e texto no input*/
}
> input,
// > label {
  // width: 100%;
  height: 30px;
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
`;

export const bttn = styled.button`
  width: 70%;
  height: 40px;
  margin-top: 60px;
`;