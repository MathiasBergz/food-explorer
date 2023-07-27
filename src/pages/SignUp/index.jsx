import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
    return(
        <Container>
            <header>
                <img src="https://github.com/MathiasBergz.png" alt="Food Explorer logo" />
                <h1>food explorer</h1>
            </header>
            <Form>
                <h2>Crie sua conta</h2>

                <p>Seu nome</p>

                <Input placeholder="Exemplo: Maria da Silva" type="text" />

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