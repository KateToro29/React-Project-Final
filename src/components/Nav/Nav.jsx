import { Link, useNavigate } from "react-router-dom";
import Image from "../../Image/Logo.png";
import "./Nav.css";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="ContainerNav">
        <div className="ContainerImageNav">
          <img className="ImagenNav" src={Image} alt="" />
        </div>
        <div>
          <Link to={`/overview`} className="a">
            Overview
          </Link>
          <Link to={`/favorites`} className="a">
            Favorites
          </Link>
          <Link to={`/contacts`} className="a">
            Contacts
          </Link>
          <button className="buttonNEW" onClick={() => navigate("/newContact")}>
            {" "}
            + New
          </button>
        </div>
      </div>
      <hr />
    </>
  );
}
