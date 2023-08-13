import { useState } from "react";
import uuid from "react-uuid";
import QuestionField from "./QuestionField";
import "../Styles/App.css";
import DeathTimer from "./DeathTimer";
import NewGame from "./NewGame";

function App() {
  const [questions, setQuestions] = useState([]);
  const [time, setTime] = useState();

  return (
    <div className="main">
      <NewGame
        setTime={setTime}
        questions={questions}
        setQuestions={setQuestions}
        time={time}
      />

      {time > 0 && questions.length > 0 && (
        <QuestionField
          questions={questions}
          setQuestions={setQuestions}
          setTime={setTime}
        />
      )}

      {questions.length > 0 && <DeathTimer time={time} setTime={setTime} />}
    </div>
  );
}

export const initQuestions = [
  {
    id: uuid(),
    text: "What method returns the square root of a number?",
    answer: "Math.sqrt()",
    isAnswered: false,
    type: "Math",
  },
  {
    id: uuid(),
    text: "What method returns the value of a number to the specified power?",
    answer: "Math.pow()",
    isAnswered: false,
    type: "Math",
  },
  {
    id: uuid(),
    text: "What method returns the absolute value of a number? ",
    answer: "Math.abs()",
    isAnswered: false,
    type: "Math",
  },
  {
    id: uuid(),
    text: "What method returns a random number between 1 and 0?",
    answer: "Math.random()",
    isAnswered: false,
    type: "Math",
  },
  {
    id: uuid(),
    text: "What method returns the number with the highest value?",
    answer: "Math.max()",
    isAnswered: false,
    type: "Math",
  },
  {
    id: uuid(),
    text: "What method returns the number with the lowest value?",
    answer: "Math.min()",
    isAnswered: false,
    type: "Math",
  },
  {
    id: uuid(),
    text: "What method returns the number rounded up to its nearest integer?",
    answer: "Math.ceil()",
    isAnswered: false,
    type: "Math",
  },
  {
    id: uuid(),
    text: "What method returns the number rounded down to its nearest integer?",
    answer: "Math.floor()",
    isAnswered: false,
    type: "Math",
  },
  {
    id: uuid(),
    text: "What method returns the number rounded to its nearest integer?",
    answer: "Math.round()",
    isAnswered: false,
    type: "Math",
  },
  {
    id: uuid(),
    text: "What method returns the integer part of a number?",
    answer: "Math.trunc()",
    isAnswered: false,
    type: "Math",
  },
  {
    id: uuid(),
    text: "What method returns if a number is negative, null or positive?",
    answer: "Math.sign()",
    isAnswered: false,
    type: "Math",
  },
  {
    id: uuid(),
    text: "What method converts an array into a string of array values?",
    answer: "toString()",
    isAnswered: false,
    type: "Array",
  },
  {
    id: uuid(),
    text: "What method removes the last element of an array?",
    answer: "Array.pop()",
    isAnswered: false,
    type: "Array",
  },
  {
    id: uuid(),
    text: "What method add a new element to the end of an array?",
    answer: "Array.push()",
    isAnswered: false,
    type: "Array",
  },
  {
    id: uuid(),
    text: "What method add a new element to start of an array?",
    answer: "Array.unshift()",
    isAnswered: false,
    type: "Array",
  },
  {
    id: uuid(),
    text: "What method removes the first element of an array?",
    answer: "Array.shift()",
    isAnswered: false,
    type: "Array",
  },
  {
    id: uuid(),
    text: "What method converts array like values and iterable values into arrays?",
    answer: "Array.from()",
    isAnswered: false,
    type: "Array",
  },
  {
    id: uuid(),
    text: "What method fills the specified array elements with a static value?",
    answer: "Array.fill()",
    isAnswered: false,
    type: "Array",
  },
  {
    id: uuid(),
    text: "What method returns a new array that contains a copy of the part of the given array?",
    answer: "Array.slice()",
    isAnswered: false,
    type: "Array",
  },
  {
    id: uuid(),
    text: "What method adds/removes the elements to/from the given array?",
    answer: "Array.splice()",
    isAnswered: false,
    type: "Array",
  },
  {
    id: uuid(),
    text: "What method returns a new array object which contains two or more merged arrays?",
    answer: "Array.concat()",
    isAnswered: false,
    type: "Array",
  },
  {
    id: uuid(),
    text: "What method returns the length of a string?",
    answer: "String.length()",
    isAnswered: false,
    type: "String",
  },
  {
    id: uuid(),
    text: "What method replaces a specified value with another value in a string?",
    answer: "String.replace()",
    isAnswered: false,
    type: "String",
  },
  {
    id: uuid(),
    text: "What method returns the calling string value converted to uppercase?",
    answer: "String.toUpperCase()",
    isAnswered: false,
    type: "String",
  },
  {
    id: uuid(),
    text: "What method removes whitespace from both sides of a string?",
    answer: "String.trim()",
    isAnswered: false,
    type: "String",
  },
  {
    id: uuid(),
    text: "What method returns the index within the calling String object of the first occurrence of the specified value (-1 if not found)?",
    answer: "String.indexOf()",
    isAnswered: false,
    type: "String",
  },
  {
    id: uuid(),
    text: "What method extracts a section of a string(start, end) and returns a new string?",
    answer: "String.slice()",
    isAnswered: false,
    type: "String",
  },
  {
    id: uuid(),
    text: "What method returns a string representing the specified object?",
    answer: "String.toString()",
    isAnswered: false,
    type: "String",
  },
  {
    id: uuid(),
    text: "What method returns the calling string value converted to lowercase?",
    answer: "String.toLowerCase()",
    isAnswered: false,
    type: "String",
  },
  {
    id: uuid(),
    text: "What method combines the text of two strings and returns a new string?",
    answer: "String.concat()",
    isAnswered: false,
    type: "String",
  },
  {
    id: uuid(),
    text: "What method returns the character at the specified index?",
    answer: "String.charAt()",
    isAnswered: false,
    type: "String",
  },
];

export default App;
