import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
    return(
        <Container>
            <header>
                <img src="https://github.com/MathiasBergz.png" alt="Food Explorer logo" />
                <h1>food explorer</h1>
            </header>
            <Form>
                <h2>Faça login</h2>
                <p>Email</p>

                <Input placeholder="Exemplo: exemplo@exemplo.com.br" type="text"/>

                <p>Senha</p>

                <Input placeholder="No mínimo 6 caracteres" type="password"/>

                <Button title="Entrar"/>

                <a href="#">Criar uma conta</a>
            </Form>
        </Container>
    )
}