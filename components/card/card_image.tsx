import { Image } from "@chakra-ui/react";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export const CardImage = () => {
  return (
    <>
      <Image
        src="foto.jpg"
        borderRadius="full"
        boxSize={{ base: "20vw", lg: "8vw", xl: "8vw" }}
        margin={"1vw"}
      ></Image>
    </>
  );
};
