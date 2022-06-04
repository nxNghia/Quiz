import React from 'react';

const QuizContent = ({
  index,
  question,
  isShowResult,
  finalAnswers,
  finalResult,
  checkAnswer,
}) => {
  return (
    <article className='container'>
      <h3
        className='title is-3 mt-6'
        style={{ textAlign: 'center', minHeight: '10vh' }}
        dangerouslySetInnerHTML={{
          __html: `Question ${index + 1}: ${question}`,
        }}
      />
      <div style={{ textAlign: 'center', minHeight: '30vh' }}>
        {!isShowResult &&
          finalAnswers[index]?.map((answer, id) => {
            return (
              <button
                style={{ width: '75%' }}
                key={id}
                //   className='button is-info mb-4'
                className={`${
                  finalResult[index]
                    ? finalResult[index]['my_answer'] === answer
                      ? 'button is-warning mb-4'
                      : 'button is-info mb-4'
                    : 'button is-info mb-4'
                }`}
                dangerouslySetInnerHTML={{ __html: answer }}
                onClick={() => checkAnswer(answer)}
              />
            );
          })}
        {isShowResult &&
          finalAnswers[index]?.map((answer, id) => {
            const myAnswer = finalResult[index]['my_answer'];
            const correctAnswer = finalResult[index]['correct_answer'];
            if (!myAnswer) {
              return (
                <button
                  style={{ width: '75%' }}
                  key={id}
                  className={`${
                    correctAnswer === answer
                      ? 'button is-warning mb-4'
                      : 'button is-info mb-4'
                  }`}
                  dangerouslySetInnerHTML={{ __html: answer }}
                  onClick={() => checkAnswer(answer)}
                />
              );
            }

            if (
              (myAnswer === answer && myAnswer === correctAnswer) ||
              (answer === correctAnswer && answer !== myAnswer)
            ) {
              return (
                <button
                  style={{ width: '75%' }}
                  key={id}
                  className='button is-primary mb-4'
                  dangerouslySetInnerHTML={{ __html: answer }}
                  onClick={() => checkAnswer(answer)}
                />
              );
            }
            if (answer !== myAnswer && answer !== correctAnswer) {
              return (
                <button
                  style={{ width: '75%' }}
                  key={id}
                  className='button is-info mb-4'
                  dangerouslySetInnerHTML={{ __html: answer }}
                  onClick={() => checkAnswer(answer)}
                />
              );
            }
            return (
              <button
                style={{ width: '75%' }}
                key={id}
                className='button is-danger mb-4'
                dangerouslySetInnerHTML={{ __html: answer }}
                onClick={() => checkAnswer(answer)}
              />
            );
          })}
      </div>
    </article>
  );
};

export default QuizContent;
