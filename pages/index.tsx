import { Box } from "../components/box";
import { Card } from "../components/card";
import { Container } from "../components/container";
import allDescriptions from "../util/myDescription";

export default function Home() {
  return (
    <Container.body>
      <Box.introducion>
        <Card.image />
        <Card.header />
        <Card.body />
        <Card.footer />
      </Box.introducion>
      <Box.context>
        <Card.context nameProject="task_go" description={allDescriptions[3]}/>
        <Card.context nameProject="Myportifolio" description={allDescriptions[4]}/>
      </Box.context>
    </Container.body>
  );
}
