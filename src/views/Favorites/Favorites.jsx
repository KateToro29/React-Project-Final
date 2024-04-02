import { useEffect, useState } from "react";
import Navbar from "../../components/Nav/Nav";
import UserInfoList from "../../components/UserInfoList/UserInfoList";
import { useSelector } from 'react-redux'
import { UserItem } from "../../components/UserIntem/UserItem";
import Title from "../../components/Title/Title";


export const Favorites = (props) => {
  const usersList = useSelector((state) => state.value);
  const [favoriteUsers, setFavoriteUsers] = useState([]);

  useEffect(()=> {
    const filtrados = usersList.filter(u => u.resolved === true);
    console.log(filtrados)
    setFavoriteUsers(filtrados)
  }, [usersList]);


  return <div>
    {!props.isOverView && <Navbar></Navbar>}
    <Title Title="Favorite"></Title>
    { favoriteUsers &&     <UserInfoList showDeleteButton={false} list={favoriteUsers} itemsPerPage={4}></UserInfoList>}
  </div>;
};
