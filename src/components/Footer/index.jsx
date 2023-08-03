import { Container } from "./styles";

import LogoImg2 from "../../assets/Logo2.svg"

export function Footer() {
    return(
        <Container>
            <div>
                <img src={LogoImg2} alt="Food Explorer logo" />
                <p>food explorer</p>
            </div>

            <p>© 2023 - Todos os direitos reservados.</p>
        </Container>
    )
}