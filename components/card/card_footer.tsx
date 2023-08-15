import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { Button, Card, Link } from "@chakra-ui/react";
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
      display={"flex"}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-around"}
      borderRadius={"1vw"}
      bg=" purple.900"
      margin={"1vw"}
    >
      <Link type="button" href="https://github.com/olliso17" isExternal>
        <Button
          colorScheme="purple"
          width={"55px"}
        >
          <AiFillGithub fontSize={"10vw"} />
        </Button>
      </Link>
      <Link
        href="https://www.linkedin.com/in/patricia-silva-oliveira-/"
        isExternal
      >
        <Button
          colorScheme="purple"
          width={"55px"}
        >
          <AiFillLinkedin fontSize={"10vw"} />
        </Button>
      </Link>
      <Link
        href="https://api.whatsapp.com/send/?phone=5579996519451&text&type=phone_number&app_absent=0"
        isExternal
      >
        <Button
          colorScheme="purple"
          width={"55px"}
        >
          <AiOutlineWhatsApp fontSize={"10vw"} />
        </Button>
      </Link>
    </Card>
  );
};
