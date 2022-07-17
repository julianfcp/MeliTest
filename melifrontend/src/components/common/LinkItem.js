import React from 'react'
import { Link } from "react-router-dom"
import "../../styles/common/LinkItem.scss"

function LinkItem({id, label}) {
  return (
    <Link className='link-item' to={`/item/${id}`}>{label}</Link>
  )
}

export default LinkItem