import React, { useCallback, useState } from 'react';

import UseCallbackChild from './use-callback-child';

export default function UseCallBackParent() {
  const [currentItem, setCurrentItem] = useState("");
  const onItemClick = useCallback((event) => {
    setCurrentItem(event.currentTarget.innerHTML);
  }, []);

  const cities = ["Philadelphia", "West Chester", "Media"];

  return (
    <div>
      <h2>useCallback:</h2>
      <p>currentItem: {currentItem}</p>
      <hr />
      {cities.map((city) => (
        <UseCallbackChild
          onItemClick={onItemClick}
          city={city}
          key={city}
        ></UseCallbackChild>
      ))}
    </div>
  );
}
