import { Card, Center, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export const CardBody = () => {
  return (
    <>
      <Text layerStyle={"textAll"} className={"animated-text"}>
        Dissatisfied with the area I studied (bachelor's degree in law), I
        decided to study Programming. I started with Programming Logic,
        javascript, html, css and made my first web pages. I fell in love with
        the area without imagining that I would currently be developing
        back_end, with node.js, or go, or python, or php, creating api rests,
        using clean arch, testing, clean code, git, docker, working with
        postgres relational databases ... non-relational moogo... constantly
        studying good practices, learning front_end with next.js, react.js...
        learning every day that the possibilities in this area are endless, that
        learning is not just about it, but business rules, the rules for
        applying any content to be developed, this is incredible because I don't
        just learn to program, I learn how a bank app works, for example, a
        registration app... In short, I fell in love with the area and I
        continue to learn with pleasure.
      </Text>
    </>
  );
};
