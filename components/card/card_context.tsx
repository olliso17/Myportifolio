import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import api from "../../core/api";
import Link from "next/link";
import allDescriptions from "../../util/myDescription";

type ProjectProps = {
  nameProject: string;
  description: string;
  href: string;
};

export const CardContext = ({
  nameProject,
  description,
  href,
}: ProjectProps) => {
  const [users, setUsers] = useState<any>();
  const [userRepo, setUserRepo] = useState<any>();
  const { format } = require("date-fns");
  //https://api.github.com/repos/olliso17/task_go para pegar o repositório que eu desejo
  const getUserRepo = async () => {
    await api
      .get(`repos/olliso17/${nameProject}`)
      .then((res) => {
        setUserRepo(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const getUsers = async () => {
    await api
      .get("users/olliso17")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getUserRepo();
    getUsers();
  }, []);
  var count = 1;
  // const newDate = new Date(userRepo.created_at);
  // const date = format(userRepo.created_at, 'yyyy/MM/dd');
  return (
    <>
      {/* {users && users.public_repos} */}

      {userRepo && (
        <Card layerStyle={"cardContext"} borderRadius={"1vw"} key={userRepo.id}>
          <CardHeader layerStyle={"cardHeaderContext"}>
            <Heading layerStyle={"textAll"}>
              {userRepo.name}
            </Heading>
            <Text layerStyle={"textAll"}>
              created in: {userRepo.created_at}
            </Text>
          </CardHeader>
          <CardBody layerStyle={"cardBodyContext"}>
            <Text layerStyle={"textAll"}>{description}</Text>
            <Card margin={"1vw"}>
              <Link href={userRepo.html_url}>{userRepo.html_url}</Link>
            </Card>
            <Card margin={"1vw"}>
              <Link href={href}>{href}</Link>
            </Card>
            <Text layerStyle={"textAll"}>
               {userRepo.language}
            </Text>
          </CardBody>
        </Card>
      )}
    </>
  );
};
