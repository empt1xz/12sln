import Style from './hero.module.css'

export default function Hero () {
    return (
        <>
            <main className={Style.hero}>
                <div className={Style.label}>
                   <span className={Style.pulse}></span> <p>Disponíveis para Projetos</p>
                </div>
                <h1>
                  Construindo o Futuro<br />Linha por Linha.
                </h1>
                <p>Da ideia do produto final, criamos sistemas modernos, rápidos e eficientes.</p>
            </main>
        </>
    )
}