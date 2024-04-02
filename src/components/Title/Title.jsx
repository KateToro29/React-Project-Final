import React from 'react';
import './Title.css'; // Asegúrate de tener este archivo CSS

const TitleWithLine = (props) => {
  return (
    <div className='titleWithLine'>
      <h1 className='title'>{props.Title}</h1>
      <hr className='greenLine' /> {/* Línea verde */}
    </div>
  );
}

export default TitleWithLine;
