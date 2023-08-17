import { Card, Center, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { textBody } from "../../util/myDescription";

type ContainerProps = {
  children: ReactNode;
};

export const CardBody = () => {
  return (
    <>
      <Text layerStyle={"textAll"} className={"animated-text"}>
        {textBody}
      </Text>
    </>
  );
};
