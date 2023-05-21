import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"> </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="https://www.jxtangzhi.com"
              target="_blank"
              rel="noreferrer"
            >
              Jia Xin Tang Zhi
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/jiatangzhi/react-dictionary"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
