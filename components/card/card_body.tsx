import { Card, Image, Text } from "@chakra-ui/react";
import allDescriptions from "../../util/myDescription";

export const CardBody = () => {
  return (
    <Card layerStyle={"cardBodyIntrodytion"} >
      <Image
        src="foto.jpg"
        borderRadius="full"
        boxSize={{ base: "20vw", lg: "8vw", xl: "8vw" }}
        margin={"1vw"}
      ></Image>
      <Text layerStyle={"textTitle"} className="animated-title">
        {allDescriptions[0]}
      </Text>
      <Text layerStyle={"textAll"} className="animated-text">
        {allDescriptions[2]}
      </Text>
      <Text layerStyle={"textAll"} className={"animated-text"}>
        {allDescriptions[1]}
      </Text>
    </Card>
  );
};
