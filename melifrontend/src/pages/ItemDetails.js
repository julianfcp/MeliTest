import React from 'react'
import { useParams } from 'react-router-dom'

function ItemDetails() {
    const { id } = useParams();
    console.log(id)
  return (
    <div>ItemDetails {id}</div>
  )
}

export default ItemDetails