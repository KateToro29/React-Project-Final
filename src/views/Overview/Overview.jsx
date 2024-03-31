import { useSelector } from 'react-redux'
import Title from '../../components/Title/Title';
import UserInfoList from '../../components/UserInfoList/UserInfoList';
import Navbar from '../../components/Nav/Nav';
import { Favorites } from '../Favorites/Favorites';
import { Contacts } from '../Contacts/Contacts';


export const Overview = () => {
  return <div>
    <Navbar></Navbar>
     <Favorites isOverView={true}></Favorites>
     <Contacts isOverView={true}></Contacts>
  </div>;
};
