import Navbar from '../../components/Nav/Nav';
import { Contacts } from '../Contacts/Contacts';
import { Favorites } from '../Favorites/Favorites';



export const Overview = () => {
  return <div>
    <Navbar></Navbar>
    <Favorites isOverView={true}  ></Favorites>
    <Contacts isOverView={true}></Contacts>
  </div>;

};
