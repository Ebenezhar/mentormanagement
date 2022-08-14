import React from 'react'
import { useParams } from 'react-router-dom';

function EditStudent() {
    const { id } = useParams();
    console.log(id);
  return (
    <div>{id}</div>
  )
}

export default EditStudent