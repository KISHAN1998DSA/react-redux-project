import { Divider } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom'

const CardDetail = () => {
  const param=useParams();
  console.log(param,"param")
  return (
    <div>
      <h1>Product Detail</h1>
        <Divider/>

    </div>
  )
}

export default CardDetail