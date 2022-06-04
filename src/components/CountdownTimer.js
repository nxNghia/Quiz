import React from 'react';
import useCountdown from '../hooks/useCoundown';
import { formatNumber } from '../utils/formatNumber';

const CountdownTimer = ({ submit }) => {
  const timeout = localStorage.getItem('timeout');
  const timeLeft = useCountdown(new Date().getTime() + timeout * 60000);
  let minutes = formatNumber(Math.floor((timeLeft - 1) / 60000) % 60);
  let seconds = formatNumber(Math.floor((timeLeft - 1) / 1000) % 60);

  if (minutes === '00' && seconds === '00') {
    submit();
  }

  return (
    <span className='tag is-danger is-large'>{`${minutes}:${seconds}`}</span>
  );
};

export default CountdownTimer;