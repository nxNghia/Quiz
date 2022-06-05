import React from 'react';

const QuizFooter = ({
                        index,
                        previousQuestion,
                        finalResult,
                        amount,
                        submit,
                        isShowResult,
                        nextQuestion,
                        questions,
                    }) => {
    return (
        <>
            <div
                className='mt-6'
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <button
                    disabled={index === 0}
                    className='button is-info is-outlined'
                    onClick={previousQuestion}
                >
                    Previous question
                </button>
                {Object.keys(finalResult).length === amount && (
                    <button className='button is-info' onClick={submit}>
                        {!isShowResult ? 'Submit' : 'Play again'}
                    </button>
                )}
                <button
                    disabled={index === amount - 1}
                    className='button is-info is-outlined'
                    onClick={nextQuestion}
                >
                    Next question
                </button>
            </div>
            <div style={{ textAlign: 'right' }} className='mt-4'>
        <span className='tag is-info'>
          {`${index + 1}/${questions.length}`}
        </span>
            </div>
        </>
    );
};

export default QuizFooter;