import { InstagramLogo, LinkedinLogo, TiktokLogo } from "@phosphor-icons/react"

function Footer() {
    let data = new Date().getFullYear()

    return (
        <div className="
            flex
            bg-blue-600
            justify-center
            p-2
            text-white
            font-bold
            ">
            <div className="flex flex-col items-center">
                <p>
                    Farmacia Vida | Copyright: {data}
                </p>
                <p>Acesse nossas redes sociais</p>
                <div className="flex flex-row">
                    <a href="" target="_blank">
                        <LinkedinLogo size={50} color="white" className="
                        hover:brightness-50
                        "/>
                    </a>
                    <a href="" target="_blank" className="
                        hover:brightness-50
                        ">
                        <InstagramLogo size={50} color="white"/>
                    </a>
                    <a href="" target="_blank" className="
                        hover:brightness-50
                        ">
                        <TiktokLogo size={50} color="white"/>
                    </a>
                </div>
            </div>
        </div>
  )
}

export default Footer