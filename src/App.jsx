import Navbar from "./components/Nav/Nav";
import Title from "./components/Title/Title";
import UserInfoList from "./components/UserInfoList/UserInfoList";
import { useSelector } from 'react-redux'


import "./App.css";

function App() {
  const usersList = useSelector((state) => state.value)

  

  return (
    <>
      <Navbar></Navbar>
      <Title>{Title.Favorites}</Title>
      <div className="ContainerPrincipalCards">
        <Title>{Title.Favorites}</Title>
        <div>
          <UserInfoList />
        </div>
      </div>
    </>
  );
}

export default App;
