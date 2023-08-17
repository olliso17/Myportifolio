import { Box, Card, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export const CardHeader = () => {
  return (
    <>
      <Heading layerStyle={"textAll"} className="animated-title">
        Hi, my name is Patricia Oliveira!
      </Heading>
      <Text layerStyle={"textAll"} className="animated-text">
        I would like to demonstrate my study projects to everyone who is
        accessing my portfolio
      </Text>
    </>
  );
};
