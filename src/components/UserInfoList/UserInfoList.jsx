import { useEffect, useState } from "react";

import { UserItem } from "../UserIntem/UserItem";
import getUsers from "../../api/getUsers";

export default function UserInfoList() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    getUsers()
      .then((users) => setUsersList(users.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {usersList.length > 0 ? (
        <div className="ContainerCardpresent">
          {usersList.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </>
  );
}
