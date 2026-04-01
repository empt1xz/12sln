

import Style from "./footer.module.css"
export default function Footer() {


    return (
        <>
            <footer className={Style.footer}>
                <div className={Style.aboutus}>
                    <h1 className={Style.h1_aboutus}>12sln</h1>
                    <p className={Style.p_aboutus}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, recusandae tempore ipsum natus numquam, quas error cum eius voluptas at similique iure rem labore quis, ratione eligendi alias id laudantium.</p>
                </div>
                <div className={Style.navigation}>
                    <h1>Navegação</h1>
                    <ul>
                        <li>Features</li>
                        <li>Documentação</li>
                        <li>Sobre</li>
                    </ul>
                </div>
                <div className={Style.support}>
                    <h1>Suporte</h1>
                    <ul>
                        <li>suporte@12sln.com.br</li>
                        <li>Termos de Serviço</li>
                        <li>Política de Privacidade</li>
                    </ul>
                </div>
                <div className={Style.faq}>
                    <h1>Faq Rápido</h1>
                    <ul>
                        <li>Quanto tempo de prazo?</li>
                        <li>Quais são as formas de pagamento?</li>
                        <li>Existe custo de manutenção?</li>
                        <li>Vocês oferecem suporte técnico?</li>
                        <li>Vocês cuidam do domínio e hospedagem?</li>
                        <li>Posso solicitar novas funcionalidades depois?</li>
                    </ul>
                </div>
                
            </footer>
            
            <div className={Style.copyright}>
                <p>&copy; 2026 12sln · Todos os direitos reservados.</p>
            </div>
        </>
    )
}