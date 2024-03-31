import { Link, useNavigate } from "react-router-dom";
import Image from "../../Image/Logo.png";
import "./Nav.css";
import { useState } from "react";
import { NewContact } from "../../views/NewContact/NewContact";

export default function Navbar() {
  const [showForm, setShowForm] = useState(false);
  
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
          
          <Link to={`/contacts`} className="a">
            Contacts
          </Link>
          <Link to={`/favorites`} className="a">
            Favorites
          </Link>
          <button className="buttonNEW" onClick={() => setShowForm(!showForm)}>
            {" "}
            + New
          </button>
        </div>
      </div>
      {showForm && <NewContact></NewContact>}
      <hr />
    </>
  );
}
