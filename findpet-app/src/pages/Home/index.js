import Input from "../../components/Input";
import { Container, FormContainer, ContainerFundo } from "./styles";

function Home () {
    return (
        <Container>
            <FormContainer>
                <Input label="Nome da instituição" id="nomeInstituicao" />
                
                <Input label="CNPJ" id="cnpj" />
                <Input label="E-mail" id="email" />
                <Input label="Senha" id="senha" />
                <Input label="Telefone" id="fone" />
                <Input label="Celular" id="cel" />
                <Input label="Endereço" id="endereco" />

                <button class="bttn">Cadastrar-se</button>
            </FormContainer>
        </Container>
    )  
};

export default Home;