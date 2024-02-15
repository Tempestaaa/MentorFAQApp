import "./Accordion.css";
import { useState } from "react";
import minusIcon from "../../assets/images/icon-minus.svg";
import plusIcon from "../../assets/images/icon-plus.svg";

const Accordion = (props) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="accordion">
      <div className="question" onClick={() => setIsShow(!isShow)}>
        <p>{props.question}</p>
        {isShow ? <img src={minusIcon} /> : <img src={plusIcon} />}
      </div>
      <p className={isShow ? `answer show` : `answer`}>{props.answer}</p>
    </div>
  );
};

export default Accordion;
