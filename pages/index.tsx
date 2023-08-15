import { Box } from "../components/box";
import { Card } from "../components/card";
import { Container } from "../components/container";

export default function Home() {
  return (
    <Container.body>
      <Box.introducion>
        <Card.header />
        <Card.body />
        <Card.footer />
      </Box.introducion>
      <Box.context />
    </Container.body>
  );
}
