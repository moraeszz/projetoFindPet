import Input from "../../components/Input";
import { Container, FormContainer, ContainerFundo } from "./styles";
import fundo from "../../assets/dog.png"
import Modal from "../../components/Modal";
import OpcoesCadastro from "../../components/OpcoesCadastro";

function Login() {
    return (
        <Container>
            <main>
                <div className="titulo">
                    <h1> <span>Find</span> Pet</h1>
                </div>
                <div className="texto">
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br> 
                        </br> incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <img src={fundo} />
            </main>
            <div>
                <FormContainer>
                    <Input placeholder="E-mail" id="email" />
                    <Input placeholder="Senha" id="senha" />
                    <div className="check">
                        <a href="#">esqueceu a senha?</a>
                        <div>
                            <input type="checkbox" placeholder="teste" className="caixa" />
                            <p> lembrar-me </p>
                        </div>
                    </div>
                    <button className="btn1">Entrar</button>
                    <button className="btn2">Cadastrar-se</button>
                </FormContainer>
            </div>
        </Container>
    )
};

export default Login;