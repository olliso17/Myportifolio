import { Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { textHeader, titleHeader } from "../../util/myDescription";

type ContainerProps = {
  children: ReactNode;
};

export const CardHeader = () => {
  return (
    <>
      <Heading layerStyle={"textAll"} className="animated-title">
        {titleHeader}
      </Heading>
      <Text layerStyle={"textAll"} className="animated-text">
        {textHeader}
      </Text>
    </>
  );
};
