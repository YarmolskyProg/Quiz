import { useState } from 'react';
import './index.scss';

const questions = [
  {
    title: 'React is ... ?',
    variants: ['library', 'framework', 'application'],
    correct: 0,
  },
  {
    title: 'The component is ... ',
    variants: ['application', 'part of an application or page', 'what I dont know what is'],
    correct: 1,
  },
  {
    title: 'What is JSX?',
    variants: [
      'This is plain HTML',
      'This is a function',
      'This is the same HTML, but with the ability to execute JS code',
    ],
    correct: 2,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>You guessed {correct} answer from {questions.length}</h2>
      <a href='/'>try again</a>
    </div>
  );
}

function Game({ obj, question, handlerClick }) {

  let per = 0
  per = Math.round((question) * 100 / questions.length)
  return (
    <>
      <div className="progress">
        <div style={{ width: `${per}%` }} className="progress__inner"></div>
      </div>
      <h1>{obj.title}</h1>
      <ul>
        {obj.variants.map((res, index) =>
          <li onClick={() => handlerClick(index)} key={index}>{res}</li>
        )}
      </ul>
    </>
  );
}

function App() {
  const [question, setquestion] = useState(0);
  const [correct, setcorrect] = useState(0);
  function handlerClick(index) {
    setquestion(question + 1)
    if (questions[question].correct == index) {
      setcorrect(correct + 1)

    }

  }
  return (
    <div className="App">
      {
        question !== questions.length ?
          <Game obj={questions[question]} question={question} handlerClick={handlerClick} /> :
          <Result correct={correct} />
      }

    </div>
  );
}

export default App;
