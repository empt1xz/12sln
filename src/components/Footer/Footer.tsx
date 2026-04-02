"use client"

import { CiCircleQuestion } from "react-icons/ci"
import Style from "./footer.module.css"
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
                <div className={Style.support}>
                    <h1>Suporte</h1>
                    <ul>
                        <li onClick={() => handleClick('a')}>suporte@12sln.com.br</li>
                        <li onClick={() => handleClick('a')}>Termos de Serviço</li>
                        <li onClick={() => handleClick('a')}>Política de Privacidade</li>
                    </ul>
                </div>
                <div className={Style.faq}>
                        <h1><CiCircleQuestion size={20} strokeWidth="1px"/>FAQ Rápido</h1>
                    <ul>
                        <li onClick={() => handleClick('a')}>"Quanto tempo de prazo?"</li>
                        <li onClick={() => handleClick('a')}>"Quais são as formas de pagamento?"</li>
                        <li onClick={() => handleClick('a')}>"Existe custo de manutenção?"</li>
                        <li onClick={() => handleClick('a')}>"A 12sln oferece suporte técnico?"</li>
                        <li onClick={() => handleClick('a')}>"A 12sln cuida do domínio e hospedagem?"</li>
                        <li onClick={() => handleClick('a')}>"Posso solicitar novas funcionalidades depois?"</li>
                    </ul>
                </div>
                
            </footer>
            
            <div className={Style.copyright}>
                <p>&copy; 2026 12sln · Todos os direitos reservados.</p>
            </div>
        </>
    )
}
