import Style from "./CardProblem.module.css";
import { IoCheckmark } from "react-icons/io5";

type Props = {
  icon: any;
  description: any;
  problem: any;
  problemText: any;
  solutions: any;
  sol: any;
};

function CardProblem({
  icon,
  description,
  problem,
  problemText,
  solutions,
  sol = [],
}: Props) {
  return (
    <div className={Style.cardProblem}>
      <span className={Style.icone}>{icon}</span>
      <p className={Style.description}>{description}</p>
      <h3 className={Style.problem}>{problem}</h3>
      <p className={Style.problemText}>{problemText}</p>
      <div>
        <p className={Style.solutions}>COMO RESOLVEMOS</p>
        <ul className={Style.solutionList}>
          {solutions.map((sol: any, i: any) => (
            <li key={i} className={Style.solutionItem}>
              <IoCheckmark className={Style.checkIcon} />
              {sol}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CardProblem;
