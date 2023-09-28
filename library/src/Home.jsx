import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Home() {  
  let ct=new Date().toLocaleTimeString();
  let cd=new Date().toLocaleDateString();
  
  const [count, setCount] = useState(ct);
  const [dt,setDt]=useState(cd)
  
  function timer(){
    ct=new Date().toLocaleTimeString();
    cd=new Date().toDateString();
    setCount(ct);setDt(dt);
  }
  
  setInterval(timer,1000);  

  return (
    <div>
      
    <div className='htxt'>
      <br/>
      <h1 className='wtt'>Welcome to Library !!</h1>
      <br/>
      <h3>Date: {cd}&ensp;&ensp;Time: {count} IST   </h3>     
      </div>
      <div className='flx'>
      <div className="tlogo">         
      <div id="carouselExampleFade" class="carousel slide carousel-fade cs" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./img/1.webp" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./img/2.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./img/3.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-target="#carouselExampleFade" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleFade" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
    </div>
    <div className="det">
      
  <Link className='btn btn-primary nbts'  to='/books'>Books</Link>
  <Link className='btn btn-primary nbts'  to='/addbooks'>Add Books</Link>
  <Link className='btn btn-primary nbts'  to='/author'>Author</Link>
  <Link className='btn btn-primary nbts'  to='/addauthor'>Add Author</Link>
    </div>
    </div>
    </div>
    
  )
}

export default Home