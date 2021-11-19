import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const data = fetch("http://localhost:3000").then((x) => {
    x.text().then((v) => {
      setText(v);
      console.log(v);
    });
  });

  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {text}
      </header>
    </div>
  );
}

export default App;
