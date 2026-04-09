"use client"
 
import { useEffect, useState } from "react"
import TimelineCard from '@/components/TimelineCard/TimelineCard'
import Headline from '@/components/Headline/Headline'

const steps = [
  {
    number: "01",
    title: "Briefing e Entendimento",
    description: "Você nos conta o que precisa. A gente faz as perguntas certas para entender seu negócio, público e objetivo real, não só o que você quer construir, mas por que.",
  },
  {
    number: "02",
    title: "Proposta e Contrato",
    description: "Enviamos uma proposta detalhada com escopo fechado, prazo real e valor justo. Você sabe exatamente o que vai receber, quando e quanto vai pagar.",
  },
  {
    number: "03",
    title: "Kick-off com o Time",
    description: "Reunião interna com todos os especialistas do projeto. Cada área entende o que vai fazer, define prazos e escolhemos a stack ideal para o seu caso.",
  },
  {
    number: "04",
    title: "Design e Prototipagem",
    description: "Criamos o layout visual baseado na sua identidade. Você aprova antes de uma linha de código ser escrita, sem surpresas visuais no final.",
  },
  {
    number: "05",
    title: "Desenvolvimento",
    description: "Com o design aprovado, o time entra em ação. Você acompanha o progresso nos checkpoints. Qualquer dúvida, tem uma pessoa responsável pelo seu projeto disponível.",
  },
  {
    number: "06",
    title: "Testes e Aprovação",
    description: "Antes de ir ao ar, testamos tudo, velocidade, responsividade, segurança e funcionalidades. Você valida e nos dá o sinal verde.",
  },
  {
    number: "07",
    title: "Entrega e Deploy",
    description: "Colocamos tudo no ar. Transferimos os acessos, domínio e credenciais. Você recebe o produto completo e o código é 100% seu após a quitação.",
  },
  {
    number: "08",
    title: "Garantia de 30 dias + Suporte",
    description: "Não sumimos depois de entregar. Você tem 30 dias de garantia para bugs do escopo. Suporte contínuo pode ser contratado para manutenções e evoluções.",
  }
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