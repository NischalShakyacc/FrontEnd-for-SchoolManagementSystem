import React, { useState } from 'react'
import axios from 'axios'

export default function Examples() {

  
    const [data,setData] = useState(
      {
        head : '',
        body : '',
        photo: ''
      }
    )
  

  const handleChange = (e) => {
    setData({...data,[e.target.name]: e.target.value})
  }

  const handlePhoto = (e) => {
    setData({...data,photo: e.target.files[0]})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('head', data.head);
    formData.append('body', data.body);
    formData.append('photo', data.photo);

    axios.post('http://localhost:5000/api/notice/addnoticephoto',formData).then(res=>{
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
    })
  }

  return (
    <div>
      <form style={{
        height: '20rem',
        margin: '10rem',
      }} onSubmit={handleSubmit} encType='multipart/form-data' >
      
      <input type='text' name='head' value={data.head} onChange={handleChange} />
      <input type='text' name='body' value={data.body} onChange={handleChange} />

      <input type='file' name='photo'  onChange={handlePhoto} accept='.png, .jpg, .jpeg' />

      <input type='submit' />
      </form>
    </div>
  )
}
