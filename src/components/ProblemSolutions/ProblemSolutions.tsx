import Style from './Problem.module.css'
import CardProblem from '../CardProblem/CardProblem'
import { MdMonitor, MdBuild, MdTrendingUp, MdAutorenew, MdBarChart } from "react-icons/md"

const cards = [
  {
    icon: <MdMonitor />,
    description: "Conversão",
    problem: "Site bonito que não gera resultados",
    problemText: "Você investiu num site, mas ninguém entra em contato. Visitas chegam e vão embora, porque o site foi feito pra ser bonito, não pra converter.",
    solutions: [
      "Estrutura de página focada em conversão",
      "CTA estratégico em cada seção",
      "Copy persuasivo orientado ao cliente ideal",
    ],
  },
  {
    icon: <MdTrendingUp />,
    description: "Posicionamento",
    problem: "Sua marca invisível no Google",
    problemText: "Seus concorrentes aparecem primeiro nas buscas. Seu site não ranqueia porque foi entregue sem nenhuma estratégia de SEO e você perde clientes todo dia.",
    solutions: [
      "SEO técnico desde a estrutura do site",
      "Velocidade e performance otimizadas",
      "Conteúdo e títulos pensados para ranquear",
    ],
  },
  {
    icon: <MdBuild />,
    description: "Presença digital",
    problem: " Presença amadora",
    problemText: "Seu serviço é bom, mas o site passa insegurança. O cliente pesquisa, olha o site, desconfia e acaba fechando com o concorrente que parece mais profissional.",
    solutions: [
      "Design profissional que transmite autoridade",
      "Identidade visual coerente e memorável",
      "Prova social e depoimentos bem posicionados",
    ],
  },
]

const cardsSoftware = [
  {
    icon: <MdAutorenew />,
    description: "Automação",
    problem: "Processos manuais travando o crescimento",
    problemText: "Seu time perde horas com tarefas repetitivas e planilhas. Você cresce, mas a operação não acompanha e fica impossível escalar sem contratar mais gente.",
    solutions: [
      "Sistemas sob medida pro seu fluxo de trabalho",
      "Automações que eliminam tarefas repetitivas",
      "Integração entre ferramentas que você já usa",
    ],
  },
  {
    icon: <MdBarChart />,
    description: "Gestão",
    problem: "Sem visibilidade do que acontece no negócio",
    problemText: "Você toma decisões no escuro. Dados espalhados em planilhas, sem relatório em tempo real, fica impossível saber o que está funcionando ou não.",
    solutions: [
      "Dashboard com métricas em tempo real",
      "Relatórios automáticos para decisões rápidas",
      "Histórico e rastreabilidade de tudo que acontece",
    ],
  },

  {
    icon: <MdBarChart />,
    description: "Escabilidade",
    problem: "Sistema que trava quando escala",
    problemText: "Você contratou um sistema barato que funcionou no começo. Agora, com mais clientes e volume, ele trava, limita e vira um obstáculo para crescer.",
    solutions: [
      "Arquitetura pensada para escalar sem reescrever",
      "Suporte contínuo e evoluções planejadas",
      "Sem travamentos conforme o volume aumenta",
    ],
  },
]


function ProblemSolutions() {
  return (
    <section className={Style.ProblemSolutions}>
      <div className={Style.headerProblem}>
        <h2 className={Style.headline}>
          Reconhece algum <span className={Style.textGradient}>desses problemas?</span>
        </h2>
        <p className={Style.subheadline}>
          A maioria das empresas já passou por isso. Você não precisa continuar assim.
        </p>
      </div>

    <div className={Style.sectionDivider}>
        <div className={Style.line} />
        <span className={Style.pill}>Sites & Landing Pages</span>
        <div className={Style.line} />
    </div>

      <div className={Style.cards}>
        {cards.map((card, i) => (
          <CardProblem
            key={i}
            icon={card.icon}
            description={card.description}
            problem={card.problem}
            problemText={card.problemText}
            solutions={card.solutions}
          />
        ))}
      </div>
        <div className={Style.sectionDivider}>
            <div className={Style.line} />
            <span className={Style.pill}>Softwares & Apps</span>
            <div className={Style.line} />
        </div>
        
        <div className={Style.cards}>
        {cardsSoftware.map((cardsoftware, i) => (
          <CardProblem
            key={i} 
            icon={cardsoftware.icon}
            description={cardsoftware.description}
            problem={cardsoftware.problem}
            problemText={cardsoftware.problemText}
            solutions={cardsoftware.solutions}
             />
        ))}
      </div>
    </section>
  )
}

export default ProblemSolutions
