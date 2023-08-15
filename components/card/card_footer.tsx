import { Card, Center, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export const CardFooter = () => {
  return (
    <Card
      width={{
        base: "50vw",
        lg: "40vw",
        xl: "40vw",
      }}
      height={{
        base: "10vh",
        lg: "10vh",
        xl: "10vh",
      }}
      marginTop={{ base: "5vh", lg: "15vh", xl: "15vh" }}
    >
      <Text>Footer</Text>
    </Card>
  );
};
