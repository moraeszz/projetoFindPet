import Input from "../../components/Input";
import { Container, FormContainer, ContainerFundo } from "./styles";

function Fundo () {
    return (
        <>
            <ContainerFundo>
                <div>
                   <img src=""/>
               </div>
            </ContainerFundo>
        </>
    )
};

function Login () {
    return (
        <Container>
            <FormContainer>
                <Input label="E-mail" id="email" />
                <Input label="Senha" id="senha" />
				<a href="#">forgot your password?</a>
                <button class="btn">Entrar</button>
                <button class="btn">Cadastrar</button>
            </FormContainer>
        </Container>
    )  
};

export default Login;