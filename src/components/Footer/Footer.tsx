import Style from './footer.module.css'
export default function Footer () {
     return (
        <>
        <footer className={Style.footer}>
             <img src="./logotipo.png" alt="" />
             <p>
                <code>
                    &copy; 2026 | Todos os direitos reservados
                </code>
             </p>
        </footer>
        </>
     )
}