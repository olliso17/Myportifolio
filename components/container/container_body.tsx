import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export const ContainerBody = ({ children }: ContainerProps) => {
  return (
    <Flex
      className="box_context"
      maxW={"100vw"}
      width={"100vw"}
      display={"flex"}
      alignItems={"baseline"}
      flexDirection={{
        base: "column",
        lg: "row",
        xl: "row",
      }}
      justifyContent={"space-between"}
      backgroundColor={"red"}
    >
      {children}
    </Flex>
  );
};
