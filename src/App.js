import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="AppName">Weather App</h1>
        <Weather />
        <footer>
          <p>
            This project was coded by Keri Ritenour and is open-sourced on{" "}
            <a
              href="https://github.com/keri-codes/react-weather-app-project"
              target="_blank"
              rel="noreferrer"
              alt="link to profile page on github"
            >
              Github
            </a>
            .
          </p>
        </footer>{" "}
      </div>
    </div>
  );
}
