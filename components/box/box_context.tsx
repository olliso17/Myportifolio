import {
  Box,
  Card,
  Container,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";

type BoxProps = {
  children: ReactNode;
};
export const BoxContext = ({ children }: BoxProps) => {
  return (
    <Flex
      bg="gray.900"
      color="black"
      maxW={"100%"}
      direction={"column"}
      width={{
        base: "100vw",
        lg: "50vw",
        xl: "50vw",
      }}
      // pl={[4, 8, 16, 32]}
      position={{
        base: "relative",
        lg: "absolute",
        xl: "absolute",
      }}
      justifyContent={"center"}
      alignItems={"center"}
      right={{ base: 0, lg: 0, xl: 0 }}
    >
      {children}
    </Flex>
  );
};
