import { Card, Flex, Heading, Link, Text } from "@chakra-ui/react";
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
      bg="pink.400"
      color="black"
      width={"50vw"}
      direction={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      {users && users.public_repos}

      {userRepo &&
        userRepo.map((repo) => (
          <Card width={"40vw"} height={"20vh"} key={repo.id} margin={"1vh"}>
            {count++}
            <Heading size={"xl"}>{repo.name}</Heading>
            <Link>{repo.html_url}</Link>
            <Text>{repo.language}</Text>
          </Card>
        ))}
    </Flex>
  );
};
