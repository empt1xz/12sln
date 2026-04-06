"use client"


import Style from "./footer.module.css"
import { CircleArrowUp } from "lucide-react"
export default function Footer() {

    function handleClick(text: string) {
        alert(text)
    }

    return (
        <>

            <footer className={Style.footer}>
                
                <div className={Style.aboutus}>
                    <h1 className={Style.h1_aboutus}>12sln</h1>
                    <p className={Style.p_aboutus}>12sln é uma startup de tecnologia fundada por 12 desenvolvedores profissionais que vão te guiar para a solução do seu problema.</p>
                </div>
                <div className={Style.navigation}>
                    <h1>Navegação</h1>
                    <ul>
                        <li onClick={() => handleClick('a')}>Features</li>
                        <li onClick={() => handleClick('a')}>Documentação</li>
                        <li onClick={() => handleClick('a')}>Sobre</li>
                    </ul>
                </div>
                <div className={Style.backtostart}>
                    <a href="#hero">
                        <CircleArrowUp size={50} />
                    </a>
                    <h1 className={Style.h1_backto}>Voltar ao topo</h1>
                </div>


            </footer>

            <div className={Style.copyright}>
                <p>&copy; 2026 12sln · Todos os direitos reservados.</p>
            </div>
        </>
    )
}
