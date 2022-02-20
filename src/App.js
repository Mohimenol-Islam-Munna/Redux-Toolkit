import "./App.css";
import Counter from "./Components/Counter";
import Posts from "./Components/Posts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Redux ToolKit Complete Practice</h3>
      </header>

      <Counter />
      <Posts />
    </div>
  );
}

export default App;
