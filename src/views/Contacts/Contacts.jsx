import { useSelector } from 'react-redux'
 import Navbar from '../../components/Nav/Nav';
import UserInfoList from '../../components/UserInfoList/UserInfoList';

export const Contacts = () => {
  const usersList = useSelector((state) => state.value)


  return<>
      <Navbar></Navbar>
      
      <UserInfoList></UserInfoList>
      
    </> 
};
