import { useQuery } from "react-query";
import { getUsers } from "../api/usersapi";

function useGetUsers() {
  const { isLoading, data: users } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (isLoading) {
    console.log("fetching users .... Loading");
  } else {
    return users;
  }
}

export default useGetUsers;
