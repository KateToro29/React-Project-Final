import { useSelector } from 'react-redux'
import Title from '../../components/Title/Title';
import UserInfoList from '../../components/UserInfoList/UserInfoList';
import Navbar from '../../components/Nav/Nav';


export const Overview = () => {
  const usersList = useSelector((state) => state.value)

  return <div>
    <Navbar></Navbar>
     <Title/>
      <div className="ContainerPrincipalCards">
        <div>
          <UserInfoList />
        </div>
      </div>
  </div>;
};
