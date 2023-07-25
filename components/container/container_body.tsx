import { Container, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export const ContainerBody = ({ children }: ContainerProps) => {
  return (
    <Flex
      maxW={"100vw"}
      display={"flex"}
      alignSelf={"end"}
      pl={[4, 8, 16, 32]}
      flexDirection={{base:'row', sm:'column', md:'column', lg:'row', xl:"row"}}
      justifyContent={"space-between"}
      backgroundColor={"gray.300"}
    >
      {children}
    </Flex>
  );
};
