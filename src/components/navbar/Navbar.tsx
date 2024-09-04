import { Asclepius } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="w-full flex justify-center py-4
                        bg-blue-600 text-white">
            <div className="container flex justify-between text-lg">
                <Link to='/home' className='text-2xl font-bold'><Asclepius size={100} /></Link>
                
                <div className="flex items-center text-2xl">
                    <p className="mr-5">
                      <Link to='/temas' className='hover:text-blue-300'>Categorias</Link>
                    </p>
                    <p className="mr-5">
                      <Link to='/cadastroTema' className='hover:text-blue-300'>Cadastrar categorias</Link>
                    </p>
                    <p className="mr-5">
                      <Link to='/perfil' className="hover:text-blue-300">Perfil</Link>
                    </p>
                    <p className="mr-5">
                      Sair
                    </p>
                </div>
            </div>
        </div>
  )
}

export default Navbar