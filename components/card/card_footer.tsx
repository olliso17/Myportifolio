import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { Button, Card, Flex, Link } from "@chakra-ui/react";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export const CardFooter = () => {
  return (
    <Flex width={"20vw"} justifyContent={"space-between"}>
      <Link type="button" href="https://github.com/olliso17" isExternal>
        <Card _hover={{ bg: "gray" }}>
          <AiFillGithub fontSize={"40px"} />
        </Card>
      </Link>
      <Link
        href="https://www.linkedin.com/in/patricia-silva-oliveira-/"
        isExternal
      >
        <Card _hover={{ bg: "blue.200" }} bg="blue.400">
          <AiFillLinkedin fontSize={"40px"} color="white" />
        </Card>
      </Link>
      <Link
        href="https://api.whatsapp.com/send/?phone=5579996519451&text&type=phone_number&app_absent=0"
        isExternal
      >
        <Card _hover={{ bg: "green.200" }} bg="green.400">
          <AiOutlineWhatsApp fontSize={"40px"} color="white" />
        </Card>
      </Link>
    </Flex>
  );
};
