import './App.css';
import Content from './content';
import Products from './Products';
import Contact from './Contact';
import Login from './Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Link } from "react-router-dom"



function App() {
  return (
    <>
      <BrowserRouter>
        <div className='container-fluid text-center '>
          <a className="navbar-brand fs-1 fw-bold fst-italic text-dark  ">Rental Groups For Your Needs</a>
          <div className='col-12'>
            <Link to={"/home"} class="btn btn-light fw-bold m-2" aria-current="page" >Home</Link>
            <Link to={"/products"} class="btn btn-light fw-bold m-2">Products</Link>
            <Link to={"/contact"} className="btn btn-light fw-bold m-2" >Contact</Link>
            <Link to={"/login"} className="btn btn-light fw-bold m-2" >Login</Link></div>
          <Routes>
            <Route path="/home" element={<Content />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />

          </Routes>

        </div>

      </BrowserRouter>
    </>
  )
}

export default App;
