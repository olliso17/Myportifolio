import { Box, Card, Flex, Link, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import api from "../../core/api";

export const BoxContext = () => {
  const [users, setUsers] = useState<any[]>([]);
  const getUsers = async () => {
    await api
      .get("users/olliso17/repos")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Flex
      bg="pink.400"
      color="black"
      width={"50vw"}
      direction={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      {users &&
        users.map((user) => (
          <Card width={"40vw"} height={"20vh"} key={user.id} margin={"1vh"}>
            <Text>{user.name}</Text>
            <Link>{user.html_url}</Link>
            <Text>{user.language}</Text>
          </Card>
        ))}
    </Flex>
  );
};
