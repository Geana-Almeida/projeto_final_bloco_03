
function Home() {
    return (
        <>
        <div className="flex justify-center min h-[60vh]">
          <div className='container grid grid-cols-2 text-indigo-800'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja Bem Vindo</h2>
              <p className='text-xl'>Aqui você vai encontrar medicamentos de alta qualidade com preços que cabem no seu bolso.</p>
  
            </div>
  
            <div className="flex justify-center ">
            <img src="https://ik.imagekit.io/o4h22lltho/projeto_final_bloco_03/familia-reunida-e-feliz.jpg?updatedAt=1725458449753" alt="Imagem da Página Home"
              className="
                rounded-full p-4
              "/>
      
            </div>
          </div>
        </div>
      </>
    );
}

export default Home;