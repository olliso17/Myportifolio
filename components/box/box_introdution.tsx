import { Box, Card, Flex, Text } from "@chakra-ui/react";

export const BoxIntrodution = () => {
  return (
    <Flex
      bg="blue.400"
      color="black"
      minH={"100%"}
      width={"50vw"}
      position={"fixed"}
      bottom={0}
      left={0}
    >
      <Card width={"40vw"} height={"20vh"} margin={"1vh"}>
        <Text>Patricia Silva Oliveira</Text>
      </Card>
    </Flex>
  );
};
