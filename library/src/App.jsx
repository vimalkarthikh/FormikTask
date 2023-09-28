import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './Home'
import Books from './Books'
import Addbook from './Addbook'
import Author from './Author'
import AddAuthor from './AddAuthor'
import Updatebook from './Updatebook'
import UpdateAuthor from './UpdateAuthor'

function App() {

  return (
   <Router>
    <div class="fixed-top">
  <div class="collapse" id="navbarToggleExternalContent">
    
    <div class="bg-dark btbg p-4">
      <div className="pbb"><Link  className='btn btn-outline-light nbb' to='/'>Home</Link>
    <Link className='btn btn-outline-light nbb'  to='/books'>Books</Link>
  <Link className='btn btn-outline-light nbb'  to='/addbooks'>Add Books</Link>
  <Link className='btn btn-outline-light nbb'  to='/author'>Author</Link>
  <Link className='btn btn-outline-light nbb'  to='/addauthor'>Add Author</Link></div>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>

    </button>
    <h1 className='lib'>Library Management &ensp; <Link className='btn btn-outline-warning' to='/'>Home</Link></h1>
  </nav>
</div>
      <nav class="navbar nhd navbar-dark bg-dark">
        <span class="navbar-brand lh mb-0 h1">&ensp; Library Mangement</span>
        </nav>    
        <nav class="nav nbs">
 
  </nav>
  

        
        <Routes>
          
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/books' element={<Books></Books>}></Route>
          <Route path='/addbooks' element={<Addbook></Addbook>}></Route>
          <Route path='/author' element={<Author></Author>}></Route>
          <Route path='/addauthor' element={<AddAuthor></AddAuthor>}></Route>
          <Route path='/update/:id' element={<Updatebook></Updatebook>}></Route>
          <Route path='/updateauthor/:id' element={<UpdateAuthor></UpdateAuthor>}></Route>
          
        </Routes>
        
      <footer>      
      <nav class="navbar cpr fixed-bottom navbar-dark bg-dark">
        <div className=''>Copyright © Library Dashboard</div>
      </nav>
      </footer>

   </Router>
    )
}

export default App
