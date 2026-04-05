"use client";
import Style from "./team.module.css";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Team() {
  const [tab, setTab] = useState("dev");

  const Gestao = [
    {
      foto: "/alicia.jpg",
      nome: "Alicia Cristina",
      cargo: "Contabilidade",
      linkedin: <FaLinkedin size={30} color={"#0e76a8"} />,
    },
    {
      foto: "/sofia.jpg",
      nome: "Sofia Felicio",
      cargo: "Gestão Comercial",
      linkedin: <FaLinkedin size={30} color={"#0e76a8"} />,
    },
  ];

  const Developers = [
    {
      foto: "/buss.jpg",
      nome: "Weberson Rodrigues",
      cargo: "Backend Developer",
      github: <FaGithub size={30} color={"white"} />,
    },
    {
      foto: "/amanda.jpg",
      nome: "Amanda Inagaki",
      cargo: "Front end - Developer",
      github: <FaGithub size={30} color={"white"} />,
    },
    {
      foto: "/iris.jpg",
      nome: "Iris Bispo",
      cargo: "Front end - Developer",
      github: <FaGithub size={30} color={"white"} />,
    },
    {
      foto: "/rai.jpg",
      nome: "Rai Davyd",
      cargo: "Front end - Developer",
      github: <FaGithub size={30} color={"white"} />,
    },
    {
      foto: "/vitor.jpg",
      nome: "Vitor Pagotto",
      cargo: "Front End - Developer",
      github: <FaGithub size={30} color={"white"} />,
    },
    {
      foto: "/empty.jpg",
      nome: "Roger Menezes",
      cargo: "FullStack - Developer",
      github: <FaGithub size={30} color={"white"} />,
    },
  ];

  const Designers = [
    {
      foto: "/raissa.jpg",
      nome: "Raissa Menezes",
      cargo: "UX/UI",
      portfolio: <FaLinkedin size={30} color={"#0e76a8"} />,
    },
    {
      foto: "/kamile.jpg",
      nome: "Kamile Vitória",
      cargo: "UX/UI",
      portfolio: <FaLinkedin size={30} color={"#0e76a8"} />,
    },
  ];

  const tituloRef = useRef(null);
  const mainRef = useRef(null);
  const navRef = useRef(null);
  const card = useRef(null);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      const card = container.querySelector(
        '[class*="cardsz"]',
      ) as HTMLElement | null;
      const cardWidth = (card?.offsetWidth ?? 0) + 6;
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [tab]);

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
      .from("#cardsz", {
        opacity: 0,
        x: -200,
      });
  }, [tab]);

  return (
    <main className={Style.main} ref={mainRef}>
      <h1 ref={tituloRef} className="text-6xl">
        Conheça nossa <span className={Style.equipe}>Equipe</span>
      </h1>
      <nav ref={navRef}>
        <p onClick={() => setTab("dev")}>Developers</p>
        <p onClick={() => setTab("ui")}>Designer</p>
        <p onClick={() => setTab("gestao")}>Gestão</p>
      </nav>

      <section className={Style.containerCards} ref={containerRef}>
        {tab === "dev" &&
          Developers.map((dev, index) => (
            <div id="cardsz" key={index} className={Style.cardsz} ref={card}>
              <div className={Style.containerImg}>
                <img src={dev.foto} alt="" />
              </div>

              <section className={Style.info}>
                <div>
                  <h1>{dev.nome}</h1>
                  <p>{dev.cargo}</p>
                </div>

                <span>{dev.github}</span>
              </section>
            </div>
          ))}

        {tab === "ui" &&
          Designers.map((designer, index) => (
            <>
              <div id="cardsz" key={index} className={Style.cardsz} ref={card}>
                <div className={Style.containerImg}>
                  <img src={designer.foto} alt="" />
                </div>

                <section className={Style.info}>
                  <div>
                    <h1>{designer.nome}</h1>
                    <p>{designer.cargo}</p>
                  </div>

                  <span>{designer.portfolio}</span>
                </section>
              </div>
            </>
          ))}

        {tab === "gestao" &&
          Gestao.map((gestao, index) => (
            <>
              <div id="cardsz" key={index} className={Style.cardsz} ref={card}>
                <div className={Style.containerImg}>
                  <img src={gestao.foto} alt="" />
                </div>

                <section className={Style.info}>
                  <div>
                    <h1>{gestao.nome}</h1>
                    <p>{gestao.cargo}</p>
                  </div>

                  <span>{gestao.linkedin}</span>
                </section>
              </div>
            </>
          ))}
      </section>
    </main>
  );
}
