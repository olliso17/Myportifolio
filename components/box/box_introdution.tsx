import { Box, Card, Flex, Text } from "@chakra-ui/react";

export const BoxIntrodution = () => {
  return (
    <Flex
      bg="blue.400"
      color="black"
      minH={"100%"}
      width={{ base: "50vw", sm: "100vw", md: "100vw", lg: "50vw", xl: "50vw" }}
      pl={[4, 8, 16, 32]}
      wrap={"wrap"}
      position={{
        base: "fixed",
        sm: "relative",
        md: "relative",
        lg: "fixed",
        xl: "fixed",
      }}
      bottom={{ base: 0, lg: 0, xl: 0 }}
      left={{ base: 0, lg: 0, xl: 0 }}
    >
      <Card
        width={{
          base: "40vw",
          sm: "100vw",
          md: "100vw",
          lg: "40vw",
          xl: "40vw",
        }}
        height={{
          base: "20vh",
          sm: "10vh",
          md: "10vh",
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
