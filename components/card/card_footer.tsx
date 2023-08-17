import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { Card, Flex, Icon, Link } from "@chakra-ui/react";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export const CardFooter = () => {
  return (
    <Flex layerStyle={"cardFooter"} >
      <Link type="button" href="https://github.com/olliso17" isExternal>
        <Icon layerStyle={"icongitHub"} as={AiFillGithub}></Icon>
      </Link>
      <Link
        href="https://www.linkedin.com/in/patricia-silva-oliveira-/"
        isExternal
      >
        <Icon layerStyle={"iconLinkedin"} as={AiFillLinkedin}></Icon>
      </Link>
      <Link
        href="https://api.whatsapp.com/send/?phone=5579996519451&text&type=phone_number&app_absent=0"
        isExternal
      >
        <Icon layerStyle={"iconWhatsapp"} as={AiOutlineWhatsApp}></Icon>
      </Link>
    </Flex>
  );
};
