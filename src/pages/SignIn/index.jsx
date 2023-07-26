import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
    return(
        <Container>
            <Form>
                <header>
                    <img src="../../assets/Logo.png" alt="Food Explorer logo" />
                    <h1>food explorer</h1>
                </header>

                <p>Email</p>

                <Input placeholder="Exemplo: exemplo@exemplo.com.br"/>

                <p>Senha</p>

                <Input placeholder="No mínimo 6 caracteres"/>

                <Button title="Entrar"/>

                <a href="#">Criar uma conta</a>
            </Form>
        </Container>
    )
}