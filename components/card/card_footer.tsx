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
        <Card layerStyle={"cardGitHub"}>
          <AiFillGithub fontSize={"40px"} color="white"/>
        </Card>
      </Link>
      <Link
        href="https://www.linkedin.com/in/patricia-silva-oliveira-/"
        isExternal
      >
        <Card layerStyle={"cardLinkedin"}>
          <AiFillLinkedin fontSize={"40px"} color="white" />
        </Card>
      </Link>
      <Link
        href="https://api.whatsapp.com/send/?phone=5579996519451&text&type=phone_number&app_absent=0"
        isExternal
      >
        <Card layerStyle={"cardWhatsapp"}>
          <AiOutlineWhatsApp fontSize={"40px"} color="white" />
        </Card>
      </Link>
    </Flex>
  );
};
