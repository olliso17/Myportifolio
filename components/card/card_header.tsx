import { Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import allDescriptions from "../../util/myDescription";

type ContainerProps = {
  children: ReactNode;
};

export const CardHeader = () => {
  return (
    <>
      <Heading layerStyle={"textAll"} className="animated-title">
        {allDescriptions[0]}
      </Heading>
      <Text layerStyle={"textAll"} className="animated-text">
        {allDescriptions[2]}
      </Text>
    </>
  );
};
