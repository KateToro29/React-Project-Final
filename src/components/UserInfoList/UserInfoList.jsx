import { useEffect, useState } from "react";

import { UserItem } from "../UserIntem/UserItem";

import { useSelector } from 'react-redux'

import './UserInfoList.css'

export default function UserInfoList(props) {
  return (
    <>
      {props.list?.length > 0 ? (
        <div className="ContainerCardpresent">
          {props.list.map((user) => (
            <UserItem key={user.id} user={user} showDeleteButton={props.showDeleteButton} />
          ))}
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </>
  );
}
