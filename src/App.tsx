import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./page/home/Home";
import ListarCategorias from "./components/categoria/listacategorias/ListarCategorias";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria";


function App() {
  return(
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        <Footer/>  
      </BrowserRouter>
    </>
  )
}

export default App
