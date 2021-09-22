import { Container, Grid, Input, Menu, ProfileMenu, FlexEnd } from "./styles";
import imgLogo from "../../assets/logo.png"

function Header() {
    return (
        <Container>

            <div>
                <img src={imgLogo} />
                <Input placeholder="Pesquisar" />
            </div>
            <FlexEnd>
                <Menu>
                    <ul>
                        <li>Início</li>
                        <li>Pets</li>
                        <li>Favoritos</li>
                        <li>Encontrar</li>
                        <li>Seja Membro</li>
                    </ul>
                </Menu>
                <ProfileMenu />
            </FlexEnd>

        </Container>
    );
}

export default Header;