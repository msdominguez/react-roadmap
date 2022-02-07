import React, { useMemo, useState } from 'react';

function Factorial({ number }) {
  const factorial = useMemo(() => factorialOf(number), [number]);
  return <p>Factorial: {factorial}</p>;
}

function factorialOf(n) {
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}

export default function UseMemo() {
  const [num, setNum] = useState(0);

  function onClick() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const randomNum = numbers[Math.floor(Math.random() * numbers.length)];
    setNum(randomNum);
  }

  return (
    <div>
      <h2>useMemo:</h2>
      <Factorial number={num}></Factorial>
      <button onClick={onClick}>Get new factorial</button>
    </div>
  );
}
