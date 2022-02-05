import { useRef } from 'react';

export default function UseRef() {
  const pElement = useRef(null);
  const onButtonClick = () => {
    pElement.current.innerHTML = "hello";
  };

  return (
    <div>
      <h2>useRef:</h2>
      <p ref={pElement}>hi</p>
      <button onClick={onButtonClick}>Change text</button>
    </div>
  );
}
