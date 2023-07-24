import { Container, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export const ContainerBody = ({ children }: ContainerProps) => {
  return (
    <Flex
      height={"100vh"}
      maxW={"100vw"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-around"}
      backgroundColor={"gray.300"}
    >
      {children}
    </Flex>
  );
};
