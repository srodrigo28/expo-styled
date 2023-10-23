import { Link } from "expo-router"
import { Container, Title } from './styles'
import { Button } from "react-native"

export default function Home() {
  return (
    <Container>
      <Title>Home</Title>
      <Link href="/" asChild>
        <Button title="Voltar" />
      </Link>
    </Container>
  );
}