import { useState } from "react";
import PropTypes from "prop-types";

QuestionField.propTypes = {
  questions: PropTypes.array,
  setQuestions: PropTypes.func,
  setTime: PropTypes.func,
};

export default function QuestionField({ questions, setQuestions, setTime }) {
  const [value, setValue] = useState("");
  const [wrongAnswerCounter, setWrongAnswerCounter] = useState(0);

  const result = questions.map((elem, index) => {
    return (
      <p key={elem.id} className="question">
        {index === 0 && !elem.isAnswered ? elem.text : ""}
      </p>
    );
  });

  function checkAnswer(e) {
    let copy = Object.assign([], questions);
    if (e.key === "Enter") {
      if (copy[0].answer.toLowerCase() === value.toLowerCase()) {
        copy[0].isAnswered = true;
        setQuestions(copy.filter((elem) => elem.isAnswered === false));
        setValue("");
      } else {
        setWrongAnswerCounter((wrongAnswerCounter) => wrongAnswerCounter + 1);
        wrongAnswerCounter === 2 && setTime(0);
      }
    }
  }

  const answer = (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e) => checkAnswer(e)}
      onKeyUp={(e) => e.key === "(" && setValue(`${value})`)}
      placeholder="Object.method()"
      type="text"
      className="form_input"
      autoFocus={true}
    />
  );

  return (
    <div className="l-form">
      <form action="" className="form" onSubmit={(e) => e.preventDefault()}>
        {result}
        {answer}
        <label htmlFor="text" className="label"></label>
      </form>
      <p>{`Questions left: ${questions.length}`}</p>
      <button onClick={() => setQuestions([])}>Cheat</button>
    </div>
  );
}
