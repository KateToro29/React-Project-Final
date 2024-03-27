import { useEffect, useState } from "react";

import { UserItem } from "../UserIntem/UserItem";

import { useSelector } from 'react-redux'

import './UserInfoList.css'

export default function UserInfoList() {
  const usersList = useSelector((state) => state.value)



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
