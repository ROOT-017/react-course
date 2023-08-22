import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/Greeting";
import Async from "./components/Async";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Async />
        <Greeting />
      </header>
    </div>
  );
}

export default App;
