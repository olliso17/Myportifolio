import { Box, Card, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export const CardHeader = () => {
  return (
    <>
      <Heading
        bgGradient="linear(to-l, gray.100, gray.200, gray.500)"
        bgClip="text"
        fontWeight="extrabold"
        as="h1"
        fontSize={{ base: "xl", lg: "3xl", xl: "3xl" }}
        textAlign="center"
        marginTop={"1vw"}
        className="animated-title"
      >
        Hi, my name is Patricia
      </Heading>
      <Text
        bgGradient="linear(to-l, gray.100, gray.200, gray.500)"
        bgClip="text"
        fontWeight="extrabold"
        className="animated-text"
        fontSize={{ base: "sm", lg: "lg", xl: "xl" }}
        margin={"1vw"}
      >
        I would like to demonstrate my study projects to everyone who is
        accessing my portfolio
      </Text>

      {/* <Text>Header</Text> */}
    </>
  );
};
