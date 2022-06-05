import React from 'react';
import CountdownTimer from './CountdownTimer';

const QuizHeader = ({
                        correct,
                        amount,
                        submit,
                        isShowResult,
                        finalResult,
                        index,
                    }) => {
    return (
        <div className='quiz-title'>
      <span className='tag is-primary is-large'>
        Correct answers: {correct}/{amount}
      </span>
            {!isShowResult && <CountdownTimer submit={submit} />}
            {isShowResult && (
                <span className='tag is-primary is-large'>
          {finalResult[index]['my_answer'] ===
          finalResult[index]['correct_answer']
              ? '1/1 point'
              : '0/1 point'}
        </span>
            )}
        </div>
    );
};

export default QuizHeader;