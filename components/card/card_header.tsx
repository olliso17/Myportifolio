import {Heading, Text } from "@chakra-ui/react";
import { HeadingHeaderStyle } from "../../style_config/card/card_header/heading_header";
import { TextHeaderStyle } from "../../style_config/card/card_header/text_header";

export const CardHeader = () => {
  return (
    <>
      <Heading
        bgGradient={HeadingHeaderStyle.bgGradient}
        bgClip={HeadingHeaderStyle.bgClip}
        fontWeight={HeadingHeaderStyle.fontWeight}
        as={HeadingHeaderStyle.as}
        fontSize={HeadingHeaderStyle.fontSize}
        textAlign={HeadingHeaderStyle.textAlign}
        marginTop={HeadingHeaderStyle.marginTop}
        className={HeadingHeaderStyle.className}
      >
        Hi, my name is Patricia
      </Heading>
      <Text
        bgGradient={TextHeaderStyle.bgGradient}
        bgClip={TextHeaderStyle.bgClip}
        fontWeight={TextHeaderStyle.fontWeight}
        className={TextHeaderStyle.className}
        fontSize={TextHeaderStyle.fontSize}
        margin={TextHeaderStyle.margin}
      >
        I would like to demonstrate my study projects to everyone who is
        accessing my portfolio
      </Text>

    </>
  );
};
