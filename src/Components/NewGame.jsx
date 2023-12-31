import { initQuestions } from "./App";
import arrayShuffle from "array-shuffle";
import PropTypes from "prop-types";

NewGame.propTypes = {
  setQuestions: PropTypes.func,
  setTime: PropTypes.func,
  time: PropTypes.number,
  questions: PropTypes.array,
};

export default function NewGame({ setTime, questions, setQuestions, time }) {
  const questionTypes = (
    <ul>
      <li onClick={(e) => startNewGame(e)}>Math</li>
      <li onClick={(e) => startNewGame(e)}>String</li>
      <li onClick={(e) => startNewGame(e)}>Array</li>
      <li onClick={(e) => startNewGame(e)}>Any</li>
    </ul>
  );

  function startNewGame(e) {
    // const easyMode = () => {
    //   const option = document.createElement("p");
    //   easyMode.textContent = "easy";
    //   document.append(option);
    // };

    if (e.target.textContent === "Any") {
      setQuestions(arrayShuffle(initQuestions));
      setTime(180);
    } else {
      setQuestions(
        arrayShuffle(
          initQuestions.filter((elem) => elem.type === e.target.textContent)
        )
      );
      setTime(60);
    }
  }

  return (
    <>
      {time > 0 && questions.length === 0 && (
        <p>Congratulations! Want to play again?</p>
      )}
      <p>
        {(time > 0 && questions.length > 0 && time) ||
          (time === 0 && "Game over. Let's try again!")}
      </p>
      {time > 0 && questions.length === 0 && questionTypes}

      {time === undefined && <p>Choose your questions</p>}

      {(time === undefined || time === 0) && questionTypes}
    </>
  );
}
