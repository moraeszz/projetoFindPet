import Login from "./pages/Login";
import { Input } from "./components/Input";
import { GlobalStyles } from "./GlobalStyles";
import Modal from "./components/Modal";
import OpcoesCadastro from "../src/components/OpcoesCadastro";

function App() {
  return (
    <>
      <GlobalStyles />
      <Login /> 
      <Modal /> 
      <OpcoesCadastro/> 
    </>
  );
}

export default App;

