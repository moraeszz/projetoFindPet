import Input from "../../components/Input";
import { Container, FormContainer } from "./styles";

function Modal() {

    return (
        <Container>
            <FormContainer>
                <Input placeholder='Nome da instituição' id="nomeInstituicao" />
                <select>
                    <option >Tipo de estabelecimento</option>
                    <option >ONG</option>
                    <option >Petshop</option>
                    <option >Veterinário</option>
                    <option >Canil</option>
                </select>
                <Input placeholder='CNPJ' id="cnpj" />
                <Input placeholder='E-mail' id="email" />
                <Input placeholder='Senha' id="senha" />
                <Input placeholder='Telefone' id="fone" />
                <Input placeholder='Celular' id="cel" />
                <Input placeholder='Endereço' id="endereco" />
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