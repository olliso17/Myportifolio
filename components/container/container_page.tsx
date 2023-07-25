import { Container, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export const ContainerPage = ({ children }: ContainerProps) => {
  return (
    <Flex
      height={"100vh"}
      width={"100vw"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"space-between"}
      backgroundColor={"gray.100"}
    >
      {children}
    </Flex>
  );
};
