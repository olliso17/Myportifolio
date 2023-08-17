import { Button, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export const ContainerBody = ({ children }: ContainerProps) => {
  return <Flex layerStyle={"containerBodyTheme"}>{children}</Flex>;
};
