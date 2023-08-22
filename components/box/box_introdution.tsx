import { Box, Card, Center, Flex, Text } from "@chakra-ui/react";
import { Children, ReactNode } from "react";

type BoxProps = {
  children: ReactNode;
};

export const BoxIntrodution = ({ children }: BoxProps) => {
  return <Box layerStyle={"boxIntrodution"} >{children}</Box>;
};
