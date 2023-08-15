import {Flex} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BoxIntrodutionStyle } from "../../style_config/box/box_introdution";

type BoxProps = {
  children: ReactNode;
};

export const BoxIntrodution = ({ children }: BoxProps) => {
  return (
    <Flex
      bgGradient={BoxIntrodutionStyle.bgGradient}
      minH={BoxIntrodutionStyle.minH}
      maxW={BoxIntrodutionStyle.maxW}
      width={BoxIntrodutionStyle.width}
      justifyContent={BoxIntrodutionStyle.justifyContent}
      wrap={BoxIntrodutionStyle.wrap}
      position={BoxIntrodutionStyle.position}
      bottom={BoxIntrodutionStyle.bottom}
      left={BoxIntrodutionStyle.left}
    >
      {children}
    </Flex>
  );
};
