import { Card, Center, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export const CardBody = () => {
  return (
    <Center>
      <Card
        width={{
          base: "100vw",
          lg: "40vw",
          xl: "40vw",
        }}
        height={{
          base: "10vh",
          lg: "20vh",
          xl: "20vh",
        }}
        margin={"1vh"}
      >
        <Text>Body description</Text>
      </Card>
    </Center>
  );
};
