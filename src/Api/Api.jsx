import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../components/Targets/Target.css'
import ButtonRemove from '../components/ButtonRemove/ButtonRemove'

export default function Api() {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    // Realizar solicitud a la API utilizando axios
    axios.get('https://reqres.in/api/users?page=1')
      .then(response => {
        // Actualizar el estado con la respuesta de la API
        setResponseData(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []); // Se ejecutará una vez al montar el componente

  return (
    <>
      {responseData ? (
        <div className='ContainerCardpresent'  >
          {responseData.data.map(user => (
            <div className='ContainerTarget'>
                <img className='Image' src={user.avatar} alt="" />
                <p>{user.first_name} {user.last_name}</p>
                <p>{user.email}</p>
                <hr />
                <ButtonRemove></ButtonRemove>

            </div>
          ))}
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </>
  );
}
