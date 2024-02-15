import "./Faqs.css";
import Accordion from "../Accordion/Accordion";
import starIcon from "../../assets/images/icon-star.svg";
import { data } from "../../data/data";
import { useState } from "react";

const Faqs = () => {
  const [faqs] = useState(data);

  return (
    <div>
      <article className="content">
        <div className="title">
          <img src={starIcon} alt="star icon" />
          <h1>FAQs</h1>
        </div>
        <div className="faqs">
          {faqs.map((item) => {
            return (
              <Accordion
                key={item.id}
                question={item.question}
                answer={item.answer}
              />
            );
          })}
        </div>
      </article>
    </div>
  );
};

export default Faqs;
