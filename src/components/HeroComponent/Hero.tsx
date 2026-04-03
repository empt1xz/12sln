"use client";

import Style from "./hero.module.css";
import Aurora from "@/components/Aurora/Aurora";
import LogoLoop from "@/components/LogoLoop/LogoLoop";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiRust,
  SiPython,
} from "react-icons/si";

import { useRef, useEffect } from "react";


type Props = {
  heroRef: any
}

export default function Hero({heroRef}: Props) {
  const techLogos = [
    { node: <SiReact /> },
    { node: <SiTypescript /> },
    { node: <SiNodedotjs /> },
    { node: <SiPhp /> },
    { node: <SiPostgresql /> },
  ];




  return (
    <>
      <main className={Style.hero}>
        <div className={Style.background}>
          <Aurora />
        </div>

        <div className={Style.content} ref={heroRef}>
          <div className={Style.label}>
            <div className={Style.pulse}></div>
            <p>Disponíveis para Projetos</p>
          </div>

          <h1>
            Construindo o Futuro
            <br />
            <span className={Style.headline_font}>Linha por Linha. </span>
          </h1>

          <p>
            Da ideia ao produto final, criamos sistemas modernos, rápidos e
            eficientes.
          </p>

          <div className={Style.buttons}>
            <button onClick={() => window.open("mailto:suporte@12sln.com.br")} className={Style.button_1}>Fazer orçamento</button>
            <button className={Style.button_2}>Explorar</button>
          </div>
        </div>

        <LogoLoop
          //@ts-ignore
          logos={techLogos}
          speed={50}
          gap={60}
          direction="left"
        />
      </main>
    </>
  );
}
