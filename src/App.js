import "./styles.css";

import { useState, useMemo } from "react";

export default function App() {
  const [count, setCount] = useState(10);
  const [arr, setArr] = useState([1, 2, 3, 5]);
  function showMax() {
    console.log('changing max')
    return Math.max(...arr)
  }
  const memval = useMemo(() => showMax(), [arr])

  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add count</button>
      <button onClick={() => setArr([...arr, Math.round(count * Math.random()) ])}>Add to arr</button>
      <p>{JSON.stringify(arr)}</p>
      <p>{memval}</p>
      <p>{count}</p>
    </div>
  );
}

