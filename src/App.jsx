import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Heading from "./components/Heading";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Heading title="Intro a React" />
        <MyComponent bgColor="red" />
        <MyComponent bgColor="blue" />
      </header>
    </div>
  );
}

export default App;
