import {Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import allDescriptions from "../../util/myDescription";

type ContainerProps = {
  children: ReactNode;
};

export const CardBody = () => {
  return (
    <>
      <Text layerStyle={"textAll"} className={"animated-text"}>
        {allDescriptions[1]}
      </Text>
    </>
  );
};
