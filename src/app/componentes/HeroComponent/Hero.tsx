'use client'

import Style from './hero.module.css';
import LightRays from '@/components/LightRays'

export default function Hero () {

    return (
        <>

        <div style={{ width: '100%', height:'100%', position: 'fixed'}}>
            <LightRays
            raysOrigin="top-center"
            raysColor="#DAFDBA"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
            pulsating={false}
            fadeDistance={1}
            saturation={1}
            />
        </div>

            <main className={Style.hero}>

                <div className={Style.label}>
                    <div className={Style.pulse}>

                    </div>
                  <p>Disponíveis para Projetos</p>
                  
                </div>


                <h1>
                  Construindo o Futuro<br /><span className={Style.headline_font}>Linha por Linha</span>.
                </h1>


                <p>Da ideia do produto final, criamos sistemas modernos, rápidos e eficientes.</p>

                <div className={Style.buttons}>
                    <button className={Style.button_1}>Como funciona</button>
                    <button className={Style.button_2}>Quem são os 12?</button>
                </div>
            </main>
        </>
    )
}