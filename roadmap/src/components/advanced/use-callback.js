import { useCallback } from "react";

export function CustomHookChildOne({ value }) {
  const memoizedCallback = useCallback(() => {
    return Number(value) + 5;
  }, [value]);

  return <p>{memoizedCallback()}</p>;
}

export default function CustomHookParent() {
  const values = [
    { value: 1, key: 1 },
    { value: 1, key: 2 },
    { value: 2, key: 3 },
    { value: 2, key: 4 },
  ];
  return (
    <div>
      {values.map((value) => (
        <CustomHookChildOne
          value={value.value}
          key={value.key}
        ></CustomHookChildOne>
      ))}
    </div>
  );
}
