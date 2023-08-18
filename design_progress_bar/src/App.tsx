import { useEffect, useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 100) {
          clearInterval(intervalId);
          console.log("Interval stopped.");
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="app">
      <h1>Progress Bar</h1>
      <ProgressBar percent={count} />
      <span>{count >= 100 ? "Completed" : "Loading..."}</span>
    </div>
  );
}

export default App;
