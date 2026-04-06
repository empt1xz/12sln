"use client"
 
import { useEffect, useState } from "react"
import TimelineCard from '@/components/TimelineCard/TimelineCard'
import Headline from '@/components/Headline/Headline'

const steps = [
  {
    number: "01",
    title: "Briefing Inicial",
    description: "Preenchimento do formulário detalhado para entendermos seu negócio.",
  },
  {
    number: "02",
    title: "Design Personalizado",
    description: "Criação do layout exclusivo baseado na sua identidade visual.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description: "Transformamos o design em uma página funcional e responsiva.",
  },
  {
    number: "04",
    title: "Entrega & Revisão",
    description: "Apresentação do projeto final com rodada de ajustes incluída.",
  },
]
 
export default function ProcessTimeline() {
  const [isMobile, setIsMobile] = useState(false)
 
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)")
    setIsMobile(mq.matches)
    const handler = (e) => setIsMobile(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])
 
  return (
    <section style={{ maxWidth: "860px", margin: "0 auto", padding: "4rem 1rem" }}>
        <div  style={{marginBottom: "40px"}}>
      <Headline
        label="Como Funciona"
        titulo="Nosso Processo"
        descricao="Entenda cada etapa do seu projeto."
      />
      </div>
 
      <div style={{ position: "relative" }}>
 
        <div style={{
          position: "absolute",
          left: isMobile ? "16px" : "50%",
          top: 0,
          bottom: 0,
          width: "2px",
          background: "#ffffff",
          transform: "translateX(-50%)",
        }} />
 
        {steps.map((step, i) => (
          <TimelineCard
            key={step.number}
            step={step}
            side={i % 2 === 0 ? "left" : "right"}
            index={i}
          />
        ))}
 
      </div>
    </section>
  )
}