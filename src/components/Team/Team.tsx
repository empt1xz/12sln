"use client";
import Style from "./team.module.css";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Team() {

  const [ tab, setTab ] = useState("dev")

  const Gestao = [
    {
      foto: "/alicia.jpg",
      nome: "Alicia Cristina",
      cargo: "Contabilidade",
      linkedin: "@Alicia",
    },
    {
      foto: "/sofia.jpg",
      nome: "Sofia Felicio",
      cargo: "Gestão Comercial",
      linkedin: "@Felicio"
    }
  ];

  const Developers = [
    {
      foto: "/buss.jpg",
      nome: "Weberson Rodrigues",
      cargo: "Backend Developer",
      github: "@WebersonRodrigues",
    },
      {
      foto: "/amanda.jpg",
      nome: "Amanda Inagaki",
      cargo: "Front end - Developer",
      github: "@InagakiDev",
    },
    {

      foto: "/iris.jpg",
      nome: "Iris Bispo",
      cargo: "Front end - Developer",
      github: "@IrisBispo"
    },
    {

      foto: "/rai.jpg",
      nome: "Ray Davyd",
      cargo: "Front end - Developer",
      github: "@RayDavyd"
    },
    {

      foto: "/nanda.jpg",
      nome: "Fernanda Rasi",
      cargo: "Analista de Segurança",
      github: "@Nanda"
    },
        {

      foto: "/vitor.jpg",
      nome: "Vitor Pagotto",
      cargo: "Front End - Developer",
      github: "@Vitor"
    },
       {

      foto: "/empty.jpg",
      nome: "Roger Menezes",
      cargo: "FullStack - Developer",
      github: "@empt1xz"
    },
       {

      foto: "/",
      nome: "Felippe Moraes",
      cargo: "Front End - Developer",
      github: "@azuley"
    },

  ];

  const Designers = [
    {
      foto: "/raissa.jpg",
      nome: "Raissa Menezes",
      cargo: "UX/UI",
      portfolio: "@Raissa",
    },
        {
      foto: "/kamile.jpg",
      nome: "Kamile Vitória",
      cargo: "UX/UI",
      portfolio: "@Kamile",
    },
  ];

  const tituloRef = useRef(null);
  const mainRef = useRef(null);
  const navRef = useRef(null);
  const card = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerReference = mainRef.current;
    const timeline = gsap.timeline({
      scrollTrigger: {
        scrub: true,
        start: "top 60%",
        end: "top 10%",
        trigger: triggerReference,
      },
    });
    const elementOne = tituloRef.current;
    const elementTwo = navRef.current;
    timeline
      .fromTo(
        elementOne,
        {
          opacity: 0,
          x: -420,
          filter: "blur(2px)",
        },
        {
          filter: "blur(0)",
          opacity: 1,
          x: 0,
        },
      )
      .from(elementTwo, {
        opacity: 0,
        y: 200,
      })
      .from('#cardsz', {
        opacity: 0,
        x: -200
      })
  }, [tab]);

  return (
    <main className={Style.main} ref={mainRef}>
      <h1 ref={tituloRef} className="text-6xl">
        Conheça nossa equipe
      </h1>
      <nav ref={navRef}>
        <p onClick={() => setTab('dev')}>Developers</p>
        <p onClick={() => setTab('ui')}>Designer</p>
        <p onClick={() => setTab('gestao')}>Gestão</p>
      </nav>

      <section className={Style.containerCards}>
          {tab === 'dev' && Developers.map((dev, index) => (

             <div id="cardsz" key={index} className={Style.cardsz} ref={card}>
                    <div className={Style.containerImg}>
                      <img src={dev.foto} alt="" />
                    </div>

                      <section className={Style.info}>
                          <div>
                            <h1>
                             {dev.nome}
                            </h1>
                            <p>
                             {dev.cargo}
                            </p>
                          </div>

                          <span>{dev.github}</span>
                      </section>
                </div>
          ))}

          {
            tab === "ui" && Designers.map((designer, index) => (
              <>
                <div id="cardsz" key={index} className={Style.cardsz} ref={card}>
                    <div className={Style.containerImg}>
                      <img src={designer.foto} alt="" />
                    </div>

                      <section className={Style.info}>
                          <div>
                            <h1>
                             {designer.nome}
                            </h1>
                            <p>
                             {designer.cargo}
                            </p>
                          </div>

                          <span>{designer.portfolio}</span>
                      </section>
                </div>
              
              </>
            ))
          }


          {
            tab === 'gestao' && Gestao.map((gestao, index) => (
              <>
                 <div id="cardsz" key={index} className={Style.cardsz} ref={card}>
                    <div className={Style.containerImg}>
                      <img src={gestao.foto} alt="" />
                    </div>

                      <section className={Style.info}>
                          <div>
                            <h1>
                             {gestao.nome}
                            </h1>
                            <p>
                             {gestao.cargo}
                            </p>
                          </div>

                          <span>{gestao.linkedin}</span>
                      </section>
                </div>
              
              </>
            ))
          }
      </section>
    </main>
  );
}
