import Input from "../Input";
import { Container, FormContainer } from "./styles";
import Cadastro from "../OpcoesCadastro";
import fechar from "../../assets/fechar.png";

function OpcoesCadastro() {

    return (
        <Container>
            <FormContainer>
                <div className="imgX">
                    <img src={fechar} />
                </div>   
                <div className="titulo">
                    <p>Cadastrar-se como...</p>
                </div>    
                <button className="bttn1">Usuário comum</button>
                <button className="bttn2">Instituição</button>
            </FormContainer>
        </Container>
    )
};

export default OpcoesCadastro;