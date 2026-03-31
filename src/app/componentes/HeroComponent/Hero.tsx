'use client'

import Style from './hero.module.css';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function Hero () {

    const heroRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline();
            tl.from(heroRef.current, {
                opacity: 0,
                duration: 5

            })
    }, [])

    return (
        <>
            <main className={Style.hero} ref={heroRef}>

                <div className={Style.label}>
                    <div className={Style.pulse}>

                    </div>
                  <p>Disponíveis para Projetos</p>
                  
                </div>


                <h1>
                  Construindo o Futuro<br />Linha por Linha.
                </h1>


                <p>Da ideia do produto final, criamos sistemas modernos, rápidos e eficientes.</p>


            </main>
        </>
    )
}