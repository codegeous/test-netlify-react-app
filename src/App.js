import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Welcome to D'coders Youtube Channel</p>
                <a
                    className="App-link"
                    href="https://www.youtube.com/channel/UCdItDI6oTgPW7l9WOJI7ItA/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Channel Page
                </a>
            </header>
        </div>
    );
}

export default App;
