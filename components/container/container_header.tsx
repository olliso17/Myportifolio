import { Container } from "@chakra-ui/react";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export const ContainerHeader = ({ children }: ContainerProps) => {
  return (
    <Container
      maxH={"10vh"}
      maxW={"100vw"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      backgroundColor={"gray.200"}
    >
      {children}
    </Container>
  );
};
