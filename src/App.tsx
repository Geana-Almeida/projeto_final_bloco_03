import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./page/home/Home";


function App() {
  return(
    <>
      <BrowserRouter>
        <Navbar/>
          <Home/>
        <Footer/>  
      </BrowserRouter>
    </>
  )
}

export default App
