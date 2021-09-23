import Input from "../Input";
import { Container, FormContainer } from "./styles";

function Modal() {

    return (
        <Container>
            <FormContainer>
                <Input placeholder='Nome' id="nomeUsuario" />
                <Input placeholder='E-mail' id="email" />
                <Input placeholder='Senha' id="senha" />
                <Input placeholder='Telefone' id="fone" />
                <Input placeholder='Celular' id="cel" />
                <Input placeholder='Rua/Avenida' id="endereco" />
                <div>
                    <Input placeholder='Número' id="numero" />
                    <Input placeholder='Complemento' id="complemento" />
                </div>
                <button className="bttn">Cadastrar-se</button>
            </FormContainer>
        </Container>
    )
};

export default Modal;