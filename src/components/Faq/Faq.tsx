import Style from "./Faq.module.css";
import { useState, useId } from "react";

const faq_items = [
  {
    question: "Quanto custa desenvolver meu projeto?",
    answer:
      "Os valores dos projetos dependem do escopo e complexidade. Um site institucional simples fica na faixa mais acessível, enquanto um app com funcionalidades personalizadas chega ao topo da faixa. O valor exato só definimos após entender o que você precisa,por isso a primeira conversa é sempre sem compromisso.",
  },

  {
    question: "Quanto tempo leva para ficar pronto?",
    answer:
      "Depende do projeto, mas para te dar uma referência: sites ficam prontos em 2 a 4 semanas, e apps ou softwares costumam levar de 6 a 12 semanas. O prazo real combinamos na proposta, depois de entender bem o seu escopo. Trabalhamos com etapas e entregas parciais, então você acompanha o progresso do início ao fim.",
  },

  {
    question: "Vocês ficam disponíveis após a entrega?",
    answer:
      "Sim! Após a entrega, oferecemos 1 manutenção gratuita para você utilizar quando quiser, depois do uso, temos contrato de manutenção mensal para quem quiser continuar com suporte. Isso cobre pequenas atualizações, correção de bugs, hospedagem e monitoramento. É opcional, se você tiver equipe própria para cuidar, entregamos tudo documentado e o código é 100% seu.",
  },

  {
    question: "O código fica comigo ou fica somente com vocês?",
    answer:
      "O código é 100% seu desde o primeiro dia. Entregamos o projeto completo no seu repositório (GitHub ou similar), com documentação de como rodar e editar tudo. Você pode levar para outro desenvolvedor, contratar alguém interno ou continuar com a gente, a escolha é sempre sua.",
  },

  {
    question: "Preciso saber de tecnologia para trabalhar com vocês?",
    answer:
      "Não precisa saber nada de tecnologia. Nosso processo é feito para pessoas que têm uma ideia ou necessidade de negócio, não para programadores. Você nos conta o que quer resolver, nós traduzimos isso em código. Durante o projeto, a comunicação é sempre simples e em português claro, sem jargão técnico.",
  },
];

function FaqItem({ question, answer, isOpen, onToggle, questionId, answerId }) {
  return (
    <div
      className={`${Style.faqItem} ${isOpen ? Style.faqItemOpen : ""}`}
      role="listitem"
    >
      <button
        className={Style.faqQuestion}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={answerId}
        id={questionId}
      >
        <span className={Style.faqQuestionText}>{question}</span>
        <span className={Style.faqQuestionIcon} aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 6L8 11L13 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        className={Style.faqAnswer}
        hidden={!isOpen}
      >
        <p className={Style.faqAnswerText}>{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ({ items = faq_items, allowMultiple = false }) {
  const [openIndexes, setOpenIndexes] = useState(new Set([0]));
  const baseId = useId();

  function handleToggle(index) {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        if (!allowMultiple) next.clear();
        next.add(index);
      }
      return next;
    });
  }

  return (
    <ul role="list" className={Style.faqList}>
      {items.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndexes.has(index)}
          onToggle={() => handleToggle(index)}
          questionId={`${baseId}-q-${index}`}
          answerId={`${baseId}-a-${index}`}
        />
      ))}
    </ul>
  );
}
