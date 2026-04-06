"use client";
import Style from "./team.module.css";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLinkedin, FaGithub } from "react-icons/fa";

// ✅ SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function Team() {
  const [tab, setTab] = useState("dev");
  const swiperRef = useRef<any>(null);

  // ✅ Dados
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

  // ✅ Seleção dinâmica
  const data = tab === "dev" ? Developers : tab === "ui" ? Designers : Gestao;

  // 🔥 DUPLICAÇÃO (loop infinito real)
  const loopData = [...data, ...data, ...data];

  // ✅ GSAP
  const tituloRef = useRef(null);
  const mainRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        scrub: true,
        start: "top 60%",
        end: "top 10%",
        trigger: mainRef.current,
      },
    });

    timeline
      .fromTo(
        tituloRef.current,
        { opacity: 0, x: -420, filter: "blur(2px)" },
        { opacity: 1, x: 0, filter: "blur(0)" },
      )
      .from(navRef.current, {
        opacity: 0,
        y: 200,
      })
      .from(`.${Style.cardsz}`, {
        opacity: 0,
        x: -200,
        stagger: 0.1,
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

      <section className={Style.containerCards}>
        <Swiper
          key={tab}
          modules={[Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={false} // 
          speed={6000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          spaceBetween={100}
          initialSlide={data.length} // começa no meio
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
          }}
        >
          {loopData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={Style.cardsz}>
                <div className={Style.containerImg}>
                  <img src={item.foto} alt="" />
                </div>

                <section className={Style.info}>
                  <div>
                    <h1>{item.nome}</h1>
                    <p>{item.cargo}</p>
                  </div>

                  <span>
                    {"github" in item
                      ? item.github
                      : "portfolio" in item
                        ? item.portfolio
                        : item.linkedin}
                  </span>
                </section>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
}
