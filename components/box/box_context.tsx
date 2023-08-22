import {Flex} from "@chakra-ui/react";
import { ReactNode } from "react";

type BoxProps = {
  children: ReactNode;
};
export const BoxContext = ({ children }: BoxProps) => {
  return (
    <Flex wrap="wrap"layerStyle={"boxContext"}>
      {children}
    </Flex>
  );
};
