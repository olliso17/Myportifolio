import {
  Box,
  Card,
  Container,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import api from "../../core/api";

export const BoxContext = () => {
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
    <Flex
      bg="gray.900"
      color="black"
      maxW={"100%"}
      direction={"column"}
      width={{
        base: "100vw",
        lg: "50vw",
        xl: "50vw",
      }}
      // pl={[4, 8, 16, 32]}
      position={{
        base: "relative",
        lg: "absolute",
        xl: "absolute",
      }}
      justifyContent={"center"}
      alignItems={"center"}
      right={{ base: 0, lg: 0, xl: 0 }}
    >
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
            <Link>{repo.html_url}</Link>
            <Text>{repo.language}</Text>
          </Card>
        ))}
    </Flex>
  );
};
