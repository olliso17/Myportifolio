import { Box, Card, Heading, Text } from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import api from "../../core/api";
import Link from "next/link";

export const CardContext = () => {
  const [users, setUsers] = useState<any>();
  const [userRepo, setUserRepo] = useState<any[]>([]);
  //https://api.github.com/repos/olliso17/task_go para pegar o repositório que eu desejo
  const getUserRepo = async () => {
    await api
      .get("users/olliso17/repos")
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
  return (
    <>
      {users && users.public_repos}

      {userRepo &&
        userRepo.map((repo) => (
          <Card
            // pl={[4, 8, 16, 32]}
            width={{
              base: "90vw",
              lg: "40vw",
              xl: "40vw",
            }}
            height={"20vh"}
            key={repo.id}
            margin={"1vh"}
          >
            {count++}
            <Heading size={"xl"}>{repo.name}</Heading>
            <Link href={repo.html_url}>{repo.html_url}</Link>
            <Text>{repo.language}</Text>
          </Card>
        ))}
    </>
  );
};
