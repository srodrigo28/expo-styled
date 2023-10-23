import { Link } from "expo-router"
import { Container, Title } from './styles'

export default function Dashboard() {
  return (
    <Container>
      <Title>Home</Title>
      <Link href="../App">Voltar</Link>
    </Container>
  );
}