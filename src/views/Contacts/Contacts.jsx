import { useSelector } from 'react-redux'
 import Navbar from '../../components/Nav/Nav';
import UserInfoList from '../../components/UserInfoList/UserInfoList';
import Title from '../../components/Title/Title';

export const Contacts = (props) => {
  const usersList = useSelector((state) => state.value);

  return<>
      {!props.isOverView && <Navbar></Navbar>}
      <Title Title="Contacts"></Title>
      <UserInfoList showDeleteButton={true} list={usersList}></UserInfoList>

    </> 
};
