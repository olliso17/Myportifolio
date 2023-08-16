import { Box, Card, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export const CardHeader = () => {
  return (
    <Card
      // border={"solid"}
      // borderColor={"purple.200"}
      width={{
        base: "90vw",
        lg: "40vw",
        xl: "40vw",
      }}
      bg={"gray.800"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-around"}
      borderRadius={"1vw"}
      margin={"1vw"}
    >
      <Heading
        bgColor="gray.200"
        bgClip="text"
        fontWeight="extrabold"
        fontSize={{ base: "xl", lg: "3xl", xl: "3xl" }}
        textAlign="center"
        marginTop={"1vw"}
        padding={0}
        className="animated-title"
      >
        Hi, my name is Patricia
      </Heading>
      <Text
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
    </Card>
  );
};
