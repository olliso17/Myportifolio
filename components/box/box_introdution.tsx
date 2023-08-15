import { Box, Card, Flex, Text } from "@chakra-ui/react";

export const BoxIntrodution = () => {
  return (
    <Flex
      bg="blue.400"
      color="black"
      minH={"100%"}
      maxW={"100%"}
      width={{
        base: "100vw",
        lg: "50vw",
        xl: "50vw",
      }}
      justifyContent={"center"}
      wrap={"wrap"}
      position={{
        base: "relative",
        lg: "fixed",
        xl: "fixed",
      }}
      bottom={{ base: 0, lg: 0, xl: 0 }}
      left={{ base: 0, lg: 0, xl: 0 }}
    >
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
        <Text>Patricia Silva Oliveira</Text>
      </Card>
    </Flex>
  );
};
