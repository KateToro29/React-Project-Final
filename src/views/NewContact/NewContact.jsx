import { useState } from "react";
import axios from "axios";
import "./Style.css";
import {store, addUser} from './../../store'
import { useSelector } from 'react-redux'
import Navbar from "../../components/Nav/Nav";

export const NewContact = () => {
  const usersList = useSelector((state) => state.value)

  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    resolved: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData)
      await axios.post("https://reqres.in/api/users", formData);
      alert("Contacto creado exitosamente");
      store.dispatch(addUser({
        id: Math.random() * 1000,
        first_name: formData.FirstName,
        email: formData.Email,
        last_name: formData.LastName,
        avatar: 'sin image',
        resolved: formData.resolved
      }))

      setFormData({
        FirstName: "",
        LastName: "",
        Email: "",
        resolved: false,
      });
    } catch (error) {
      console.error("Error al crear contacto:", error);
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="containerCampos">
          <input
            type="text"
            className="campos"
            name="FirstName"
            value={formData.FirstName}
            onChange={handleChange}
            required
            minLength="6"
            maxLength="18"
            placeholder="First name"
          />
        </div>
        <div className="containerCampos">
          <input
            type="text"
            className="campos"
            name="LastName"
            value={formData.LastName}
            onChange={handleChange}
            required
            minLength="6"
            maxLength="18"
            placeholder="Last name"
          />
        </div>
        <div className="containerCampos">
          <input
            type="Email"
            className="campos"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            required
            minLength="6"
            maxLength="18"
            placeholder="Email"
          />
        </div>
        <div className="containerCampos">
          <input
            type="checkbox"
            name="resolved"
            checked={formData.resolved}
            onChange={handleChange}
            className="checkbox"
          />
          <label className="">Enable like Favorite</label>
        </div>
        <div className="containerCampos">
          <button className="ButtonSubmit" type="submit">
            Save
          </button>
        </div>
      </form>
    </>
  );
};
