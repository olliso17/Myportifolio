import { Box, Flex } from "@chakra-ui/react";
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

  // return (
  //   <div>
  //
  //   </div>
  // );
  return (
    <Flex
      direction={"column"}
      bg="pink.400"
      color="black"
      height={"100vh"}
      width={"50vw"}
      maxW={"50vw"}
    >
      {users &&
        users.map((user) => (
          <li key={user.id}>
            {user.name} | {user.html_url} | {user.language}
          </li>
        ))}
    </Flex>
  );
};
