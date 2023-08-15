import { Box, Card, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export const CardHeader = () => {
  return (
    <Card
      width={{
        base: "100vw",
        lg: "40vw",
        xl: "40vw",
      }}
      height={{
        base: "12vh",
        lg: "20vh",
        xl: "20vh",
      }}
      marginTop={"1vh"}
      marginBottom={{ base: "5vh", lg: "15vh", xl: "15vh" }}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Heading
        as="h1"
        fontSize={{ base: "xl", lg: "3xl", xl: "3xl" }}
        textAlign="center"
        marginTop={"1vw"}
        className="animated-title"
      >
        Hi, my name is Patricia
      </Heading>
      <Text
        className="animated-text"
        fontSize={{ base: "sm", lg: "lg", xl: "xl" }}
        margin={"1vw"}
      >
        I would like to demonstrate my study projects to everyone who is
        accessing my portfolio
      </Text>

      {/* <Text>Header</Text> */}
    </Card>
  );
};
