import { useState } from "react";

function App() {
  const [time, setTime] = useState("no time set");

  async function getTime() {
    const res = await fetch("");
    const responseObject = await res.text();

    setTime(responseObject);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Clock</h1>
      </header>
      <pre>
        <code>{time}</code>
      </pre>
      <button onClick={getTime}>Get New Time</button>
    </div>
  );
}

export default App;
