import { Box, Card, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export const CardHeader = () => {
  return (
    <>
      <Heading
        fontFamily="fontFamily"
        bgColor="gray.200"
        bgClip="text"
        fontWeight="extrabold"
        fontSize={{ base: "xl", lg: "3xl", xl: "3xl" }}
        textAlign="center"
        marginTop={"1vw"}
        padding={0}
        className="animated-title"
      >
        Hi, my name is Patricia Oliveira!
      </Heading>
      <Text
        fontFamily="fontFamily"
        bgColor="gray.200"
        bgClip="text"
        fontWeight="extrabold"
        textAlign="center"
        padding={0}
        className="animated-text"
        fontSize={{ base: "sm", lg: "lg", xl: "xl" }}
        margin={"0.5vw"}
      >
        I would like to demonstrate my study projects to everyone who is
        accessing my portfolio
      </Text>
    </>
  );
};
