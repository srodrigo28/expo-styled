import { Link } from "expo-router"
import { Container, Title, FormCadastro, InputApp, ButtonView, ButtonTouch, ButtonTitle } from './styles'

export default function Register() {
  return (
    <Container>
      <Title>Cadastro</Title>

      <FormCadastro>
        
        <InputApp placeholder="Nome" />
        <InputApp placeholder="E-mail"/>
        <InputApp placeholder="Senha"/>
        <InputApp placeholder="Confirmar Senha"/>
        
      </FormCadastro>

      <ButtonView>
        <Link href="/" asChild>
          <ButtonTouch>
            <ButtonTitle>Salvar</ButtonTitle>
          </ButtonTouch>
        </Link>

        <Link href="/" asChild>
          <ButtonTouch>
            <ButtonTitle>Voltar</ButtonTitle>
          </ButtonTouch>
        </Link>
      </ButtonView>

    </Container>
  );
}