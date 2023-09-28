import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Author() {
  const[author,setAuthor]=useState([]);
  useEffect(()=>{axios.get('https://651278f1b8c6ce52b395a8ec.mockapi.io/author').then((r)=>setAuthor(r.data))},[]) 
  
  const handleDelete=(id)=>{
    axios.delete(`https://651278f1b8c6ce52b395a8ec.mockapi.io/author/${id}`).then(()=> {alert("Author Info Deleted"); location.reload();})
  }
  
  return (
    <><div className='adbb'>
    <Link className='btn btn-success df' to='/addbooks'>+ Add Author</Link>
    <div className='bcardbg'>
      {author.map((e)=>(
      <div className='bkd'>
        <div class="card border-dark mb-3 max-width: 18rem bcd">
        <div class="card-header"><h3>{e.authorname}</h3></div>
        <div class="card-body text-dark">
          <h5 class="card-title">Title  : {e.authorname}</h5>
          <h5 class="card-title">Author : {e.dob}</h5>
          <h5 class="card-title">ISBN : {e.bio}</h5>
          
        <button className='btn btn-sm btn-danger' onClick={()=> handleDelete(e.id)}>Delete</button>
        <Link to={`/updateauthor/${e.id}`} className='btn btn-sm btn-info'>Edit</Link>
        </div>
      </div>
      </div>))}</div>
      </div>
      </> 
  )
}

export default Author