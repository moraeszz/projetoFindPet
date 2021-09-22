import Input from "../../components/Input";
import { Container, FormContainer, ContainerFundo } from "./styles";
import fundo from "../../assets/dog.png"

function Login() {
    return (
        <Container>
            <main>
                <div className="titulo">
                    <h1> <span>Find</span> Pet</h1>
                </div>    
                <img src={fundo} />
            </main>
            <div>
                <FormContainer>
                    <Input placeholder="E-mail" id="email" />
                    <Input placeholder="Senha" id="senha" />
                    <input type="checkbox" placeholder="teste"/>
                    <a href="#">esqueceu a senha?</a> 
                    <button className="btn1">Entrar</button>
                    <button className="btn2">Cadastrar-se</button>
                </FormContainer>
            </div>
        </Container>
    )
};

export default Login;