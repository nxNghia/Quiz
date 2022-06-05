import React, { useState } from 'react';
import ListQuestionIndexes from './ListQuestionIndexes';
import Modal from './Modal';
import QuizContent from './QuizContent';
import QuizFooter from './QuizFooter';
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

  const previousQuestion = () => {
    if (index === 0) return;
    setIndex(index - 1);
  };

  const nextQuestion = () => {
    if (index === amount - 1) return;
    setIndex(index + 1);
  };

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

  const submit = () => {
    if (isShowResult) {
      setIsFirst(true);
      return;
    }
    setIndex(0);
    setIsModalOpen(true);

    let result = {};
    let numOfCorrect = correct;

    // set object of final result
    arr.forEach((el) => {
      if (!finalResult[el]) {
        result[el] = {
          my_answer: undefined,
          correct_answer: questions[el]['correct_answer'],
        };
      }
    });

    setFinalResult({
      ...finalResult,
      ...result,
    });

    // Count num of correct answer
    Object.values({ ...finalResult, ...result }).forEach((el) => {
      if (el['my_answer'] === el['correct_answer']) {
        numOfCorrect += 1;
      }
    });
    setCorrect(numOfCorrect);
    setIsShowResult(true);
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
        <QuizHeader
          amount={amount}
          correct={correct}
          index={index}
          finalResult={finalResult}
          isShowResult={isShowResult}
          submit={submit}
        />
        <QuizContent
          checkAnswer={checkAnswer}
          finalAnswers={finalAnswers}
          finalResult={finalResult}
          index={index}
          isShowResult={isShowResult}
          question={question}
        />
        <QuizFooter
          amount={amount}
          finalResult={finalResult}
          index={index}
          isShowResult={isShowResult}
          nextQuestion={nextQuestion}
          previousQuestion={previousQuestion}
          questions={questions}
          submit={submit}
        />
      </section>
    </main>
  );
};

export default Quiz;