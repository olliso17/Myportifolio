import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { ContainerBodyStyle } from "../../style_config/container/container_body";

type ContainerProps = {
  children: ReactNode;
};

export const ContainerBody = ({ children }: ContainerProps) => {
  return (
    <Flex
      maxW={ContainerBodyStyle.maxW}
      width={ContainerBodyStyle.width}
      alignItems={ContainerBodyStyle.alignItems}
      direction={ContainerBodyStyle.direction}
      justifyContent={ContainerBodyStyle.justifyContent}
    >
      {children}
    </Flex>
  );
};
