import Navbar from "./components/Nav/Nav";
import Title from "./components/Title/Title";
import UserInfoList from "./components/UserInfoList/UserInfoList";

import "./App.css";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <div className="ContainerPrincipalCards">
        <Title Title="Favorites"></Title>
        <div>
          <UserInfoList />
        </div>
      </div>
    </>
  );
}

export default App;
