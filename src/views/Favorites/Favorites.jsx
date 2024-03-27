import { useEffect, useState } from "react";
import Navbar from "../../components/Nav/Nav";
//import UserInfoList from "../../components/UserInfoList/UserInfoList";
import { useSelector } from 'react-redux'
import { UserItem } from "../../components/UserIntem/UserItem";
import UserInfoList from "../../components/UserInfoList/UserInfoList";


export const Favorites = () => {
  const usersList = useSelector((state) => state.value);
  const [favoriteUsers, setFavoriteUsers] = useState([]);

  useEffect(()=> {
    const filtrados = usersList.filter(u => u.resolved === true);
    setFavoriteUsers(filtrados)
  }, [usersList]);


  return <div>
    <Navbar></Navbar>
    {favoriteUsers.length > 0 ? (
        <div className="ContainerCardpresent">
          {favoriteUsers.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
         
        </div>
      ) : (
        <p>No tienes contactos favoritos</p>
      )}
  </div>;
};
