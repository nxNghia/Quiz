import React from 'react';

const ListQuestionIndexes = ({ isShowResult, setIndex, arr, finalResult }) => {
  if (!isShowResult) {
    return (
      <div className='buttons'>
        {arr.map((val) => {
          return (
            <button
              key={val}
              className={`button ${finalResult[val] ? 'is-warning' : ''} `}
              onClick={() => setIndex(val)}
            >
              {val + 1}
            </button>
          );
        })}
      </div>
    );
  }
  return (
    <div className='buttons'>
      {arr.map((val) => {
        return (
          <button
            key={val}
            className={`button ${
              finalResult[val]['my_answer'] ===
              finalResult[val]['correct_answer']
                ? 'is-primary'
                : 'is-danger'
            }`}
            onClick={() => setIndex(val)}
          >
            {val + 1}
          </button>
        );
      })}
    </div>
  );
};

export default ListQuestionIndexes;