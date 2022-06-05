import React, { useState } from 'react';
import ListQuestionIndexes from './ListQuestionIndexes';
import Modal from './Modal';
import QuizContent from './QuizContent';
import QuizHeader from './QuizHeader';

const Quiz = ({ questions, amount, setIsFirst }) => {
  let arr = [];
  for (let i = 0; i < amount; i++) {
    arr.push(i);
  }
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [finalResult, setFinalResult] = useState({});
  const [finalAnswers, setFinalAnswers] = useState({});
  const [isShowResult, setIsShowResult] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { question, correct_answer, incorrect_answers } = questions[index];

  if (!finalAnswers[index]) {
    const tempIndex = Math.floor(Math.random() * 4);
    let answers = [...incorrect_answers];
    if (answers.length === 1) {
      // TH Dap an la true or false
      answers.push(correct_answer);
    } else {
      // TH co 4 dap an
      if (tempIndex === 3) {
        answers.push(correct_answer);
      } else {
        answers.push(answers[tempIndex]);
        answers[tempIndex] = correct_answer;
      }
    }
    setFinalAnswers({ ...finalAnswers, [index]: answers });
  }

  const checkAnswer = (answer) => {
    if (isShowResult) {
      return;
    }
    setFinalResult({
      ...finalResult,
      [index]: { my_answer: answer, correct_answer: correct_answer },
    });
    // nextQuestion();
  };

  return (
    <main>
      <Modal
        result={correct === 0 ? 0 : correct / amount}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setIsFirst={setIsFirst}
      />

      <section className='quiz'>
        <ListQuestionIndexes
          isShowResult={isShowResult}
          setIndex={setIndex}
          arr={arr}
          finalResult={finalResult}
        />
        <QuizContent
          checkAnswer={checkAnswer}
          finalAnswers={finalAnswers}
          finalResult={finalResult}
          index={index}
          isShowResult={isShowResult}
          question={question}
        />
      </section>
    </main>
  );
};

export default Quiz;