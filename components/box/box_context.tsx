import {
  Flex,
} from "@chakra-ui/react";
import { BoxContextStyle } from "../../style_config/box/box_context";
import { ReactNode } from "react";

type BoxContextProps = {
  children: ReactNode;
};

export const BoxContext = ({children}:BoxContextProps) => {

  return (
    <Flex
      bg={BoxContextStyle.bg}
      maxW={BoxContextStyle.maxW}
      direction={BoxContextStyle.direction}
      width={BoxContextStyle.width}
      position={BoxContextStyle.position}
      justifyContent={BoxContextStyle.justifyContent}
      alignItems={BoxContextStyle.alignItems}
      right={BoxContextStyle.rigth}
    >
     {children}
    </Flex>
  );
};
