import React from 'react';
import "../../styles/common/Descripcion.scss"

function Descripcion({text}) {
  return (
    <div className='item-description'>
        <h2>Descripción del producto</h2>
        <p>{text}</p>
        <br />
    </div>
  )
}

export default Descripcion