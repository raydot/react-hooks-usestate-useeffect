export const CounterDemo = () => {
  // syntax useCounter(start, finish, step)
  const [count, handleCount] = useCounter(100, 130, 5);
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleCount}>Count</button>
    </div>
  );
};

// Imported into hooks.js for convenience.
