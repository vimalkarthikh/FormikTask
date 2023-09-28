import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
function Books() {
  const[books,setBooks]=useState([]);
  
  useEffect(()=>{axios.get('https://651278f1b8c6ce52b395a8ec.mockapi.io/books').then((r)=>setBooks(r.data))},[]) ;

  const handleDelete=(id)=>{
    axios.delete(`https://651278f1b8c6ce52b395a8ec.mockapi.io/books/${id}`).then(()=> {alert("Book Info Deleted"); location.reload();})
  }
  return (
    <><div className='adbb'>
    <Link className='btn btn-success df' to='/addbooks'>+ Add Books</Link>
    <div className='bcardbg'>
      {books.map((e)=>(
      <div className='bkd'>
        <div class="card border-dark mb-3 max-width: 18rem bcd">
        <div class="card-header"><h3>{e.title}</h3></div>
        <div class="card-body text-dark">
          <h5 class="card-title">Title  : {e.title}</h5>
          <h5 class="card-title">Author : {e.author}</h5>
          <h5 class="card-title">ISBN : {e.isbn}</h5>
          <h5 class="card-title">Publish Date : {e.publishDate}</h5>
          
        <button className='btn btn-sm btn-danger' onClick={()=> handleDelete(e.id)}>Delete</button>
        <Link to={`/update/${e.id}`} className='btn btn-sm btn-info'>Edit</Link>
        </div>
      </div>
      </div>))}</div>
      </div>
      </>   )
}

export default Books