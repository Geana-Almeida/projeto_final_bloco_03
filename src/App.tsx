import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./page/home/home";

function App() {
  return(
    <>
      <BrowserRouter>
        <Navbar/>
          <div className="min h-[60vh] flex justify-center">
            <Home/>
          </div>
        <Footer/>  
      </BrowserRouter>
    </>
  )
}

export default App
