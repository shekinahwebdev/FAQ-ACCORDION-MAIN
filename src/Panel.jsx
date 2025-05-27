import React, { useCallback, useMemo, useState } from "react";
import plusIcon from "/assets/images/icon-plus.svg";
import minusIcon from "/assets/images/icon-minus.svg";

const Panel = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <section className="question-section">
      <div className="question-option">
        <h1>{props.question}</h1>
        <button onClick={handleVisibility} className="show-answer-btn">
          <img
            src={isVisible ? minusIcon : plusIcon}
            alt={isVisible ? "Hide answer" : "Show answer"}
          />
        </button>
      </div>
      {isVisible && <p>{props.answer}</p>}
    </section>
  );
};

export default Panel;
