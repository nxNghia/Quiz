import React, { useState } from 'react';
import axios from 'axios';

const typeOfCategory = {
  sports: 21,
  music: 12,
  film: 11,
};

const API_ENDPOINT = 'https://opentdb.com/api.php';

const tempUrl =
  'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple';

const SetupForm = ({
  setLoading,
  setIsFirst,
  setQuestions,
  amount,
  setAmount,
}) => {
  const [category, setCategory] = useState('sports');
  const [difficulty, setDifficulty] = useState('medium');
  const [timer, setTimer] = useState(10);

  const fetchQuestion = async (url) => {
    try {
      setLoading(true);
      setIsFirst(false);
      const res = await axios.get(url);
      const { results } = res.data;
      setQuestions(results);
      setLoading(false);
    } catch (error) {
      setIsFirst(true);
      setLoading(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('timeout', timer);
    const url = `${API_ENDPOINT}?amount=${amount}&category=${typeOfCategory[category]}&difficulty=${difficulty}`;
    fetchQuestion(url);
  };

  return (
    <main>
      <section className='quiz quiz-small'>
        <form onSubmit={onSubmit}>
          <h2 className='title is-2'>QUIZ TIME!</h2>
          <div className='field'>
            <label className='label'>Number of questions (1-20)</label>
            <div className='control'>
              <input
                className='input is-primary'
                type='number'
                name='amount'
                min={1}
                max={20}
                value={amount}
                onChange={(e) => setAmount(e.target.value * 1)}
              />
            </div>
          </div>

          <div className='field'>
            <label className='label'>Category</label>
            <div style={{ width: '100%' }} className='select is-primary'>
              <select
                style={{ width: '100%' }}
                name='category'
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option value='sports'>Sports</option>
                <option value='music'>Music</option>
                <option value='film'>Film</option>
              </select>
            </div>
          </div>

          <div className='field'>
            <label className='label'>Category</label>
            <div style={{ width: '100%' }} className='select is-primary'>
              <select
                style={{ width: '100%' }}
                name='difficulty'
                value={difficulty}
                onChange={(e) => {
                  setDifficulty(e.target.value);
                }}
              >
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
              </select>
            </div>
          </div>
          <div className='field'>
            <label className='label'>Timer (1-60) minutes</label>
            <div className='control'>
              <input
                className='input is-primary'
                type='number'
                name='timeout'
                min={1}
                max={60}
                value={timer}
                onChange={(e) => setTimer(e.target.value)}
              />
            </div>
          </div>

          <button
            type='submit'
            className='button is-primary mt-6'
            style={{ width: '100%' }}
          >
            Start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;