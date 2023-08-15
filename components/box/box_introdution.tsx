import { Box, Card, Center, Flex, Text } from "@chakra-ui/react";
import { Children, ReactNode } from "react";

type BoxProps = {
  children: ReactNode;
};

export const BoxIntrodution = ({ children }: BoxProps) => {
  return (
    <Flex
      bgGradient="linear(to-b, gray.800, gray.600, gray.400)"
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
      {children}
    </Flex>
  );
};
