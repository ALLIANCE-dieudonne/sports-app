import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";

const FrequentryAskedQ = ({ answer, question }) => {
  const [isAnswerShowing, SetIsAnswerShowing] = useState(false);
  return (
    <article
      className="faq"
      onClick={() => SetIsAnswerShowing((prev) => !prev)}
    >
      <div>
        <h4>{question}</h4>
        <button className="faq__btn">
          {isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      <div>{isAnswerShowing && <p>{answer}</p>}</div>
    </article>
  );
};

export default FrequentryAskedQ;
