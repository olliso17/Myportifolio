import { Box } from "../components/box";
import { Container } from "../components/container";

export default function Home() {
  return (
    <Container.page>
      <Container.body>
        <Box.introducion />
        <Box.context />
      </Container.body>
    </Container.page>
  );
}
