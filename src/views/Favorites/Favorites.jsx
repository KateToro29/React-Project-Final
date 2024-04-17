import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Navbar from "../../components/Nav/Nav";
import Title from "../../components/Title/Title";
import UserInfoList from "../../components/UserInfoList/UserInfoList";


export const Favorites = (props) => {
  const usersList = useSelector((state) => state.value);
  const [favoriteUsers, setFavoriteUsers] = useState([]);

  useEffect(() => {
    const filtrados = usersList.filter(u => u.resolved === true);
    console.log(filtrados)
    setFavoriteUsers(filtrados)
  }, [usersList]);


  return <>
    <div>
      {!props.isOverView && <Navbar></Navbar>}
      <Title className Title="Favorites"></Title>
      {favoriteUsers && <UserInfoList showDeleteButton={false} list={favoriteUsers} itemsPerPage={4}></UserInfoList>}
    </div>
  </>
};
